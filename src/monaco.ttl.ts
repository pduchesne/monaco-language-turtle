import * as monaco from "monaco-editor";
import IMonarchLanguage = monaco.languages.IMonarchLanguage;
//import { WorkerManager } from "./WorkerManager";
//import DiagnosticsAdapter, { WorkerAccessor } from "./DiagnosticsAdapter";
import {CancellationToken, editor} from "monaco-editor";
import * as rdflib from 'rdflib';
import { NamedNode } from "rdflib";
import IStandaloneThemeData = editor.IStandaloneThemeData;

// Complete how-to on how to write a custom monaco language at
// https://betterprogramming.pub/create-a-custom-web-editor-using-typescript-react-antlr-and-monaco-editor-part-1-2f710c69c18c

const turtleTheme: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: 'iri', foreground: '#0829c4' },
    { token: 'keyword', foreground: '#315c89', fontStyle: 'bold' },
    { token: 'prefix', foreground: '#6900b1' },
    { token: 'prefixedname', foreground: '#7f740e' },
    { token: 'symbol', foreground: '#585858' },
    { token: 'invalid', foreground: '#E05050' },
    { token: 'string', foreground: '#2a6c00' },
    { token: 'comment', foreground: '#636363', fontStyle: 'italic' },
    { token: 'operator', foreground: '#b86d04', fontStyle: 'bold' },
  ],
  colors: {
    'editor.foreground': '#000000'
  }
};

const turtleThemeDark: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: 'iri', foreground: '#3383ff' },
    { token: 'keyword', foreground: '#68a7eb', fontStyle: 'bold' },
    { token: 'prefix', foreground: '#ad57e7' },
    { token: 'prefixedname', foreground: '#998f33' },
    { token: 'symbol', foreground: '#939393' },
    { token: 'invalid', foreground: '#c91414' },
    { token: 'string', foreground: '#4e9f1b' },
    { token: 'comment', foreground: '#a6a6a6', fontStyle: 'italic' },
    { token: 'operator', foreground: '#cd8a2c', fontStyle: 'bold' },
  ],
  colors: {
    // active line number : #d9e1ff
    // .codicon-folding-expanded : #b5b5b5
    'editor.foreground': '#cfcfcf',
    'editor.background': '#191919'
  }
};


// on writing on custom token provider : https://github.com/microsoft/monaco-editor/issues/361

// Language definition inspired by https://github.com/microsoft/monaco-editor/blob/main/src/basic-languages/sparql/sparql.ts

export const monarchTurtleLanguage: IMonarchLanguage = {
  defaultToken: 'invalid',
  ignoreCase: false,
  keywords: ['a', '@prefix', '@base', 'BASE', 'PREFIX', 'true', 'false'],
  typeKeywords: [],
  brackets: [
    { open: '{', close: '}', token: 'delimiter.curly' },
    { open: '[', close: ']', token: 'delimiter.square' },
    { open: '(', close: ')', token: 'delimiter.parenthesis' },
    { open: '<', close: '>', token: 'delimiter.angle' }
  ],
  escapes: /\\(?:[_~.\-!$&\\'()*+,;=/?#@%]|%[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  // we include these common regular expressions
  //symbols: /[.;:%]+/,

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      // resource indicators
      [/<([^\s\u00a0>])*>?/, 'iri'],
      //[/<([^<>])*>/ , 'iri'],

      // strings
      { include: '@strings' },

      // line comment
      [/#.*/, 'comment'],

      // prefix definition
      [/([_\w\d]+):\s+/, 'prefix'],

      // (prefixed) name
      [/[_\w\d]+:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])*/, 'prefixedname'],
      [/:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/, 'prefixedname'],

      // identifiers and keywords
      [
        // /[@]?[0-9a-zA-Z_$][\w$]*/,
        /[@]?[_\w\d]+/,
        {
        cases: {
          '@keywords': { token: 'keyword' },
          '@default': 'identifier'
        }
      }],

      // whitespace
      { include: '@whitespace' },

      [/[;,.]/, 'delimiter'],

      // delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      //[/[<>](?!@symbols)/, '@brackets'],
      /*
      [
        /@symbols/,
        {
          cases: {
            '@operators': 'delimiter',
            '@default': ''
          }
        }
      ],

       */

      // operators
      [/\^\^/, 'operator.sql'],

    ],

    whitespace: [
      [/[ \t\r\n]+/, ''],
    ],

    strings: [
      [/'([^'\\]|\\.)*$/, 'string.invalid'], // non-terminated single-quoted string
      [/'$/, 'string.sql', '@pop'],
      [/'/, 'string.sql', '@stringBody'],
      [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-terminated single-quoted string
      [/"$/, 'string.sql', '@pop'],
      [/"/, 'string.sql', '@dblStringBody']
    ],
    // single-quoted strings
    stringBody: [
      [/[^\\']+/, 'string.sql'],
      [/\\./, 'string.escape'],
      [/'/, 'string.sql', '@pop']
    ],
    // double-quoted strings
    dblStringBody: [
      [/[^\\"]+/, 'string.sql'],
      [/\\./, 'string.escape'],
      [/"/, 'string.sql', '@pop']
    ]
  },
}


const DV = rdflib.Namespace('https://api.datavillage.me/');
const SDO = rdflib.Namespace('https://schema.org/');
const RDFS = rdflib.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#');
const GConsent = rdflib.Namespace('https://w3id.org/GConsent#');

const linkProvider: monaco.languages.LinkProvider = {
  provideLinks(model, token) {
    return null;
  }
}

const createHoverProvider = (monacoInstance: typeof monaco): monaco.languages.HoverProvider => ({
  provideHover: function (model, position, token: CancellationToken) {
    try {
      //var word = model.getWordAtPosition(position);

      const rdfGraph: rdflib.Store = (model as any).rdfGraph;

      //let textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column})
      let lineContent = model.getLineContent(position.lineNumber);
      const lineTokens = monacoInstance.editor.tokenize(lineContent, 'turtle')[0];

      //const lineTokens = (model as any).getLineTokens(position.lineNumber);

      const hoveredTokenIdx = lineTokens.findIndex((t, idx) => {
        return t.offset <= position.column - 1 && (idx >= lineTokens.length - 1 || position.column - 1 < lineTokens[idx + 1].offset)
      });
      const hoveredTokenStartOffset = lineTokens[hoveredTokenIdx].offset;
      const hoveredTokenEndOffset = lineTokens[hoveredTokenIdx + 1] ? lineTokens[hoveredTokenIdx + 1].offset : lineContent.length;
      const hoveredToken = lineTokens[hoveredTokenIdx];


      const tokenText = lineContent.substring(hoveredTokenStartOffset, hoveredTokenEndOffset)

      var range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: hoveredTokenStartOffset + 1,
        endColumn: hoveredTokenEndOffset + 1
      };

      const contents: monaco.IMarkdownString[] = [];

      if (hoveredToken.type == "prefix.turtle") {
        return null;
        /*
        contents.push(
          { value: `## ${tokenText}` },
          { value: `${rdfGraph.namespaces[tokenText.split(':')[0]]}` },
        )

         */
      } else if (hoveredToken.type == "prefixedname.turtle" || hoveredToken.type == "iri.turtle") {

        let iri: string;
        if (hoveredToken.type == "prefixedname.turtle") {
          const [prefix, name] = tokenText.split(':');
          iri = rdfGraph.namespaces[prefix] + name;
        } else {
          iri = tokenText.substring(1, tokenText.length - 1);
        }

        const name = rdfGraph.anyValue(rdflib.namedNode(iri), SDO('name')) || rdfGraph.anyValue(rdflib.namedNode(iri), SDO('title'));
        const types = [...rdfGraph.each(rdflib.namedNode(iri), RDFS('type')), ...rdfGraph.each(rdflib.namedNode(iri), SDO('additionalType'))]

        const typeNames = types.map(n => n.value);

        contents.push(
            {value: `## ${name || iri}`},
            {value: `${typeNames.join(", ")}`},
            //{ value: `${tokenText}` }
        )

        // TODO fix Recommandation into Recommendation everywhere
        if (typeNames.includes(DV('RecommandationExplain').value) || typeNames.includes(SDO('Recommandation').value) || typeNames.includes(SDO('Recommendation').value)) {
          const rank = rdfGraph.anyValue(rdflib.namedNode(iri), DV('rank'));
          const weight = rdfGraph.anyValue(rdflib.namedNode(iri), DV('weight'));
          contents.push(
              {value: `Rank **${rank}**`},
              {value: `Weight **${weight}**`}
          )
        }
        if (typeNames.includes(SDO('Action').value)) {
          const object = rdfGraph.any(rdflib.namedNode(iri), SDO('object'));
          const objectName = object && rdfGraph.anyValue(object as NamedNode, SDO('name'));
          contents.push(
              {value: `Action on **${objectName}**`},
          )
        } else if (typeNames.includes(GConsent('Consent').value)) {
          const purpose = rdfGraph.anyValue(rdflib.namedNode(iri), GConsent('purpose'));
          contents.push(
              {value: `**${purpose}**`},
          )
        } else if (typeNames.includes(SDO('MusicEvent').value)) {
          const startDate = rdfGraph.anyValue(rdflib.namedNode(iri), SDO('startDate'));
          const performer = rdfGraph.any(rdflib.namedNode(iri), SDO('performer'));
          const performerName = performer && rdfGraph.anyValue(performer as NamedNode, SDO('name'));
          const location = rdfGraph.any(rdflib.namedNode(iri), SDO('location'));
          const locationName = location && rdfGraph.anyValue(location as NamedNode, SDO('name'));
          contents.push(
              {value: `Artist **${performerName}**`},
              {value: `Location **${locationName}**`},
          )
          if (startDate)
            contents.push(
                {value: `Date **${new Date(startDate).toLocaleString()}**`},
            )
        } else if (typeNames.includes(SDO('MusicAlbum').value)) {

          /*
          const query = rdflib.SPARQLToQuery(`SELECT ?artist WHERE { <${iri}> <${SDO('byArtist').value}>/<${SDO('name').value}> ?artist }.`, false, rdfGraph);
          const result$ = new Promise<Term | null>( (resolve, reject) => {
            query && rdfGraph.query(query, bindings => {
              resolve(bindings['artist'])
              // TODO what if rejected ?
            });
          })
          const artist = await result$;
          */
          const artist = rdfGraph.any(rdflib.namedNode(iri), SDO('byArtist'));
          const artistName = artist && rdfGraph.anyValue(artist as NamedNode, SDO('name'));

          contents.push(
              {value: `by **${artistName}**`},
          )
        } else {
          // if unknown type and no name to display, skip the popup
          if (!name) return null;
        }

      } else {
        /*
        contents.push(
          { value: `${hoveredToken.type}` },
          { value: `${tokenText}` }
        )

         */
        return null;
      }

      return {
        range,
        contents
      }
    } catch (err) {
      // catch (parsing) errors
      console.warn("Turtle hover failed :");
      console.warn(err);

      return null;
    }
  }
})

export const onTurtleCb = (monacoInstance: typeof monaco) => () => {
// use either setTokensProvider or setMonarchTokensProvider
// cf https://github.com/microsoft/monaco-editor/issues/361
  monacoInstance.languages.setMonarchTokensProvider('turtle', monarchTurtleLanguage)

  monacoInstance.languages.setLanguageConfiguration('turtle', {
    autoClosingPairs: [
      { open: "'", close: "'", notIn: ['string'] },
      { open: '"', close: '"', notIn: ['string'] },
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '<', close: '>' }
    ],
    comments: {lineComment: '#'}
  });

  /* This causes errors when changing the content. Why was this necessary ?
  const client = new WorkerManager();

  const worker: WorkerAccessor = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  //Call the errors provider
  new DiagnosticsAdapter(worker);

   */
};

/*
monaco.languages.registerTokensProviderFactory('turtle', {
  create: async (): Promise<languages.IMonarchLanguage> => {
    const mod = await lazyLanguageLoader.load();
    return mod.language;
  }
});
 */

export function registerTurtle(monacoInstance: typeof monaco) {
  if (!monacoInstance.languages.getLanguages().some(({ id }) => id === 'turtle')) {
    monacoInstance.editor.defineTheme('turtleTheme', turtleTheme);
    monacoInstance.editor.defineTheme('turtleThemeDark', turtleThemeDark);

    // register file types and extension for a languageId
    monacoInstance.languages.register({
      id: 'turtle',
      extensions: [
        '.ttl',
        '.nquads',
        '.n3',
        '.nq',
        '.nt'
      ],
      //firstLine: '(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)',
      aliases: ['turtle', 'ttl'],
      mimetypes: ['text/turtle', 'text/n3', 'application/n-triples', 'application/n-quads'],
    });

    monacoInstance.languages.registerLinkProvider({language: 'turtle', exclusive: true}, linkProvider);
    monacoInstance.languages.registerHoverProvider('turtle', createHoverProvider(monacoInstance));
    monacoInstance.languages.onLanguage('turtle', onTurtleCb(monacoInstance));
  }
}

registerTurtle(monaco);
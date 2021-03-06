import * as monaco from "monaco-editor";
import IMonarchLanguage = monaco.languages.IMonarchLanguage;
import { WorkerManager } from "./WorkerManager";
import DiagnosticsAdapter, { WorkerAccessor } from "./DiagnosticsAdapter";
import { CancellationToken } from "monaco-editor";
import * as rdflib from 'rdflib';

// Complete how-to on how to write a custom monaco language at
// https://betterprogramming.pub/create-a-custom-web-editor-using-typescript-react-antlr-and-monaco-editor-part-1-2f710c69c18c


monaco.editor.defineTheme('turtleTheme', {
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
});


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
      [/<[^\s\u00a0>]*>?/, 'iri'],
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


// register file types and extension for a languageId
monaco.languages.register({
  id: 'turtle',
  extensions: [
    '.ttl',
    '.nquads',
    '.n3'
  ],
  //firstLine: '(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)',
  aliases: ['turtle', 'ttl'],
  mimetypes: ['text/turtle', 'text/n3', 'application/n-triples', 'application/n-quads'],
});


const SDO = rdflib.Namespace('https://schema.org/');

monaco.languages.registerHoverProvider('turtle', {
  provideHover: function (model, position, token: CancellationToken) {
    //var word = model.getWordAtPosition(position);

    const rdfGraph: rdflib.Store = (model as any).rdfGraph;

    const lineTokens = (model as any).getLineTokens(position.lineNumber);
    const hoveredTokenIdx = lineTokens.findTokenIndexAtOffset(position.column-1)
    const hoveredTokenStartOffset = lineTokens.getStartOffset(hoveredTokenIdx);
    const hoveredTokenEndOffset = lineTokens.getEndOffset(hoveredTokenIdx);

    //let textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column})
    let lineContent = model.getLineContent(position.lineNumber);
    const parsedTokens = monaco.editor.tokenize(lineContent, 'turtle');
    const hoveredToken = parsedTokens[0][hoveredTokenIdx];

    const tokenText = lineContent.substring(hoveredTokenStartOffset, hoveredTokenEndOffset)

    var range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: hoveredTokenStartOffset + 1,
      endColumn: hoveredTokenEndOffset + 1
    };

    const contents: monaco.IMarkdownString[] = [];

    if (hoveredToken.type == "prefix.turtle" ) {

      contents.push(
        { value: `## ${tokenText}` },
        { value: `${rdfGraph.namespaces[tokenText.split(':')[0]]}` },
      )
    }
    else if (hoveredToken.type == "prefixedname.turtle" || hoveredToken.type == "iri.turtle") {

      let iri: string;
      if (hoveredToken.type == "prefixedname.turtle") {
        const [prefix, name] = tokenText.split(':');
        iri = rdfGraph.namespaces[prefix]+name;
      } else {
        iri = tokenText;
      }

      const name = rdfGraph.anyValue(rdflib.namedNode(iri), SDO('name')) ;

      contents.push(
        { value: `## ${name}` },
        { value: `${hoveredToken.type}` },
        { value: `${tokenText}` }
      )
    } else {
      contents.push(
        { value: `${hoveredToken.type}` },
        { value: `${tokenText}` }
      )
    }

    return {
      range,
      contents
    }
  }
});





monaco.languages.onLanguage('turtle', () => {
// use either setTokensProvider or setMonarchTokensProvider
// cf https://github.com/microsoft/monaco-editor/issues/361
  monaco.languages.setMonarchTokensProvider('turtle', monarchTurtleLanguage)

  monaco.languages.setLanguageConfiguration('turtle', {
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
  const client = new WorkerManager();

  const worker: WorkerAccessor = (...uris) => {
    return client.getLanguageServiceWorker(...uris);
  };
  //Call the errors provider
  new DiagnosticsAdapter(worker);
});


/*
monaco.languages.registerTokensProviderFactory('turtle', {
  create: async (): Promise<languages.IMonarchLanguage> => {
    const mod = await lazyLanguageLoader.load();
    return mod.language;
  }
});
 */

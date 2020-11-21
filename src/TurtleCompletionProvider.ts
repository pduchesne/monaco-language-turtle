import { languages } from "monaco-editor";

// example taken from https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
// howto at https://mono.software/2017/04/11/custom-intellisense-with-monaco-editor/


const completionProvider = {
  provideCompletionItems: () => {
    var suggestions = [
      {
        label: 'simpleText',
        kind: languages.CompletionItemKind.Text,
        insertText: 'simpleText'
      },
      {
        label: 'testing',
        kind: languages.CompletionItemKind.Keyword,
        insertText: 'testing(${1:condition})',
        insertTextRules: languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'ifelse',
        kind: languages.CompletionItemKind.Snippet,
        insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
        insertTextRules: languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'If-Else Statement'
      }
    ];
    return { suggestions: suggestions };
  }
}

export default completionProvider
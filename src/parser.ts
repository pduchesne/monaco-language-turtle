import { turtleParser } from "./ANTLR/turtleParser";
import { turtleLexer } from "./ANTLR/turtleLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import TurtleLangErrorListener from "./ErrorListener";

// if error occurs "Class constructor Lexer cannot be invoked without 'new'"
// --> change tsconfig target and lib
// see https://github.com/tunnelvisionlabs/antlr4ts/issues/326

// this may lead to other problems like missing 'assert' --> make sure to declare appropriate polyfill as fallback in webpack config
// (see https://github.com/angular/angular-cli/issues/20819)

// turtle grammar taken from https://github.com/antlr/grammars-v4/blob/master/turtle/TURTLE.g4

export default function parseAndGetASTRoot(code: string) {
  const inputStream = new ANTLRInputStream(code);
  const lexer = new turtleLexer(inputStream);

  lexer.removeErrorListeners()
  const turtleLangErrorListener = new TurtleLangErrorListener();
  lexer.addErrorListener(turtleLangErrorListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new turtleParser(tokenStream);

  parser.removeErrorListeners();
  parser.addErrorListener(turtleLangErrorListener);

  const ast = parser.turtleDoc()
  const errors  = turtleLangErrorListener.getErrors();

  return {ast, errors}
}
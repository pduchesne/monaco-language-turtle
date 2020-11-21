import { ITurtleLangError } from "./ErrorListener";
import parseAndGetASTRoot from "./parser";

export default class TurtleLanguageService {
  validate(code: string): ITurtleLangError[] {
    const syntaxErrors: ITurtleLangError[] = parseAndGetASTRoot(code).errors;
    //Later we will append semantic errors
    return syntaxErrors;
  }
}
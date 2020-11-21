//import * as monaco from "monaco-editor-core";

import { ITurtleLangError } from "./ErrorListener";
import TurtleLanguageService from "./TurtleService";
import { worker } from "monaco-editor";
import IWorkerContext = worker.IWorkerContext;


export class TurtleLangWorker {

  private _ctx: IWorkerContext;
  private languageService: TurtleLanguageService;
  constructor(ctx: IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new TurtleLanguageService();
  }

  doValidation(): Promise<ITurtleLangError[]> {
    const code = this.getTextDocument();
    return Promise.resolve(this.languageService.validate(code));
  }
  private getTextDocument(): string {
    const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
    return model.getValue();
  }

}
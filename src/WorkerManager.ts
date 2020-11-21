import * as monaco from "monaco-editor";

import Uri = monaco.Uri;
import { TurtleLangWorker } from "./TurtleWorker";

export class WorkerManager {

  private worker: monaco.editor.MonacoWebWorker<TurtleLangWorker> | null;
  private workerClientProxy: Promise<TurtleLangWorker> | null;

  constructor() {
    this.worker = null;
    this.workerClientProxy = null;
  }

  private getClientproxy(): Promise<TurtleLangWorker> {

    if (!this.workerClientProxy) {
      this.worker = monaco.editor.createWebWorker<TurtleLangWorker>({
        // module that exports the create() method and returns a `JSONWorker` instance
        moduleId: 'TurtleLangWorker',
        label: 'turtle',
        // passed in to the create() method
        createData: {
          languageId: 'turtle',
        }
      });

      this.workerClientProxy = <Promise<TurtleLangWorker>><any>this.worker.getProxy();
    }

    return this.workerClientProxy;
  }

  async getLanguageServiceWorker(...resources: Uri[]): Promise<TurtleLangWorker> {
    const _client: TurtleLangWorker = await this.getClientproxy();
    await this.worker?.withSyncedResources(resources)
    return _client;
  }
}
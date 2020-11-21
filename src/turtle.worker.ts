import { TurtleLangWorker } from "./TurtleWorker";
//@ts-ignore
import * as worker from "monaco-editor/esm/vs/editor/editor.worker";


self.onmessage = () => {
  worker.initialize((ctx: any) => {
    return new TurtleLangWorker(ctx)
  });
};
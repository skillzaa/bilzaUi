import { IComponent } from "../../node_modules/bilza/src/bilza.js";
import Drag from "./drag.js";
import Recorder from "../recorder/recorder.js";
import Wrapper from "../wrapper/wrapper.js";
export default class BaseUi {
    drag: Drag | null;
    wrapper: Wrapper;
    canvas: HTMLCanvasElement;
    recorder: Recorder;
    selectedComp: IComponent | null;
    constructor();
}
//# sourceMappingURL=baseUi.d.ts.map
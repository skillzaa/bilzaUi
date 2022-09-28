import Drag from "./drag.js";
import Recorder from "../recorder/recorder.js";
import Wrapper from "../wrapper/wrapper.js";
import CorePropsForm from "../forms/corePropsForm.js";
import SelectedComp from "./selectedComp.js";
export default class BaseUi {
    drag: Drag | null;
    wrapper: Wrapper;
    canvas: HTMLCanvasElement;
    recorder: Recorder;
    selectedComp: SelectedComp;
    corePropsForm: CorePropsForm;
    constructor();
}
//# sourceMappingURL=baseUi.d.ts.map
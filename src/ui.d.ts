import UiDraw from "./uiDraw.js";
import Recorder from "./recorder/recorder.js";
export default class Ui extends UiDraw {
    recorder: Recorder;
    selectedId: string | null;
    constructor();
    testBtnEvt(e: MouseEvent): void;
    clickEvt(e: MouseEvent): void;
    mousedownEvt(e: MouseEvent): void;
    mouseupEvt(e: MouseEvent): void;
    mousemoveEvt(e: MouseEvent): void;
    reportEvt(): void;
}
//# sourceMappingURL=ui.d.ts.map
import Recorder from "../recorder/recorder.js";
import Wrapper from "../wrapper/wrapper.js";
export default class BaseUi {
    constructor() {
        this.wrapper = new Wrapper();
        this.canvas = document.getElementById("bilza");
        if (this.canvas == null) {
            throw new Error("failed to find canvas");
        }
        this.recorder = new Recorder();
        this.selectedComp = null;
        this.drag = null;
    }
}

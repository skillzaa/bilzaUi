import Drag from "./drag.js";
import UiDraw from "./uiDraw.js";
export default class Ui extends UiDraw {
    constructor() {
        super();
    }
    clickEvt(e) {
        const comp = this.wrapper.detectHit(e);
        if (comp == null) {
            this.selectedComp = null;
        }
        else {
            this.selectedComp = comp;
        }
    }
    mousedownEvt(e) {
        this.drag = new Drag(e);
    }
    mouseupEvt(e) {
        this.drag = null;
    }
    mousemoveEvt(e) {
        if (this.drag !== null) {
            if (this.selectedComp == null) {
                return;
            }
            this.drag.dragEvt(e, this.selectedComp);
        }
    }
    evt001() {
        this.wrapper.addFillRect();
    }
    evt002() {
    }
    evt003() {
        console.log("evt 003");
    }
    evt004() {
        console.log("evt 004");
    }
    evt005() {
        console.log("evt 005");
    }
}

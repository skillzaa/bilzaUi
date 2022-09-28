import Drag from "./drag.js";
import UiDraw from "./uiDraw.js";
export default class Ui extends UiDraw {
    constructor() {
        super();
    }
    clickEvt(e) {
        const comp = this.wrapper.detectHit(e);
        if (comp == null) {
            this.selectedComp.setNull();
        }
        else {
            this.selectedComp.setSelComp(comp);
            this.corePropsForm.gen();
            this.corePropsForm.pupulate();
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
        this.wrapper.addText();
    }
    evt003() {
    }
    evt004() {
        console.log(this.wrapper.getComps());
    }
    evt005() {
        if (this.corePropsForm.hidden == true) {
            this.corePropsForm.show();
        }
        else {
            this.corePropsForm.hide();
        }
    }
}

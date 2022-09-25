import Drag from "./drag.js";
import UiDraw from "./uiDraw.js";
import Recorder from "./recorder/recorder.js";
export default class Ui extends UiDraw {
    constructor() {
        super();
        this.recorder = new Recorder();
        this.selectedId = null;
    }
    testBtnEvt(e) {
        const txt = this.bil.add(0, 60).text("Welcome To Bilza User Interface");
        this.selectedId = txt.id;
        this.recorder.addText(txt.id, 0, 33);
        this.draw();
    }
    clickEvt(e) {
        const comp = this.detectHit(e);
        if (comp == null) {
            this.unSelectAll();
        }
        else {
            comp.selected = true;
        }
        this.draw();
    }
    mousedownEvt(e) {
        this.drag = new Drag(e);
        this.draw();
    }
    mouseupEvt(e) {
        this.drag = null;
        this.draw();
    }
    mousemoveEvt(e) {
        if (this.drag !== null) {
            const comp = this.getSelectedComp();
            if (comp == null) {
                return;
            }
            this.drag.dragEvt(e, comp);
        }
        this.draw();
    }
    reportEvt() {
        if (this.selectedId !== null) {
            const txt = this.recorder.getCompById(this.selectedId);
            if (txt !== null) {
                txt.color.set("red");
                const real = this.bil.getCompById(this.selectedId);
                if (real !== null) {
                    real.color.set("red");
                }
                this.bil.draw();
            }
        }
        console.log("comps", this.bil.getComps());
        console.log("this.recorder", this.recorder.getComps());
    }
}

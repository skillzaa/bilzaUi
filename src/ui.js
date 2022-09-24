import Drag from "./drag.js";
import UiDraw from "./uiDraw.js";
export default class Ui extends UiDraw {
    constructor() {
        super();
    }
    testBtnEvt(e) {
        this.bil.add(0, 60).text("Welcome To Bilza User Interface");
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
        console.log("hit", comp);
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
}

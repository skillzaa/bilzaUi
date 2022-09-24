import Bilza from "../node_modules/bilza/src/bilza.js";
export default class BaseUi {
    constructor() {
        this.canvas = document.getElementById("bilza");
        if (this.canvas == null) {
            throw new Error("failed to find canvas");
        }
        this.bil = new Bilza("bilza", 70);
        if (this.bil == null) {
            throw new Error("failed to init Bilza");
        }
        this.drag = null;
    }
    detectHit(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const comps = this.bil.getComps();
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            if (comp.drawLayer == "SYSTEMBACKGROUND") {
                continue;
            }
            if (x > comp.x.value() && x < (comp.x.value() + comp.compWidth())) {
                if (y > comp.y.value() && y < (comp.y.value() + comp.compHeight())) {
                    return comp;
                }
            }
        }
        return null;
    }
    getSelectedComp() {
        const comps = this.bil.getComps();
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            if (comp.selected == true) {
                return comp;
            }
        }
        return null;
    }
    unSelectAll() {
        const comps = this.bil.getComps();
        for (let i = 0; i < comps.length; i++) {
            const comp = comps[i];
            comp.selected = false;
        }
    }
}

import BaseUi from "./baseUi.js";
export default class UiDraw extends BaseUi {
    constructor() {
        super();
    }
    draw() {
        this.bil.draw();
        const selected = this.getSelectedComp();
        if (selected !== null) {
            const ctx = this.bil.getCtx();
            ctx.lineWidth = 2;
            ctx.fillStyle = "green";
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.rect(selected.x.value() - 3, selected.y.value() - 3, selected.compWidth() + 6, selected.compHeight() + 6);
            ctx.stroke();
        }
    }
}

import BaseUi from "./baseUi.js";
export default class UiDraw extends BaseUi {
    constructor() {
        super();
    }
    draw() {
        this.wrapper.draw();
        this.drawSelCompBdry();
    }
    drawSelCompBdry() {
        if (this.selectedComp.comp == null) {
            return;
        }
        const ctx = this.wrapper.getCtx();
        ctx.lineWidth = 10;
        ctx.globalAlpha = 50;
        ctx.fillStyle = "green";
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.rect(this.selectedComp.comp.x.value() - 3, this.selectedComp.comp.y.value() - 3, this.selectedComp.comp.compWidth() + 6, this.selectedComp.comp.compHeight() + 6);
        ctx.stroke();
    }
}

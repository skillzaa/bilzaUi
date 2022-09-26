import BaseUi from "./ui/baseUi.js";
export default class UiDraw extends BaseUi {
    constructor() {
        super();
    }
    start() {
        this.draw();
    }
    draw() {
        if (this.selectedComp !== null) {
            const ctx = this.wrapper.getCtx();
            ctx.lineWidth = 2;
            ctx.fillStyle = "green";
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.rect(this.selectedComp.x.value() - 3, this.selectedComp.y.value() - 3, this.selectedComp.compWidth() + 6, this.selectedComp.compHeight() + 6);
            ctx.stroke();
            window.requestAnimationFrame(this.draw);
        }
    }
}

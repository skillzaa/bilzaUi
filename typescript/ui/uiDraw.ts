import BaseUi from "./baseUi.js";
import Drag  from "./drag.js";


export default class UiDraw extends BaseUi {
    
//...................................................
constructor(){
super();    

}

draw(){
    this.wrapper.draw();   
    this.drawSelCompBdry(); 
    // this.corePropsForm.save(this.selectedComp);
}

private drawSelCompBdry(){
if (this.selectedComp ==null){return;}
    //--importantay    
    const ctx :CanvasRenderingContext2D = this.wrapper.getCtx();
        ctx.lineWidth = 10;
        ctx.globalAlpha = 50;
        ctx.fillStyle = "green";
        ctx.strokeStyle = "green";
    ctx.beginPath();
        ctx.rect(
        this.selectedComp.x.value() -3,
        this.selectedComp.y.value() -3,
        this.selectedComp.compWidth() + 6,
        this.selectedComp.compHeight() + 6,
        );
    ctx.stroke();
}
/////////////////////////////////////
}
// const rect = e.target.getBoundingClientRect();
// const x = e.clientX - rect.left;
// const y = e.clientY - rect.top;

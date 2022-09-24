import Bilza,{hsl} from "../node_modules/bilza/src/bilza.js";
import BaseUi from "./baseUi.js";
import Drag  from "./drag.js";



export default class UiDraw extends BaseUi {
//...................................................
constructor(){
super();    
}

draw(){
this.bil.draw();    
const selected = this.getSelectedComp();

if (selected !==null){
const ctx :CanvasRenderingContext2D = this.bil.getCtx();
    ctx.lineWidth = 2;
    // ctx.globalAlpha = 50;
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
// ctx.fillRect(0,0,300,300);
ctx.beginPath();
// ctx.rect(0, 0, 150, 100);
    ctx.rect(
    selected.x.value() -3,
    selected.y.value() -3,
    selected.compWidth() + 6,
    selected.compHeight() + 6,
    );
ctx.stroke();
}
    
}
/////////////////////////////////
}
// const rect = e.target.getBoundingClientRect();
// const x = e.clientX - rect.left;
// const y = e.clientY - rect.top;

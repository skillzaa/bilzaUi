import Drag  from "./drag.js";
import UiDraw from "./uiDraw.js";

export default class Ui extends UiDraw {
//...................................................

constructor(){
super();

}

clickEvt(e :MouseEvent){
const comp = this.wrapper.detectHit(e);
    if (comp == null){
        // this.unSelectAll();
        this.selectedComp = null;
    }else {
        // comp.selected =  true;
        this.selectedComp = comp;
    }
//----this.draw();
}

mousedownEvt(e :MouseEvent){
this.drag = new Drag(e); //--dont move this line    
// this.draw();
}

mouseupEvt(e :MouseEvent){
this.drag = null; //--dont move this line    
// this.draw();
}

mousemoveEvt(e :MouseEvent){
if (this.drag !== null){
if (this.selectedComp == null){return;}    
this.drag.dragEvt(e,this.selectedComp);    
}
// this.draw(); //must
}

evt001(){
this.wrapper.addFillRect();

// this.recorder.addText(comp.id,0,33);
// console.log("recorder",this.recorder.getComps());    
}
evt002(){
//  this.save();
}
evt003(){
    console.log("evt 003");
}
evt004(){
    console.log("evt 004");
}
evt005(){
    console.log("evt 005");
}

/////////////////////////////////
}
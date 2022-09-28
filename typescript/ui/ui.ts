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
        this.selectedComp.setNull();
    }else {
        // comp.selected =  true;
        this.selectedComp.setSelComp(comp);
        this.corePropsForm.gen();
        this.corePropsForm.pupulate();
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
}
evt002(){
this.wrapper.addText();    
//  this.save();
}
evt003(){
    
}
evt004(){
    console.log(this.wrapper.getComps());    
}
evt005(){
    if (this.corePropsForm.hidden == true){
        this.corePropsForm.show();
    }else {
        this.corePropsForm.hide();
    }
}

/////////////////////core-props-form
// corePropWidth(){
// this.corePropsForm.corePropWidth( this.selectedComp );

// }
/////////////////////////////////
}

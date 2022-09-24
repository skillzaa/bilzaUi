import Drag  from "./drag.js";
import UiDraw from "./uiDraw.js";


export default class Ui extends UiDraw {
//...................................................
constructor(){
super();    
}

testBtnEvt(e :MouseEvent){    
this.bil.add(0,60).text("Welcome To Bilza User Interface");
this.draw();
}

clickEvt(e :MouseEvent){
const comp = this.detectHit(e);
    if (comp == null){
        this.unSelectAll();
    }else {
        comp.selected =  true;
    }
console.log("hit",comp);
this.draw();
}

mousedownEvt(e :MouseEvent){
this.drag = new Drag(e); //--dont move this line    
this.draw();
}

mouseupEvt(e :MouseEvent){
this.drag = null; //--dont move this line    
this.draw();
}

mousemoveEvt(e :MouseEvent){
if (this.drag !== null){
const comp = this.getSelectedComp();
if (comp==null){return;}    
this.drag.dragEvt(e,comp);    
}
this.draw(); //must
}

/////////////////////////////////
}

// const rect = e.target.getBoundingClientRect();
// const x = e.clientX - rect.left;
// const y = e.clientY - rect.top;

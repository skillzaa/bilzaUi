import Drag  from "./drag.js";
import UiDraw from "./uiDraw.js";
import CodeBuilder from "./codeBuilder/codeBuilder.js";
import Recorder from "./recorder/recorder.js";

export default class Ui extends UiDraw {
//...................................................
recorder :Recorder;
selectedId :string | null;

constructor(){
super();
this.recorder = new Recorder();    
this.selectedId = null;
}

testBtnEvt(e :MouseEvent){    
const txt = this.bil.add(0,60).text("Welcome To Bilza User Interface");
// this.recorder.addText(txt.id,0,33);
this.selectedId = txt.id;
this.recorder.addText(txt.id,0,33);
// console.log("recorder",this.recorder.getComps());
this.draw();
}

clickEvt(e :MouseEvent){
const comp = this.detectHit(e);
    if (comp == null){
        this.unSelectAll();
    }else {
        comp.selected =  true;
    }
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


reportEvt(){
// const rb = new CodeBuilder(this.bil);
// const rep = rb.gen();
if (this.selectedId !==null){
const txt = this.recorder.getCompById( this.selectedId);
if (txt !== null){
    txt.color.set("red");
    const real = this.bil.getCompById(this.selectedId);

    if (real !==null){
        real.color.set("red");
    }
    this.bil.draw();
    }    
}

console.log("comps",this.bil.getComps());
console.log("this.recorder",this.recorder.getComps());

}
/////////////////////////////////
}

// const rect = e.target.getBoundingClientRect();
// const x = e.clientX - rect.left;
// const y = e.clientY - rect.top;

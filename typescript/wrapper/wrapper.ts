
import Bilza,{IComponent} from "../../node_modules/bilza/src/bilza.js";
import CorePropsForm from "../forms/corePropsForm.js";


///////////////////////////////////////////////////////
export default class Wrapper{
bil:Bilza;
interval :number | null;
corePropsForm :CorePropsForm;
///////////////////////////
constructor(){
this.corePropsForm = new CorePropsForm();    
this.interval = null;
    this.bil = new Bilza("bilza",70); 
    if (this.bil==null){throw new Error("failed to init Bilza");}    

// this.start();
}

addFillRect(){
    const comp = this.bil.add(0,60).fillRect("red");   
}
detectHit(e :MouseEvent):IComponent | null{
//@ts-expect-error
const rect = this.bil.pack.canvas.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const comps:IComponent[] = this.bil.getComps();

for (let i = 0; i < comps.length; i++) {
    const comp = comps[i];
    
    if (comp.drawLayer == "SYSTEMBACKGROUND"){continue;}

    if (x > comp.x.value() && x < (comp.x.value() + comp.compWidth() )){
        if (y > comp.y.value() && y < (comp.y.value() + comp.compHeight())){    
            return comp;
        }
    }    
}// for ends here
return null;    
}//detectHit
unSelectAll(){
    const comps = this.bil.getComps();
for (let i = 0; i < comps.length; i++) {
    const comp = comps[i];
    comp.selected = false
}    
}
getSelectedComp():IComponent | null{
        const comps = this.bil.getComps();
    for (let i = 0; i < comps.length; i++) {
        const comp = comps[i];
        if (comp.selected == true){
            return comp;
        }
    }    
return null;
}
save(){
const widthInput = document.getElementById("widthInput") as HTMLInputElement; 
if (widthInput == null ){ return;}
    const selComp = this.getSelectedComp();
    if (selComp == null){return;}

        const comp = this.bil.getCompById(selComp.id);
        if (comp !== null){
            comp.width.set(parseInt(widthInput.value ));
        }
        ////-----------
        // const compRec = this.recorder.getCompById(this.selectedComp.id);
        // if (compRec!== null){
        //     compRec.width.set(parseInt(widthInput.value ));
        // }
}

getCtx(){
    return this.bil.getCtx();
}
start(){
this.interval = setInterval(()=>{
    this.bil.draw();
    },2)
}
stop(){
    if (this.interval == null){return;}
    clearInterval(this.interval);
}
draw(){
  this.bil.draw();  
}
////////////////////////////////////////////////////////    
}
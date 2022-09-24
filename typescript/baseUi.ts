import Bilza,{hsl, IComponent} from "../node_modules/bilza/src/bilza.js";
import Drag  from "./drag.js";


export default class BaseUi {
drag :Drag | null;
bil:Bilza;
canvas :HTMLCanvasElement;
//...................................................

constructor(){
this.canvas =  document.getElementById("bilza") as HTMLCanvasElement;    
if (this.canvas == null){throw new Error("failed to find canvas");
}

this.bil = new Bilza("bilza",70); 
if (this.bil==null){throw new Error("failed to init Bilza");}
this.drag = null;
}

detectHit(e :MouseEvent):IComponent | null{

const rect = this.canvas.getBoundingClientRect();
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

getSelectedComp():IComponent | null{
    const comps = this.bil.getComps();
for (let i = 0; i < comps.length; i++) {
    const comp = comps[i];
    if (comp.selected == true){
        // comp.colorBorder.set("black");
        return comp;
    }
}    
return null;
}
unSelectAll(){
    const comps = this.bil.getComps();
for (let i = 0; i < comps.length; i++) {
    const comp = comps[i];
    comp.selected = false
}    
}
//////////////////////class ends//////////////////
}
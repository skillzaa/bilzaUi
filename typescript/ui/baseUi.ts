import { IComponent} from "../../node_modules/bilza/src/bilza.js";
import Drag  from "./drag.js";
import Recorder from "../recorder/recorder.js";
import Wrapper from "../wrapper/wrapper.js";
import CorePropsForm from "../forms/corePropsForm.js";
import SelectedComp from "./selectedComp.js";


export default class BaseUi {
    drag :Drag | null;
    wrapper:Wrapper;
    canvas :HTMLCanvasElement;
    recorder :Recorder;
    selectedComp :SelectedComp;
    //...................................................
    corePropsForm :CorePropsForm;    

constructor(){
this.wrapper = new Wrapper();

this.canvas =  document.getElementById("bilza") as HTMLCanvasElement;    
if (this.canvas == null){throw new Error("failed to find canvas");
}
this.selectedComp = new SelectedComp();
this.corePropsForm = new CorePropsForm(this.selectedComp);  
this.recorder = new Recorder();    
this.drag = null;
}





//////////////////////class ends//////////////////
}
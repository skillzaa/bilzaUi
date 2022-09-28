import { IComponent } from "../../node_modules/bilza/src/bilza.js";


export default class CorePropsForm {
formId:string;    
theDiv : HTMLDivElement;
public hidden : boolean;
//////////////////
constructor(formId :string){

    
this.formId = formId;
const theDiv = document.getElementById(this.formId) as HTMLDivElement;
if (theDiv == null) {
    throw new Error("form not found");
}else{
    this.theDiv = theDiv;
}
//---sync show and hidden=false
this.hidden = false;
this.theDiv.style.display = 'block'; 
}

hide(){
this.hidden = true;    
this.theDiv.style.display = 'none';    
}
show(){
this.hidden = false;    
this.theDiv.style.display = 'block';    
}
updateInput(controlId : string,value :string){
const con = document.getElementById(controlId) as HTMLInputElement;
    if (con !== null){
        con.value = value;
        }    
}
///////////////////////////////////////////////////
}
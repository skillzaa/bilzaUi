import { IComponent } from "../../node_modules/bilza/src/bilza.js";


export default class CorePropsForm {
formId:string;    
theDiv : HTMLDivElement;
//////////////////
constructor(formId :string){

    
this.formId = formId;
const theDiv = document.getElementById(this.formId) as HTMLDivElement;
if (theDiv == null) {
    throw new Error("form not found");
}else{
    this.theDiv = theDiv;
}
}

hide(){
this.theDiv.style.display = 'none';    
}
show(){
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
import { IComponent } from "../../node_modules/bilza/src/bilza.js";
import BaseForm from "./baseForm.js";

export default class CorePropsForm  extends BaseForm{
constructor(formId :string){
super(formId);    
}
clear(){



}

update(selectedComp :IComponent){
this.updateNoControl(selectedComp,"corePropsWidth");

}


corePropWidth(selectedComp :IComponent | null){
const corePropsWidth : HTMLInputElement | null = document.getElementById("corePropsWidth") as HTMLInputElement;    

if (corePropsWidth == null){return;}

const value = corePropsWidth.value;
const valueNo = parseInt(value);

if (typeof valueNo == "number"){
    if (selectedComp !== null){
        selectedComp.width.set(valueNo);
        // console.log(valueNo);
    }
}    
}

updateSelComp(selectedComp :IComponent | null){
if (selectedComp == null){
    //--clear form
    return;
}
const title = document.getElementById("corePropsFormSelComp") as HTMLDivElement;
        if (title !== null) {
            title.innerHTML = `<h3>${selectedComp.id}</h3>`
        }
}
///////////////////////////////////////////////////
}
import { IComponent } from "../../node_modules/bilza/src/bilza.js";
import BaseForm from "./baseForm.js";
import SelectedComp from "../ui/selectedComp.js";

export default class CorePropsForm  extends BaseForm{
public selectedComp  :SelectedComp;    

constructor(selectedComp :SelectedComp){
super("corePropsForm"); //feed it directly 
this.selectedComp = selectedComp;

//////////////////
this.genForm();
///////////////////////////////////////////////////
document.getElementById("corePropsWidth")?.addEventListener("input",
this.propWidth.bind(this));
document.getElementById("corePropsHeight")?.addEventListener("input",
this.propHeight.bind(this));
document.getElementById("corePropsX")?.addEventListener("input",
this.propX.bind(this));
document.getElementById("corePropsY")?.addEventListener("input",
this.propY.bind(this));

}
genForm(){
let html = `<table>`;   

html += `<tr><td>
<div id="corePropsFormSelComp">"Nothing Selected"</div>
</td></tr>`;   

html += `<tr><td><label>X</label></td></tr>`;   
html += `<tr><td><input type="number"  id="corePropsX"></td></tr>`;   

html += `<tr><td><label>Y</label></td></tr>`;   
html += `<tr><td><input type="number"  id="corePropsY"></td></tr>`;   

html += `<tr><td><label>Width</label></td></tr>`;   
html += `<tr><td><input  type="number" name="widthInput" id="corePropsWidth"></td></tr>`;   

html += `<tr><td><label>Height</label></td></tr>`;   
html += `<tr><td><input class="corePropCon" type="number" name="widthInput" id="corePropsHeight"></td></tr>`;   

html += `</table>`;

this.theDiv.innerHTML = html;

}
// tieFnToCon(conId :string,fnName :String=""){
// document.getElementById(conId)?.addEventListener("input",()=>{
//     //@ts-expect-error
//     this[fnName]();
//     });
// }

clear(){
    console.log("rrr");
}

pupulate(){
if (this.selectedComp.comp == null){return;}
const comp = this.selectedComp.comp;
this.updateInput("corePropsX",comp.x.value().toString());
this.updateInput("corePropsY",comp.y.value().toString());
this.updateInput("corePropsWidth",comp.width.value().toString());
this.updateInput("corePropsHeight",comp.height.value().toString());

}

// saveToComp(selectedComp :IComponent,controlId :string,propName:string ){
// const cont : HTMLInputElement | null = document.getElementById(controlId) as HTMLInputElement;    

//     if (cont == null){return;}
    
//     const value = cont.value;
//     const valueNo = parseInt(value);
    
//     if (typeof valueNo == "number"){
//         if (selectedComp !== null){
//             //@ts-expect-error
//             selectedComp[propName].set(valueNo);
//             // console.log(valueNo);
//         }
//     }    
// }

propWidth(){
const corePropsWidth : HTMLInputElement | null = document.getElementById("corePropsWidth") as HTMLInputElement;    

if (corePropsWidth == null){return;}

const value = corePropsWidth.value;
const valueNo = parseInt(value);

if (typeof valueNo == "number"){
    if (this.selectedComp.comp !== null){
        this.selectedComp.comp.width.set(valueNo);
        // console.log(valueNo);
    }
}    
}
propHeight(){
const con : HTMLInputElement | null = document.getElementById("corePropsHeight") as HTMLInputElement;    

if (con == null){return;}

const value = con.value;
const valueNo = parseInt(value);

if (typeof valueNo == "number"){
    if (this.selectedComp.comp !== null){
        this.selectedComp.comp.height.set(valueNo);
        // console.log(valueNo);
    }
}    
}
propX(){
const con : HTMLInputElement | null = document.getElementById("corePropsX") as HTMLInputElement;    

if (con == null){return;}

const value = con.value;
const valueNo = parseInt(value);

if (typeof valueNo == "number"){
    if (this.selectedComp.comp !== null){
        this.selectedComp.comp.x.set(valueNo);
        // console.log(valueNo);
    }
}    
}
propY(){
const con : HTMLInputElement | null = document.getElementById("corePropsY") as HTMLInputElement;    

if (con == null){return;}

const value = con.value;
const valueNo = parseInt(value);

if (typeof valueNo == "number"){
    if (this.selectedComp.comp !== null){
        this.selectedComp.comp.y.set(valueNo);
        // console.log(valueNo);
    }
}    
}

// updateSelComp(selectedComp :IComponent | null){
// if (selectedComp == null){
//     //--clear form
//     return;
// }
// const title = document.getElementById("corePropsFormSelComp") as HTMLDivElement;
//         if (title !== null) {
//             title.innerHTML = `<h3>${selectedComp.id}</h3>`
//         }
// }
///////////////////////////////////////////////////
}
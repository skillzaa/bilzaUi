import { IComponent } from "../../../node_modules/bilza/src/bilza";
import BuilderCompBase from "./builderCompBase.js";


export default class TextBuilder extends BuilderCompBase {

constructor(comp :IComponent){
super(comp);
}


gen(){
const a = "in the name of Allah";
this.report.push(a);
return this.report;
}

/////////////////////////////////////////////    
}
import { IComponent } from "../../../node_modules/bilza/src/bilza";


export default class BuilderCompBase {
comp :IComponent;
report:string[];

constructor(comp :IComponent){
this.comp = comp;
this.report = [];
}


gen():string[]{
return this.report;
}

/////////////////////////////////////////////    
}
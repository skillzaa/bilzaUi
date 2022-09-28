import { IComponent } from "../../node_modules/bilza/src/bilza";




export default class SelectedComp{

comp : IComponent | null;
constructor(){
this.comp = null;
}

setNull(){
    this.comp = null;
}
setSelComp(comp :IComponent){
this.comp = comp;
}



}
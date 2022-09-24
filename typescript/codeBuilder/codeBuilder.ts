import { IComponent } from "../../node_modules/bilza/src/bilza";


export default class CodeBuilder{
comps :IComponent[];

constructor(comps :IComponent[]){
this.comps = comps;
}

gen(){
    for (let i = 0; i < this.comps.length; i++) {
        const comp = this.comps[i];

        // switch (comp.t) {
        //     case value:
                
        //         break;
        
        //     default:
        //         break;
        // }
        
    }
}

/////////////////////////////    
}
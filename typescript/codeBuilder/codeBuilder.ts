import Bilza, { IComponent } from "../../node_modules/bilza/src/bilza";
import TextBuilder from "./modules/textBuilder.js";


export default class CodeBuilder{
comps :IComponent[];
bil :Bilza;

constructor(bil :Bilza){
this.bil = bil;
this.comps = this.bil.getComps();
}

gen():string[]{
let startReport :string[] = [];    
startReport.push(`import Bilza, { Ui, hsl} from "./bilza.js;`);
startReport.push(`let bil = new Bilza("bilza", 70);`);

let midReport :string[] = [];    
    for (let i = 0; i < this.comps.length; i++) {
        const comp = this.comps[i];
    const textBuilder = new TextBuilder(this.comps[0]);
    const textBuilderReport = textBuilder.gen(); 
    midReport = [...midReport,...textBuilderReport];
    }
/////////////////////////////////////

const finalReport = [...startReport , ...midReport];
finalReport.push("//bil.start()");
finalReport.push("bil.draw()");
return finalReport;
}

/////////////////////////////    
}
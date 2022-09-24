import BuilderCompBase from "./builderCompBase.js";
export default class TextBuilder extends BuilderCompBase {
    constructor(comp) {
        super(comp);
    }
    gen() {
        const a = "in the name of Allah";
        this.report.push(a);
        return this.report;
    }
}

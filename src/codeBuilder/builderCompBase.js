export default class BuilderCompBase {
    constructor(comp) {
        this.comp = comp;
        this.report = [];
    }
    gen() {
        return this.report;
    }
}

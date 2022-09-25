import TextDb from "./comps/textDb.js";
export default class Recorder {
    constructor() {
        this.comps = [];
    }
    addText(id, startTime, endTime) {
        const txt = new TextDb(id, startTime, endTime);
        this.comps.push(txt);
    }
    getComps() {
        return this.comps;
    }
    getCompById(id) {
        for (let i = 0; i < this.comps.length; i++) {
            const comp = this.comps[i];
            if (comp.id == id) {
                return comp;
            }
        }
        return null;
    }
}

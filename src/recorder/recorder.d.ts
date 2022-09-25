import BaseCompDb from "./comps/baseCompDb.js";
export default class Recorder {
    comps: BaseCompDb[];
    constructor();
    addText(id: string, startTime: number, endTime: number): void;
    getComps(): BaseCompDb[];
    getCompById(id: string): BaseCompDb | null;
}
//# sourceMappingURL=recorder.d.ts.map
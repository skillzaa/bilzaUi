import Bilza, { IComponent } from "../../node_modules/bilza/src/bilza.js";
import CorePropsForm from "../forms/corePropsForm.js";
export default class Wrapper {
    bil: Bilza;
    interval: number | null;
    corePropsForm: CorePropsForm;
    constructor();
    addFillRect(): void;
    detectHit(e: MouseEvent): IComponent | null;
    unSelectAll(): void;
    getSelectedComp(): IComponent | null;
    save(): void;
    getCtx(): CanvasRenderingContext2D;
    start(): void;
    stop(): void;
    draw(): void;
}
//# sourceMappingURL=wrapper.d.ts.map
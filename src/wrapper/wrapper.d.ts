import Bilza, { IComponent } from "../../node_modules/bilza/src/bilza.js";
export default class Wrapper {
    bil: Bilza;
    interval: number | null;
    constructor();
    addFillRect(): void;
    addText(): void;
    detectHit(e: MouseEvent): IComponent | null;
    unSelectAll(): void;
    getSelectedComp(): IComponent | null;
    save(): void;
    getCtx(): CanvasRenderingContext2D;
    start(): void;
    stop(): void;
    draw(): void;
    getComps(): IComponent[];
}
//# sourceMappingURL=wrapper.d.ts.map
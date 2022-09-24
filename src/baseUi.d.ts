import Bilza, { IComponent } from "../node_modules/bilza/src/bilza.js";
import Drag from "./drag.js";
export default class BaseUi {
    drag: Drag | null;
    bil: Bilza;
    canvas: HTMLCanvasElement;
    constructor();
    detectHit(e: MouseEvent): IComponent | null;
    getSelectedComp(): IComponent | null;
    unSelectAll(): void;
}
//# sourceMappingURL=baseUi.d.ts.map
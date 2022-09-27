import { IComponent } from "../../node_modules/bilza/src/bilza.js";
export default class CorePropsForm {
    formId: string;
    theDiv: HTMLDivElement;
    constructor(formId: string);
    hide(): void;
    show(): void;
    updateNoControl(selectedComp: IComponent, controlId: string): void;
}
//# sourceMappingURL=baseForm.d.ts.map
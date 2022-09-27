import { IComponent } from "../../node_modules/bilza/src/bilza.js";
import BaseForm from "./baseForm.js";
export default class CorePropsForm extends BaseForm {
    constructor(formId: string);
    clear(): void;
    refresh(selectedComp: IComponent): void;
    saveToComp(selectedComp: IComponent, controlId: string, propName: string): void;
    corePropWidth(selectedComp: IComponent | null): void;
    updateSelComp(selectedComp: IComponent | null): void;
}
//# sourceMappingURL=corePropsForm.d.ts.map
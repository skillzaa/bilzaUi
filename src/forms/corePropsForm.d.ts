import BaseForm from "./baseForm.js";
import SelectedComp from "../ui/selectedComp.js";
export default class CorePropsForm extends BaseForm {
    selectedComp: SelectedComp;
    constructor(selectedComp: SelectedComp);
    genCompPropForm(): string;
    genCorePropForm(): string;
    clear(): void;
    gen(): void;
    pupulate(): void;
    wire(): void;
    propWidth(): void;
    propfontSize(): void;
    propHeight(): void;
    propX(): void;
    propY(): void;
}
//# sourceMappingURL=corePropsForm.d.ts.map
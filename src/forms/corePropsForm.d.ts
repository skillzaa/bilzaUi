import BaseForm from "./baseForm.js";
import SelectedComp from "../ui/selectedComp.js";
export default class CorePropsForm extends BaseForm {
    selectedComp: SelectedComp;
    constructor(selectedComp: SelectedComp);
    genForm(): void;
    clear(): void;
    pupulate(): void;
    propWidth(): void;
    propHeight(): void;
    propX(): void;
    propY(): void;
}
//# sourceMappingURL=corePropsForm.d.ts.map
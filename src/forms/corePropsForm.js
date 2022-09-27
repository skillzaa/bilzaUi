import BaseForm from "./baseForm.js";
export default class CorePropsForm extends BaseForm {
    constructor(formId) {
        super(formId);
    }
    clear() {
    }
    update(selectedComp) {
        this.updateNoControl(selectedComp, "corePropsWidth");
    }
    corePropWidth(selectedComp) {
        const corePropsWidth = document.getElementById("corePropsWidth");
        if (corePropsWidth == null) {
            return;
        }
        const value = corePropsWidth.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (selectedComp !== null) {
                selectedComp.width.set(valueNo);
            }
        }
    }
    updateSelComp(selectedComp) {
        if (selectedComp == null) {
            return;
        }
        const title = document.getElementById("corePropsFormSelComp");
        if (title !== null) {
            title.innerHTML = `<h3>${selectedComp.id}</h3>`;
        }
    }
}

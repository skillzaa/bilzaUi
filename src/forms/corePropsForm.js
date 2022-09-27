import BaseForm from "./baseForm.js";
export default class CorePropsForm extends BaseForm {
    constructor(formId) {
        super(formId);
    }
    clear() {
    }
    refresh(selectedComp) {
        this.updateNoControl(selectedComp, "corePropsWidth");
        this.updateNoControl(selectedComp, "corePropsHeight");
    }
    saveToComp(selectedComp, controlId, propName) {
        const cont = document.getElementById(controlId);
        if (cont == null) {
            return;
        }
        const value = cont.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (selectedComp !== null) {
                selectedComp[propName].set(valueNo);
            }
        }
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

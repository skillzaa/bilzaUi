export default class CorePropsForm {
    constructor(formId) {
        this.formId = formId;
        const theDiv = document.getElementById(this.formId);
        if (theDiv == null) {
            throw new Error("form not found");
        }
        else {
            this.theDiv = theDiv;
        }
    }
    hide() {
        this.theDiv.style.display = 'none';
    }
    show() {
        this.theDiv.style.display = 'block';
    }
    updateNoControl(selectedComp, controlId) {
        const con = document.getElementById(controlId);
        if (con !== null) {
            con.value = selectedComp.width.value();
        }
    }
}

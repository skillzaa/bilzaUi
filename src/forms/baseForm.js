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
        this.hidden = false;
        this.theDiv.style.display = 'block';
    }
    hide() {
        this.hidden = true;
        this.theDiv.style.display = 'none';
    }
    show() {
        this.hidden = false;
        this.theDiv.style.display = 'block';
    }
    updateInput(controlId, value) {
        const con = document.getElementById(controlId);
        if (con !== null) {
            con.value = value;
        }
    }
}

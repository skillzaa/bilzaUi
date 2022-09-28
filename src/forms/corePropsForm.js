import BaseForm from "./baseForm.js";
import FillRect from "../../node_modules/bilza/src/components/fillRect.js";
export default class CorePropsForm extends BaseForm {
    constructor(selectedComp) {
        super("corePropsForm");
        this.selectedComp = selectedComp;
    }
    genCompPropForm() {
        if (this.selectedComp.comp instanceof FillRect) {
            return "<hr/>";
        }
        let html = `<h4>Comp Props</h4>`;
        html += `<table>`;
        html += `<tr><td><label>Font Size</label></td></tr>`;
        html += `<tr><td><input type="number"  id="fontSizeCon"></td></tr>`;
        html += `</table>`;
        return html;
    }
    genCorePropForm() {
        let html = `<table>`;
        html += `<tr><td>
<div id="corePropsFormSelComp">"Nothing Selected"</div>
</td></tr>`;
        html += `<tr><td><label>X</label></td></tr>`;
        html += `<tr><td><input type="number"  id="corePropsX"></td></tr>`;
        html += `<tr><td><label>Y</label></td></tr>`;
        html += `<tr><td><input type="number"  id="corePropsY"></td></tr>`;
        html += `<tr><td><label>Width</label></td></tr>`;
        html += `<tr><td><input  type="number" name="widthInput" id="corePropsWidth"></td></tr>`;
        html += `<tr><td><label>Height</label></td></tr>`;
        html += `<tr><td><input class="corePropCon" type="number" name="widthInput" id="corePropsHeight"></td></tr>`;
        html += `</table>`;
        return html;
    }
    clear() {
        console.log("rrr");
    }
    gen() {
        this.theDiv.innerHTML = this.genCompPropForm();
        this.theDiv.innerHTML += this.genCorePropForm();
        this.wire();
    }
    pupulate() {
        if (this.selectedComp.comp == null) {
            return;
        }
        const comp = this.selectedComp.comp;
        this.updateInput("corePropsX", comp.x.value().toString());
        this.updateInput("corePropsY", comp.y.value().toString());
        this.updateInput("corePropsWidth", comp.width.value().toString());
        this.updateInput("corePropsHeight", comp.height.value().toString());
    }
    wire() {
        var _a, _b, _c, _d, _e;
        (_a = document.getElementById("corePropsWidth")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", this.propWidth.bind(this));
        (_b = document.getElementById("corePropsHeight")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", this.propHeight.bind(this));
        (_c = document.getElementById("corePropsX")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", this.propX.bind(this));
        (_d = document.getElementById("corePropsY")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", this.propY.bind(this));
        (_e = document.getElementById("fontSizeCon")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", this.propfontSize.bind(this));
    }
    propWidth() {
        const corePropsWidth = document.getElementById("corePropsWidth");
        if (corePropsWidth == null) {
            return;
        }
        const value = corePropsWidth.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (this.selectedComp.comp !== null) {
                this.selectedComp.comp.width.set(valueNo);
            }
        }
    }
    propfontSize() {
        const con = document.getElementById("fontSizeCon");
        if (con == null) {
            return;
        }
        const value = con.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (this.selectedComp.comp !== null) {
                this.selectedComp.comp.fontSize.set(valueNo);
            }
        }
    }
    propHeight() {
        const con = document.getElementById("corePropsHeight");
        if (con == null) {
            return;
        }
        const value = con.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (this.selectedComp.comp !== null) {
                this.selectedComp.comp.height.set(valueNo);
            }
        }
    }
    propX() {
        const con = document.getElementById("corePropsX");
        if (con == null) {
            return;
        }
        const value = con.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (this.selectedComp.comp !== null) {
                this.selectedComp.comp.x.set(valueNo);
            }
        }
    }
    propY() {
        const con = document.getElementById("corePropsY");
        if (con == null) {
            return;
        }
        const value = con.value;
        const valueNo = parseInt(value);
        if (typeof valueNo == "number") {
            if (this.selectedComp.comp !== null) {
                this.selectedComp.comp.y.set(valueNo);
            }
        }
    }
}

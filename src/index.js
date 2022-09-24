import Ui from "./ui.js";
const canvas = document.getElementById("bilza");
const testBtn = document.getElementById("test");
if (canvas == null) {
    throw new Error("canvas not found");
}
if (testBtn == null) {
    throw new Error("canvas not found");
}
const ui = new Ui();
testBtn.addEventListener("click", ui.testBtnEvt.bind(ui));
canvas.addEventListener("click", ui.clickEvt.bind(ui));
canvas.addEventListener("mousedown", ui.mousedownEvt.bind(ui));
canvas.addEventListener("mouseup", ui.mouseupEvt.bind(ui));
canvas.addEventListener("mousemove", ui.mousemoveEvt.bind(ui));

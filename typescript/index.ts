import Ui from "./ui/ui.js";
const ui = new Ui();
////////////////////////////////////
const canvas = document.getElementById("bilza") as HTMLCanvasElement;
if (canvas==null){throw new Error("canvas not found");}
//////////////////
canvas.addEventListener("click",ui.clickEvt.bind(ui));
canvas.addEventListener("mousedown",ui.mousedownEvt.bind(ui));
canvas.addEventListener("mouseup",ui.mouseupEvt.bind(ui));
canvas.addEventListener("mousemove",ui.mousemoveEvt.bind(ui));

//-------------------------
const Btn001 = document.getElementById("001");
if (Btn001 !== null){
Btn001.addEventListener("click",ui.evt001.bind(ui));
}
const Btn002 = document.getElementById("002");
if (Btn002 !== null){
Btn002.addEventListener("click",ui.evt002.bind(ui));
}
const Btn003 = document.getElementById("003");
if (Btn003 !== null){
Btn003.addEventListener("click",ui.evt003.bind(ui));
}
const Btn004 = document.getElementById("004");
if (Btn004 !== null){
Btn004.addEventListener("click",ui.evt004.bind(ui));
}
const Btn005 = document.getElementById("005");
if (Btn005 !== null){
Btn005.addEventListener("click",ui.evt005.bind(ui));
}

////////////--core props form

const corePropsWidth = document.getElementById("corePropsWidth");
if (corePropsWidth !== null){
corePropsWidth.addEventListener("input",ui.corePropWidth.bind(ui));
}


setInterval(()=>{
    ui.draw();
},2);
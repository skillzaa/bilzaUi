import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";
const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const radius = 1;
let x = 10;
let y = 350;
for (let i = 0; i < 300; i++) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    x++;
    y--;
    ctx.stroke();
}

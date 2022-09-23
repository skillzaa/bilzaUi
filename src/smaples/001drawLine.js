import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";
const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.font = "30px Arial";
ctx.fillText("Welcome to workshop", 5, 50);
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(5, 5);
ctx.lineTo(500, 200);
ctx.stroke();
import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";
const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let x1 = 200;
let y1 = 200;
let x2 = 200;
let y2 = 300;
const dx = x2 - x1;
const dy = y2 - y1;
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
const rez = Math.atan2(y2 - y1, x2 - x1);
ctx.font = "30px red";
ctx.fillText("Rad : " + rez.toString(), 25, 25);
ctx.fillText("Deg : " + ((rez * 180) / Math.PI).toString(), 25, 60);
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x1 + 200, y1);
ctx.stroke();
const rotateAngle = Math.atan2(y2 - y1, x2 - x1);
ctx.save();
console.log("rotateAngle", rotateAngle);
ctx.translate(x2, y2);
ctx.beginPath();
ctx.arc(0, 0, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.rotate(rotateAngle);
ctx.fillStyle = "black";
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, -20);
ctx.lineTo(0, 20);
ctx.lineTo(30, 0);
ctx.lineTo(0, -20);
ctx.stroke();
ctx.restore();
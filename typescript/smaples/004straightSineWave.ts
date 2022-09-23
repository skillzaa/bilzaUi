import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";

const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
///////////////////////////////////////////////////
const radius = 1;
// let x = 10 ;
let y = 10;
let altitude =  300;
var counter = 0;
// 100 iterations
var increase = Math.PI / 500;

for (let x = 500; x >= 10; x -= 1 ) {
    
    y = -(Math.sin(counter) * altitude) + 350 ;
    counter += increase;
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // console.log("x",x);
    // console.log("y",y);
}
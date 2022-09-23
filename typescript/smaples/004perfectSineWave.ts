import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";

const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
////////////////////////////////////////////
const radius = 1;
let y = 0;
let altitude =  100;
var counter = 0;
//--------------------------
var increase = Math.PI * 2 / 500;

for (let x = 500; x >= 1; x -= 1 ) {
    
    y = -(Math.sin(counter) * altitude) + 150 ;
    counter += increase;
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // console.log("x",x);
    // console.log("y",y);
}

///////////////////////////////////////////////////
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.beginPath();       // Start a new path
ctx.moveTo(0, 150);    // Move the pen to (30, 50)
ctx.lineTo(800, 150);  // Draw a line to (150, 100)
ctx.stroke()
///////////////////////////////////////////////////

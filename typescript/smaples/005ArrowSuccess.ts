import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";

const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
////////////================////////////
let x1 = 200;
let y1 = 200
////////////////////
// let x2 = 300; //-45
// let y2 = 100

// let x2 = 300; //0
// let y2 = 200

// let x2 = 300; //-45
// let y2 = 100

// let x2 = 100; //135
// let y2 = 300

// let x2 = 200; //90
// let y2 = 300

let x2 = 300; //45
let y2 = 300

const dx = x2-x1;
const dy = y2-y1;

ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.beginPath();       // Start a new path
ctx.moveTo(x1, y1);    // Move the pen to (30, 50)
ctx.lineTo(x2, y2);  // Draw a line to (150, 100)
ctx.stroke()
///////////////////////////////////////////////////

    // const rez = (Math.atan2(y2 - y1,x2 - x1) * 180)/ Math.PI; 
    const rez = Math.atan2(y2 - y1,x2 - x1); 
    ctx.font = "30px red";
ctx.fillText("Rad : " +  rez.toString(),25,25);
ctx.fillText("Deg : " +  ((rez *180)/Math.PI).toString(),25,60);
// }
//////-----------normal line
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";
ctx.beginPath();       // Start a new path
ctx.moveTo(x1, y1);    // Move the pen to (30, 50)
ctx.lineTo(x1 + 200, y1);  // Draw a line to (150, 100)
ctx.stroke()
///////////////-----
////////////////////------final stroke
const rotateAngle  = Math.atan2(y2 - y1,x2 - x1);
console.log("rotateAngle",rotateAngle);
ctx.translate(x2,y2);
// ctx.rotate(1.57);
ctx.rotate( rotateAngle);
ctx.fillStyle = "black";
ctx.strokeStyle = "green";
//-------strokeone 
ctx.beginPath();       // Start a new path
ctx.moveTo(0, 0);    // Move the pen to (x,y)
ctx.lineTo( 0 , -20);  // Draw a line to (150, 100)
ctx.stroke()

ctx.beginPath();       // Start a new path
ctx.moveTo(0, 0);    // Move the pen to (x,y)
ctx.lineTo( 0 , 20);  // Draw a line to (150, 100)
ctx.stroke()



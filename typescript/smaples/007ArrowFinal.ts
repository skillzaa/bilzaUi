import getCtx from "../fns/getCtx.js";
import getCanvas from "../fns/getCanvas.js";

const ctx = getCtx();
const canvas = getCanvas();
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
////////////================////////////
function drawArrow(x2Incomming :number, y2Incomming :number){
let x1 = 200;
let y1 = 200
////////////////////
// let x2 = 300; //-45
// let y2 = 100

// let x2 = 300; //0
// let y2 = 200

let x2 = x2Incomming; //135
let y2 = y2Incomming;

// let x2 = 200; //90
// let y2 = 300

// let x2 = 300; //45
// let y2 = 300

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
ctx.lineTo(x1 + 100, y1);  // Draw a line to (150, 100)
ctx.stroke()
///////////////-----
////////////////////------final stroke
const rotateAngle  = Math.atan2(y2 - y1,x2 - x1);
ctx.save();
console.log("rotateAngle",rotateAngle);
ctx.translate(x2,y2);
//---------mark 0,0
ctx.beginPath();
ctx.arc(0,0,2 ,0,2 * Math.PI);
ctx.stroke();


ctx.rotate( rotateAngle);
ctx.fillStyle = "black";
ctx.strokeStyle = "green";
//-------strokeone 
ctx.beginPath();       // Start a new path
ctx.moveTo( 0,   0);    // Move the pen to (x,y)
ctx.lineTo( 0 , -20);
ctx.lineTo( 0 , 20); 

// ctx.moveTo( 0 , 20); 
ctx.lineTo(30, 0); 
ctx.lineTo(0, -20); 
ctx.stroke()

//----------restored
ctx.restore();

///////////////////////////unit circle
/////////////////
ctx.beginPath();
ctx.arc(200,200,100 ,0,2 * Math.PI);
ctx.stroke();
}

// let x2 = 200;
// let y2 = 300;
let angle =0;

setInterval(function(){
ctx.clearRect(0,0,canvas.width,canvas.height);
    drawArrow(
        100 * Math.cos(angle) + 200 ,
        100 * Math.sin(angle) + 200
        );
angle += 0.1;
// y2 -= 5;    
},500);


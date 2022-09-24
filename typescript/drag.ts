import {IComponent} from "../node_modules/bilza/src/bilza.js";


export default class Drag {
oldX :number;
oldY :number;

constructor(e :MouseEvent){
this.oldX = e.pageX;
this.oldY = e.pageY;
}
dragEvt(e :MouseEvent,selComp:IComponent){

if (e.clientX > this.oldX){
    const newX:number = selComp.x.value() + Math.abs(e.clientX - this.oldX);   
    selComp.x.set(newX);
    this.oldX = e.clientX;
    
} else if (e.clientX < this.oldX) {
    const newX:number = selComp.x.value() -  Math.abs(e.clientX - this.oldX);   
    selComp.x.set(newX);
    this.oldX = e.clientX;
    
}   
if (e.clientY > this.oldY){
    const newY:number = selComp.y.value() + Math.abs(e.clientY - this.oldY);   
    selComp.y.set(newY);
    this.oldY = e.clientY;
        
} else if (e.clientY < this.oldY) {
    const newY:number = selComp.y.value() - Math.abs(e.clientY - this.oldY);   
    selComp.y.set(newY);
    this.oldY = e.clientY;  
}   
}


/////////////class ends    
}
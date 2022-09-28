export default class Drag {
    constructor(e) {
        this.oldX = e.pageX;
        this.oldY = e.pageY;
    }
    dragEvt(e, selCompObj) {
        const selComp = selCompObj.comp;
        if (selComp == null) {
            return;
        }
        if (e.clientX > this.oldX) {
            const newX = selComp.x.value() + Math.abs(e.clientX - this.oldX);
            selComp.x.set(newX);
            this.oldX = e.clientX;
        }
        else if (e.clientX < this.oldX) {
            const newX = selComp.x.value() - Math.abs(e.clientX - this.oldX);
            selComp.x.set(newX);
            this.oldX = e.clientX;
        }
        if (e.clientY > this.oldY) {
            const newY = selComp.y.value() + Math.abs(e.clientY - this.oldY);
            selComp.y.set(newY);
            this.oldY = e.clientY;
        }
        else if (e.clientY < this.oldY) {
            const newY = selComp.y.value() - Math.abs(e.clientY - this.oldY);
            selComp.y.set(newY);
            this.oldY = e.clientY;
        }
    }
}

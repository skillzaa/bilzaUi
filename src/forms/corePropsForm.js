export default class CorePropsForm {
    constructor() {
    }
    save(selectedComp) {
        if (selectedComp == null) {
            return;
        }
        selectedComp.width.set(300);
        selectedComp.height.set(300);
        selectedComp.x.set(20);
        selectedComp.y.set(20);
        return 50;
    }
}

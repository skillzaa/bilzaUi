import CoreProps from "./coreProps.js";
export default class BaseCompDb extends CoreProps {
    constructor(id, startTime, endTime) {
        super(id);
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

import AniNumberDb from "../propTypes/AniNumberDb.js";
import AniColorDb from "../propTypes/AniColorDb.js";
import AniBooleanDb from "../propTypes/AniBooleanDb.js";
export default class CoreProps {
    constructor(id) {
        this.id = id;
        this.border = new AniNumberDb(0);
        this.colorBackground = new AniColorDb("white");
        this.colorBorder = new AniColorDb("black");
        this.color = new AniColorDb("black");
        this.height = new AniNumberDb(10);
        this.opacity = new AniNumberDb(100);
        this.paddingTop = new AniNumberDb(0);
        this.paddingBottom = new AniNumberDb(0);
        this.paddingRight = new AniNumberDb(0);
        this.paddingLeft = new AniNumberDb(0);
        this.rotation = new AniNumberDb(0);
        this.selected = false;
        this.showBackground = new AniBooleanDb(false);
        this.visible = new AniBooleanDb(true);
        this.version = "xx";
        this.width = new AniNumberDb(10);
        this.x = new AniNumberDb(0);
        this.y = new AniNumberDb(0);
    }
}

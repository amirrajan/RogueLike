import { gameWorld } from "../Main.js"

export class Tile {
    constructor(x, y, sprite, passable) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.passable = passable;;
    }

    draw() {
        gameWorld.drawSprite(this.sprite, this.x, this.y);
    }
}
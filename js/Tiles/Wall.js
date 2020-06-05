import { Tile } from "./Tile.js"

export class Wall extends Tile {
    constructor(x, y) {
        super(x, y, 7, false);
    }
}
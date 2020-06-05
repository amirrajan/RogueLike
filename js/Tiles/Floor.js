import { Tile } from "./Tile.js"

export class Floor extends Tile {
    constructor(x, y) {
        super(x, y, 6, true);
    }

    // stepOn(monster) {
    //     if(monster.isPlayer && this.treasure) {
    //         score++;
    //         playSound("treasure");
    //         this.treasure = false;
    //         spawnMonster();
    //     }
    // }
}
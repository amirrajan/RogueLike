import { Tile } from "./Tile.js"

class Exit extends Tile {
    constructor(x, y) {
        super(x, y, 11, true);
    }

    // stepOn(monster) {
    //     if(monster.isPlayer) {
    //         if(level == numberOfLevels) {
    //             playSound("newLevel");
    //             addScore(score, true);
    //             showTitle();
    //         } else {
    //             level++;
    //             startLevel(Math.min(maxHp, player.hp + 1));
    //         }
    //     }
    // }
}
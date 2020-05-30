import { CharacterBase } from "./CharacterBase.js";

export class Player extends CharacterBase{    
    constructor(playerName, playerSprite) {
        super(3, 2, playerName, playerSprite, 0, 0);
    }

    get playerX() {
        return this.playerX;
    }

    get playerY() {
        return this.playerY;
    }

    get playerSprite() {
        return this.playerSprite;
    }
}
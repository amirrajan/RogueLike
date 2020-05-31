import { CharacterBase } from "./CharacterBase.js";

export class Player extends CharacterBase{   
    playerName;
    playerSprite; 
    constructor(playerName, playerSprite) {
        super(3, 2, playerName, playerSprite, 0, 0);
    }

    set playerName(name) {
        this.name = name;
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

    
    set playerSprite(playerSprite) {
        this.playerSprite = playerSprite;
    }
}
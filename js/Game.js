import { Player } from "./Entities/Player.js";
import {
    getNextAndPrevChar,
    confirmSelectedChar,
    createCharacter,
} from "./UI/CharacterSelect.js";
import { CharSelect } from "./UI/CharSelect.js";

export class Game {
    characterSelection;
    // gameState;
    constructor(charArray) {
        this.characterSelection = new CharSelect(charArray, 0, "character-select");
        // this.gameState = "character-select"
    }

    displayCharSelect() {
        this.characterSelection.nextChar();
        this.characterSelection.prevChar();
        this.characterSelection.selectChar();
    }

    hideCharacterSelect() {
        this.characterSelection.hideCharSelect();
    }

    
    displayGameWorld() {
        console.log("Game World showing");
    }

    displaySelectedChar(playerSprite) {
        const test = document.querySelector("#test-image");
        test.src = this.charArray[playerSprite];
    }

    get state() {
        return this.characterSelection.state;
    }
}

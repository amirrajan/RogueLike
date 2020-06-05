import { Player } from "../Entities/Player.js";


export class CharSelect {
    // Possibly remove?
    charArray;
    charIndex;
    charImg;
    constructor() {
        this.charArray = [
            "images/pirate.png",
            "images/archer.png",
            "images/mage.png",
            "images/barbarian.png",
            "images/whiteknight.png"
        ];
        this.charIndex = 0;
        this.charImg = document.querySelector("#character-image");
    }

    nextChar() {
        const nextBtn = document.querySelector("#next__btn");
        nextBtn.addEventListener("click", () => {
            console.log("next");
            this.charIndex++;
            if (this.charIndex >= this.charArray.length) {
                this.charIndex = 0;
            }
            this.charImg.src = this.charArray[this.charIndex];
        });
    }

    prevChar() {
        const prevBtn = document.querySelector("#prev__btn");
        prevBtn.addEventListener("click", () => {
            console.log("prev");
            this.charIndex--;
            if (this.charIndex < 0) {
                this.charIndex = this.charArray.length - 1;
            }
            this.charImg.src = this.charArray[this.charIndex];
        });
    }

    selectChar(player) {
        const selectBtn = document.querySelector("#select-char__btn");
        selectBtn.addEventListener("click", () => {
            player.playerName = "Phil";
            player.playerSprite = this.charIndex;
            this.hideCharSelect();
            this.displayGameWindow();
        });
    }

    displayGameWindow() {
        const gameWindow = document.querySelector("#game-window");
        gameWindow.style.display = "inline-block";
    }

    // TODO: Implement set player name.

    displayGameWindow() {
        const gameWindow = document.querySelector("#game-window");
        gameWindow.style.display = "inline-block";
    }

    hideCharSelect() {
        const charSelectScreen = document.querySelector("#character-select__wrapper");
        charSelectScreen.style.display = "none";
    }

    get state() {
        return this.state;
    }

    get player() {
        return this.player;
    }
}

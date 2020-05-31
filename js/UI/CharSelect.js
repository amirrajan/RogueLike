import { Player } from "../Entities/Player.js";


export class CharSelect {
    charArray;
    charIndex;
    charImg;
    player;
    state;
    constructor(charArray, charIndex, state) {
        this.charArray = charArray;
        this.charIndex = charIndex;
        this.charImg = document.querySelector("#character-image");
        this.player = new Player();
        this.state = state;
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

    selectChar() {
        const selectBtn = document.querySelector("#select-char__btn");
        selectBtn.addEventListener("click", () => {
            this.player.playerName = "Phil";
            this.player.playerSprite = this.charIndex;
            this.state = "running";
        });
    }

    displayGameWindow() {
        const gameWindow = document.querySelector("#game-window");
        gameWindow.style.display = "inline-block";
    }

    // TODO: Implement a way to set a player name.

    displayGameWindow() {
        const gameWindow = document.querySelector("#game-window");
        gameWindow.style.display = "inline-block";
    }

    hideCharSelect() {
        const charSelectScreen = document.querySelector("#character-select__wrapper");
        charSelectScreen.style.display = "none";
    }

    get player() {
        return this.player;
    }
}

import { Player } from "../Entities/Player.js";
import { changeState } from "../States/StateHandler.js"

const characterImg = document.querySelector("#character-image");
const nextBtn = document.querySelector("#next__btn");
const prevBtn = document.querySelector("#prev__btn");
const selectBtn = document.querySelector("#select-char__btn");

const charArray = [
    "images/pirate.png",
    "images/archer.png",
    "images/mage.png",
    "images/barbarian.png",
    "images/whiteknight.png",
];

let charIndex = 0;

export function getNextAndPrevChar() {
    nextBtn.addEventListener("click", () => {
        console.log("next");
        charIndex++;
        if (charIndex >= charArray.length) {
            charIndex = 0;
        }
        characterImg.src = charArray[charIndex];
    });

    prevBtn.addEventListener("click", () => {
        console.log("prev");
        charIndex--;
        if (charIndex < 0) {
            charIndex = charArray.length - 1;
        }
        characterImg.src = charArray[charIndex];
    });
}

export function confirmSelectedChar(callback) {
    selectBtn.addEventListener("click", () => {
        hideCharSelect();
        displayGameWindow();
        callback();
    })
}

function hideCharSelect() {
    const charSelectScreen = document.querySelector("#character-select__wrapper");
    charSelectScreen.style.display = "none";
}

function displayGameWindow() {
    const gameWindow = document.querySelector("#game-window");
    gameWindow.style.display = "inline-block";
}

export function createCharacter() {
    return new Player("Phil", charIndex);
}
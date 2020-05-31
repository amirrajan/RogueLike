import { Game } from "./Game.js";


const charArray = [
    "images/pirate.png",
    "images/archer.png",
    "images/mage.png",
    "images/barbarian.png",
    "images/whiteknight.png",
];


const newGame = new Game(charArray);

newGame.displayCharSelect();

const tick = () => {
    if(newGame.state === "running") {
        const test = document.querySelector("#test-image");
        test.src = newGame.characterSelection.charArray[newGame.characterSelection.player.playerSprite];
        console.log(newGame.characterSelection.player.playerSprite);
    }
}

// if(state === "character-select") {
//     newGame.displayCharSelect();
// } else if (state === "game-world") {
    
// }

setInterval(tick, 15)



// const characterSelection = new CharSelect(charArray, 0, "character-select");
// characterSelection.nextChar();
// characterSelection.prevChar();
// characterSelection.selectChar();
// console.log("inside of " + characterSelection.state);

// if (characterSelection.state === "game-world") {
//     console.log("entered game-world state");
// }

// const newGame = new Game();

// getNextAndPrevChar();

// newGame.player = confirmSelectedChar(createCharacter);
// console.log(newGame.player);

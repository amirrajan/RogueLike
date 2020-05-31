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


setInterval(tick, 15)


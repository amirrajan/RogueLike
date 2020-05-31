import { GameWorld } from "./GameWorld.js";

const spritesheet = new Image();
spritesheet.src = "spritesheet.png";

const gameWorld = new GameWorld(64, 9, 3, spritesheet, 0);

gameWorld.displayCharacterSelect();



const draw = () => {
    gameWorld.draw();
}


draw();



gameWorld.movePlayer();
setInterval(draw, 15);




































// import { Game } from "./Game.js";

// const charArray = [
//     "images/pirate.png",
//     "images/archer.png",
//     "images/mage.png",
//     "images/barbarian.png",
//     "images/whiteknight.png",
// ];

// const spritesheet = new Image();
// spritesheet.src = "spritesheet.png";

// const newGame = new Game(charArray, 64, 9, 3);

// newGame.displayCharSelect();

// draw(
//     newGame.gameWorld.ctx,
//     newGame.gameWorld.canvas.width,
//     newGame.gameWorld.canvas.height,
//     spritesheet,
//     newGame.gameWorld.tileSize,
//     0,
//     0,
//     0
// );
// const tick = () => {
//     if (newGame.state === "running") {
//         console.log("running state");
//         // const test = document.querySelector("#test-image");
//         // test.src = newGame.characterSelection.charArray[newGame.characterSelection.player.playerSprite];

//     }
// };

// function draw(context, width, height, spritesheet, tileSize, sprite, x, y) {
//     context.clearRect(0, 0, width, height);
//     drawSprite(context, spritesheet, tileSize, sprite, x, y);
//     console.log("Drawing");
// }

// function drawSprite(context, spritesheet, tileSize, sprite, x, y) {
//     context.drawImage(
//         spritesheet,
//         sprite * 16,
//         0,
//         16,
//         16,
//         x * tileSize,
//         y * tileSize,
//         tileSize,
//         tileSize
//     );
// }

// setInterval(draw, 15);

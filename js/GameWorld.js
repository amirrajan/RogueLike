import { CharSelect } from "./UI/CharSelect.js";
import { Player } from "./Entities/Player.js";

export class GameWorld {
    canvas;
    ctx;
    tileSize;
    numberOfTiles;
    uiSize;
    spritesheet;
    player;
    characterSelector;
    constructor(tileSize, numberOfTiles, uiSize, spritesheet) {
        this.canvas = document.querySelector("#game-window");
        this.ctx = this.canvas.getContext("2d");
        this.tileSize = tileSize;
        this.numberOfTiles = numberOfTiles;
        this.uiSize = uiSize;
        this.player = new Player();
        this.canvas.width = this.tileSize * this.numberOfTiles;
        this.canvas.height = this.tileSize * (this.numberOfTiles + this.uiSize);
        this.canvas.style.width = this.canvas.width + "px";
        this.canvas.style.height = this.canvas.height + "px";
        this.ctx.imageSmoothingEnabled = false;
        this.spritesheet = spritesheet;
        this.characterSelector = new CharSelect();
    }

    displayCharacterSelect() {
        this.characterSelector.nextChar();
        this.characterSelector.prevChar();
        this.characterSelector.selectChar(this.player);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawSprite();
    }

    drawSprite() {
        this.ctx.drawImage(
            this.spritesheet,
            this.characterSelector.charIndex * 16,
            0,
            16,
            16,
            this.player.x * this.tileSize,
            this.player.y * this.tileSize,
            this.tileSize,
            this.tileSize
        );
    }

    movePlayer() {
        this.player.move();
    }
}

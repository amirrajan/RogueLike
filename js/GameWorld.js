import { CharSelect } from "./UI/CharSelect.js";
import { Player } from "./Entities/Player.js";
import { Wall } from "./Tiles/Wall.js";
import { Floor } from "./Tiles/Floor.js";

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
        this.tiles = [];
    }

    displayCharacterSelect() {
        this.characterSelector.nextChar();
        this.characterSelector.prevChar();
        this.characterSelector.selectChar(this.player);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i = 0; i < this.numberOfTiles; i++) {
            for(let j = 0; j < this.numberOfTiles; j++) {
                this.getTile(i, j).draw();
            }
        }

        this.drawSprite(this.characterSelector.charIndex, this.player.x, this.player.y);
    }

    drawSprite(sprite, x, y) {
        this.ctx.drawImage(
            this.spritesheet,
            sprite * 16,
            0,
            16,
            16,
            x * this.tileSize,
            y * this.tileSize,
            this.tileSize,
            this.tileSize
        );
    }

    movePlayer() {
        this.player.move();
    }

    generateTiles() {
        for(let i = 0; i < this.numberOfTiles; i++) {
            this.tiles[i] = [];
            for(let j = 0; j < this.numberOfTiles; j++) {
                if(Math.random() < 0.3 || !this.inBounds(i, j)) this.tiles[i][j] = new Wall(i, j, this.ctx); 
                else this.tiles[i][j] = new Floor(i, j, this.ctx);
            }
        }
    }

    inBounds(x, y) {
        return x > 0 && y > 0 && x < this.numberOfTiles - 1 && y < this.numberOfTiles - 1;
    }

    getTile(x, y) {
        if(this.inBounds(x,y)) return this.tiles[x][y];
        else return new Wall(x, y, this.ctx);
    }

    get ctx() {
        return this.ctx;
    }
}

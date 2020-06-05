export class CharacterBase{
    health;
    damage;
    name;
    sprite;
    x;
    y;

    constructor(health, damage, name, sprite, x, y) {
        this.health = health;
        this.damage = damage;
        this.name = name;
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }
    
    move() {
        document.querySelector("html").onkeypress = (e) => {
            e.preventDefault();
            if (e.key === "w") this.y--;
            if (e.key === "s") this.y++;
            if (e.key === "a") this.x--;
            if (e.key === "d") this.x++;
            console.log("moving");
        }
    }

     attack() {
        // TODO: Implement 
     }

     die() {
         // TODO: Implement
     }

     
}
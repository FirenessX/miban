let LivingCreature = require('./LivingCreature');

module.exports = class Fishs extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 100;
        this.multiply = 0;
        this.directions = [];
    }

    getNewCordinates() {
        this.directions = [
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y + 1],
        ];
    }


    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        var waterCells = this.chooseCell(7);
        var newCell = this.random(waterCells);

        if (newCell && this.multiply >= 101) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 11;
            matrix[this.y][this.x] = 7;
            caviarArr.push(new Caviar(newX, newY));
            this.multiply = 0;
        }
        else {
            this.move()
        }
    }

    move() {
        const waterCells = this.random(this.chooseCell(7));
        const aldieCells = this.random(this.chooseCell(13));
        const secaldieCells = this.random(this.chooseCell(18));
        if (waterCells) {
            let newX = waterCells[0];
            let newY = waterCells[1];
            matrix[newY][newX] = 10;
            matrix[this.y][this.x] = 7;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
        if (this.energy <= 0) {
            this.die();
        }
        if (aldieCells) {
            this.die();
        }
        if (secaldieCells) {
            this.die();
        }
    }

    die() {
        for(var i in fishsArr){
            if (this.x== fishsArr[i].x && this.y == fishsArr[i].y) {
                fishsArr.splice(i,1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}
var Caviar = require("./class.caviar.js");
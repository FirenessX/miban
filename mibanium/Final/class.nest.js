let LivingCreature = require('./LivingCreature');
var GrassEaters = require("./class.grasseaters.js");

module.exports = class Nest extends LivingCreature{
    constructor(x, y, index) {
        super(x, y ,index);
        this.multiply = 0;
        this.directions = [
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y]
        ];

    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var mushCells = this.chooseCell(3);
        var newCell = this.random(emptyCells);
        var newCellG = this.random(grassCells);
        var newCellM = this.random(mushCells);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 30;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 10) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 30;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 10) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 30;
            this.multiply = 0;
        }
        this.multiply++;
    }
}
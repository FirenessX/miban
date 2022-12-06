let LivingCreature = require('./LivingCreature');
var Fishs = require("./class.fishs.js");

module.exports = class FishsNest extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
        this.directions = [
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1]
        ];

    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {
        var waterCells = this.chooseCell(7);
        var newCell = this.random(waterCells);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 10;

            var newFishs = new Fishs(newX, newY, 1);
            fishsArr.push(newFishs);
            this.multiply = 0;
        }
        this.multiply++;
    }
}
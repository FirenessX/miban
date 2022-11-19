let LivingCreature = require('./LivingCreature');

module.exports = class Nest extends LivingCreature{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var mushCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        var newCellG = random(grassCells);
        var newCellM = random(mushCells);

        if (newCell && this.multiply >= 30) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        if (newCellG && this.multiply >= 30) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        if (newCellM && this.multiply >= 30) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 5;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 5;
        }
        this.multiply++;
    }
}
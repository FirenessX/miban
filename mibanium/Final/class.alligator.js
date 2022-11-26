let LivingCreature = require('./LivingCreature');

module.exports = class Alligator extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }


    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }
    move() {
        const waterCells = this.random(this.chooseCell(7));
        if (waterCells) {
            let newX = waterCells[0];
            let newY = waterCells[1];
            matrix[newY][newX] = 13;
            matrix[this.y][this.x] = 15;
            this.x = newX;
            this.y = newY;
        }
    }
}
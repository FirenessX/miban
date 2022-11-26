let LivingCreature = require('./LivingCreature');

module.exports = class AlligatorTale extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }
    move() {
        const aCells = this.random(this.chooseCell(17));
        if (aCells) {
            let newX = aCells[0];
            let newY = aCells[1];
            matrix[newY][newX] = 16;
            matrix[this.y][this.x] = 7;
            this.x = newX;
            this.y = newY;
        }
    }
}
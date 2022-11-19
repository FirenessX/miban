let LivingCreature = require('./LivingCreature');

module.exports = class Creator extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 50
        this.multiply = 0;
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

    mul1() {
        let found = this.chooseCell(0)
        let newCell = random(found);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
            grassArr.push(new Grass(newX, newY));
        }
    }
    mul2() {
        let found = this.chooseCell(0);
        let newCell = random(found);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            mushroomArr.push(new Mushroom(newX, newY));
        }
        else {
            this.move()
        }
    }
    move() {
        const emptCells = random(this.chooseCell(0));
        const emptCellsG = random(this.chooseCell(1));
        const emptCellsM = random(this.chooseCell(3));
        if (emptCells) {
            let newX = emptCells[0];
            let newY = emptCells[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsG) {
            let newX = emptCellsG[0];
            let newY = emptCellsG[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 1;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsM) {
            let newX = emptCellsM[0];
            let newY = emptCellsM[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 3;
            this.x = newX;
            this.y = newY;
        }
        this.energy--
        if (this.energy <= 0) {
            this.quit()
        }
    }
    quit() {
        for (var i in creatorArr) {
            if (this.x == creatorArr[i].x && this.y == creatorArr[i].y) {
                creatorArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 1
    }
}


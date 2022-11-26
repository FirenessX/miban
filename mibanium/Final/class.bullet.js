let LivingCreature = require('./LivingCreature');

module.exports = class Bullet extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 40;
        this.multiply = 0;
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y],
        ];
    }


    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }
    destroy() {
        const emptyCells = this.random(this.chooseCell(0));
        const GCells = this.random(this.chooseCell(1));
        const GECells = this.random(this.chooseCell(2));
        const MCells = this.random(this.chooseCell(3));
        const PCells = this.random(this.chooseCell(12));
        if (emptyCells) {
            let newX = emptyCells[0];
            let newY = emptyCells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (GCells) {
            let newX = GCells[0];
            let newY = GCells[1];
            matrix[newY][newX] = 27;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (GECells) {
            let newX = GECells[0];
            let newY = GECells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
            for (var i in grassEatersArr) {
                if (this.x == grassEatersArr[i].x && this.y == grassEatersArr[i].y) {
                    grassEatersArr.splice(i, 1);
                    break;
                }
            }
        }
        if (MCells) {
            let newX = MCells[0];
            let newY = MCells[1];
            matrix[newY][newX] = 27;
            for (var i in mushroomArr) {
                if (this.x == mushroomArr[i].x && this.y == mushroomArr[i].y) {
                    mushroomArr.splice(i, 1);
                    break;
                }
            }
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (PCells) {
            let newX = PCells[0];
            let newY = PCells[1];
            matrix[newY][newX] = 27;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
            this.disrections = 0;
        }
        if (this.energy <= 0) {
            this.dissappear();
        }
    }
    dissappear() {
        for (var i in bulletArr) {
            if (this.x == bulletArr[i].x && this.y == bulletArr[i].y) {
                bulletArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 28
        var newCrater = new Crater(this.x, this.y, 1);
        craterArr.push(newCrater);
    }
}

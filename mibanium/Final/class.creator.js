class Creator extends LivingCreature{
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

class Nest {
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

class FishsNest {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y - 1]
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
        var waterCells = this.chooseCell(7);
        var newCell = random(waterCells);

        if (newCell && this.multiply >= 40) {
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
class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    destroy() {
        const emptyCells = random(this.chooseCell(0));
        const GCells = random(this.chooseCell(1));
        const GECells = random(this.chooseCell(2));
        const MCells = random(this.chooseCell(3));
        const PCells = random(this.chooseCell(12));
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

class Pistol {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y],
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
    strike() {
        var emptyCells = this.chooseCell(0);
        var GCells = this.chooseCell(1);
        var GECells = this.chooseCell(2);
        var MCells = this.chooseCell(3);
        var PCells = this.chooseCell(12);
        var newCell = random(emptyCells);
        var newCellG = random(GCells);
        var newCellGE = random(GECells);
        var newCellM = random(MCells);
        var newCellP = random(PCells);

        if (newCellG /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellGE /*&& this.multiply >= random(5 , 15)*/ ) {
            var newX = newCellGE[0];
            var newY = newCellGE[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellM /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCellP /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCellP[0];
            var newY = newCellP [1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        if (newCell /*&& this.multiply >= random(5 , 15)*/) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 27;

            var newBullet = new Bullet(newX, newY, 1);
            bulletArr.push(newBullet);
            this.multiply = 0;
        }
        this.multiply++;
    }
}

class Crater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.CD = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

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
    cr() {
        this.CD++;
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        var GCells = this.chooseCell(1);
        var newCellG = random(GCells);
        var GECells = this.chooseCell(2);
        var newCellGE = random(GECells);
        var MCells = this.chooseCell(3);
        var newCellM = random(MCells);
        var PCells = this.chooseCell(12);
        var newCellP = random(PCells);
        var CCells = this.chooseCell(27);
        var newCellC = random(CCells);
        var CCells2 = this.chooseCell(29);
        var newCellC2 = random(CCells2);
        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 1) {
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellGE && this.multiply >= 1) {
            var newX = newCellGE[0];
            var newY = newCellGE[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 1) {
            var newX = newCellM[0];
            var newY = newCellM[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellP && this.multiply >= 1) {
            var newX = newCellP[0];
            var newY = newCellP[1];
            matrix[newY][newX] = 0;
            this.multiply = 0;
        }
        if (newCellC) {
            this.dissappear();
        }
        if (newCellC2) {
            this.dissappear();
        }
        if (this.CD >= 9) {
            this.dissappear();
        }
    }
    dissappear() {
        for (var i in craterArr) {
            if (this.x == craterArr[i].x && this.y == craterArr[i].y) {
                craterArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 0
    }
}
class GrassEaters extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 3;
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

    mul() {

        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var mushCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        var newCellG = random(grassCells);
        var newCellM = random(mushCells);

        if (newCell && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        if (newCellG && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        if (newCellM && this.multiply >= 120) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            grassEatersArr.push(new GrassEaters(newX, newY));
            this.energy = 3;
            this.multiply = 0;
        }
        this.multiply++;
    }
    eat() {
        const newCells = random(this.chooseCell(1));
        const newCellsMush = random(this.chooseCell(3));
        const bdeath = random(this.chooseCell(27));
        const cdeath = random(this.chooseCell(29));
            if (newCells) {
                var newX = newCells[0];
                var newY = newCells[1];
                matrix[newY][newX] = 2;

                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                for (var i in grassArr) {

                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            if (newCellsMush) {
                var newX = newCellsMush[0];
                var newY = newCellsMush[1];
                matrix[newY][newX] = 2;
    
                matrix[this.y][this.x] = 0;
    
                this.x = newX;
                this.y = newY;
                for (var i in mushroomArr) {
    
                    if (newX == mushroomArr[i].x && newY == mushroomArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                this.energy - 3;
            }
            if (bdeath){
                this.die();
            }
            if (cdeath){
                this.die();
            }
            this.energy++
            if (this.energy > 30){
                this.mul();
            }
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
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsG) {
            let newX = emptCellsG[0];
            let newY = emptCellsG[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 1;
            this.x = newX;
            this.y = newY;
        }
        if (emptCellsM) {
            let newX = emptCellsM[0];
            let newY = emptCellsM[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 3;
            this.x = newX;
            this.y = newY;
        }
        this.energy--
        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        for(var i in grassEatersArr){
            if (this.x== grassEatersArr[i].x && this.y == grassEatersArr[i].y) {
                grassEatersArr.splice(i,1);
                break;
            }
        }
        matrix[this.y][this.x]=0
    }
}
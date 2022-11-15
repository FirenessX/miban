class Fishs extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.energy = 30;
        this.multiply = 0;
        this.directions = []
    }

    getNewCordinates() {
        this.directions = [
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y + 1],
        ];
    }


    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        var waterCells = this.chooseCell(7);
        var newCell = random(waterCells);

        if (newCell && this.multiply >= 70) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 11;
            matrix[this.y][this.x] = 7;
            caviarArr.push(new Caviar(newX, newY));
            this.multiply = 0;
        }
        else {
            this.move()
        }
    }
    move() {
        const waterCells = random(this.chooseCell(7));
        const aldieCells = random(this.chooseCell(13));
        const secaldieCells = random(this.chooseCell(18));
        if (waterCells) {
            let newX = waterCells[0];
            let newY = waterCells[1];
            matrix[newY][newX] = 10;
            matrix[this.y][this.x] = 7;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
        if (this.energy <= 0) {
            this.die();
        }
        if (aldieCells) {
            this.die();
        }
        if (secaldieCells) {
            this.die();
        }
    }
    die() {
        for(var i in fishsArr){
            if (this.x== fishsArr[i].x && this.y == fishsArr[i].y) {
                fishsArr.splice(i,1);
                break;
            }
        }
    matrix[this.y][this.x] = 7
}
}
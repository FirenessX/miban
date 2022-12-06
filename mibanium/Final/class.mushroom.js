let LivingCreature = require('./LivingCreature');

module.exports = class Mushroom extends LivingCreature{
    constructor (x, y, index){
        super(x, y, index);
        this.multiply = 0;
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x    , this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y    ],
            [this.x + 5, this.y    ],
            [this.x - 5, this.y + 5],
            [this.x    , this.y + 5],
            [this.x + 5, this.y + 5],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul () {
        
        var emptyCells = this.chooseCell(0);
        var grassCells = this.chooseCell(1);
        var newCell = this.random(emptyCells);
        var newCellG = this.random(grassCells);
        if(newCell && this.multiply >= 250){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
    
            var newMushroom = new Mushroom(newX, newY, 1);
            mushroomArr.push(newMushroom);
            this.multiply = 0;
        }
        if(newCellG && this.multiply >= 250){
            var newX = newCellG[0];
            var newY = newCellG[1];
            matrix[newY][newX] = 3;
    
            var newMushroom = new Mushroom(newX, newY, 1);
            mushroomArr.push(newMushroom);
            this.multiply = 0;
        }
        this.multiply++;
    }
}

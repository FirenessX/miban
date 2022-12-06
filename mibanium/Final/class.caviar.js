let LivingCreature = require('./LivingCreature');

module.exports = class Caviar extends LivingCreature{
    constructor (x, y, index){
        super(x, y, index);
        this.multiply = 0;
        this.time = 21;
        this.directions = [];
    }

    getNewCordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],     
        ];   
    }

    chooseCell(character){
        this.getNewCordinates()
        return super.chooseCell(character);
    }

    mul() {
    
        var waterCells = this.chooseCell(7);
        const aldieCells = this.random(this.chooseCell(13));
        const secaldieCells = this.random(this.chooseCell(18));
        var newCell = this.random(waterCells);
        if (this.time < 0) {
            this.stop();
        }
        if (aldieCells) {
            this.stop();
        }
        if (secaldieCells) {
            this.stop();
        }
        if (newCell && this.multiply >= 20) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 10;
    
            var newFishs = new Fishs(newX, newY, 1);
            fishsArr.push(newFishs);
            this.multiply = 0;
        }
        this.multiply++;
        this.time--;
    }

    stop() {
        for (var i in caviarArr) {
            if (this.x == caviarArr[i].x && this.y == caviarArr[i].y) {
                caviarArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}
var Fishs = require("./class.fishs.js");
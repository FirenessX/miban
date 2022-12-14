let LivingCreature = require('./LivingCreature');
var Bullet = require("./class.bullet.js");

module.exports = class Pistol extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y],
        ];

    }
    chooseCell(character) {
        return super.chooseCell(character);
    }
    strike() {
        var emptyCells = this.chooseCell(0);
        var GCells = this.chooseCell(1);
        var GECells = this.chooseCell(2);
        var MCells = this.chooseCell(3);
        var PCells = this.chooseCell(12);
        var newCell = this.random(emptyCells);
        var newCellG = this.random(GCells);
        var newCellGE = this.random(GECells);
        var newCellM = this.random(MCells);
        var newCellP = this.random(PCells);

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

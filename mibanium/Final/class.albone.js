let LivingCreature = require('./LivingCreature');

module.exports = class AlBone extends LivingCreature{
    constructor(x, y) {
        super(x, y);
    }
    
    NaN(){
        for (var i in alBoneArr) {
            if (this.x == alBoneArr[i].x && this.y == alBoneArr[i].y) {
                alBoneArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}

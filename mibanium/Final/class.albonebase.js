class AlBoneBase extends LivingCreature{
    constructor(x, y) {
        super(x, y);
    }
    
    NaN(){
        for (var i in alBoneBaseArr) {
            if (this.x == alBoneBaseArr[i].x && this.y == alBoneBaseArr[i].y) {
                alBoneBaseArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x] = 7
    }
}
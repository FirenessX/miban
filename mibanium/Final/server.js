var port = 4004;

grassArr= [];
grassEatersArr= [];
mushroomArr = [];
creatorArr = [];
nestArr = [];
fishsnestArr = [];
fishsArr = [];
caviarArr = [];
predatorArr = [];
alligatorArr = [];
alBoneArr = [];
alBoneBaseArr = [];
alligatorBaseArr = [];
alligatorTaleArr = [];
secAlligatorArr = [];
secAlBoneArr = [];
secAlBoneBaseArr = [];
secAlligatorBaseArr = [];
secAlligatorTaleArr = [];
bulletArr = [];
pistolArr = [];
craterArr = [];

Grass = require("./class.grass");
GrassEaters = require("./class.grasseaters.js");
AlBone = require("./class.albone.js");
AlBoneBase = require("./class.albonebase.js");
Alligator = require("./class.alligator.js");
AlligatorBase = require("./class.alligatorbase.js");
AlligatorTale = require("./class.alligatortale.js");
Bullet = require("./class.bullet.js");
Caviar = require("./class.caviar.js");
Crater = require("./class.crater.js");
Creator = require("./class.creator.js");
Fishs = require("./class.fishs.js");
FishsNest = require("./class.fishsnest.js");
LivingCreature = require("./LivingCreature.js");
Mushroom = require("./class.mushroom.js");
Nest = require("./class.nest.js");
Pistol = require("./class.pistol.js");
Predator = require("./class.predator.js");
SecAlBone = require("./class.secalbone.js");
SecAlBoneBase = require("./class.secalbonebase.js");
SecAlligator = require("./class.secalligator.js");
SecAlligatorBase = require("./class.secalligatorbase.js");
SecAlligatorTale = require("./class.secalligatortale.js");

var express = require('express');
var http = express();
var server = require('http').Server(http);
var io = require('socket.io')(server);
http.use(express.static("final"));
http.get('/', function (req, res) {
    res.redirect('localhost:4004';
});
http.listen(port, function () {
    console.log('THE PORT OF THE SERVER: ', port)
})

matrix = [
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 25, 25, 25, 25, 25, 25],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 21, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 14, 16, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 24, 24],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 25, 25, 25, 25, 25, 25],
]

function weather() {
    if (weather === 'winter'){
        weather = 'spring';
    }
    if (weather === 'spring'){
        weather = 'summer';
    }
    if (weather === 'summer'){
        weather = 'fall';
    }
    if (weather === 'fall'){
        weather = 'winter';
    }
}

setInterval(weather, 5000)

function creatingObjects() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            }
            if (matrix[y][x] == 3) {
                mushroomArr.push(new Mushroom(x, y))
            }
            if (matrix[y][x] == 4) {
                creatorArr.push(new Creator(x, y))
            }
            if (matrix[y][x] == 2){
                grassEatersArr.push(new GrassEaters(x, y))
            }
            if (matrix[y][x] == 5) {
                nestArr.push(new Nest(x, y))
            }
            if (matrix[y][x] == 8) {
                fishsnestArr.push(new FishsNest(x, y))
           }
            if (matrix[y][x] == 10) {
                fishsArr.push(new Fishs(x, y))
            }
            if (matrix[y][x] == 11) {
                caviarArr.push(new Caviar(x, y))
            }
            if (matrix[y][x] == 12) {
                predatorArr.push(new Predator(x, y))
            }
            if (matrix[y][x] == 13) {
                alligatorArr.push(new Alligator(x, y))
            }
            if (matrix[y][x] == 14) {
                alligatorBaseArr.push(new AlligatorBase(x, y))
            }
            if (matrix[y][x] == 15) {
                alBoneArr.push(new AlBone(x, y))
            }
            if (matrix[y][x] == 17) {
                alBoneBaseArr.push(new AlBoneBase(x, y))
            }
            if (matrix[y][x] == 16) {
                alligatorTaleArr.push(new AlligatorTale(x, y))
            }
            if (matrix[y][x] == 18) {
                secAlligatorArr.push(new SecAlligator(x, y))
            }
            if (matrix[y][x] == 19) {
                secAlligatorBaseArr.push(new SecAlligatorBase(x, y))
            }
            if (matrix[y][x] == 20) {
                secAlBoneArr.push(new SecAlBone(x, y))
            }
            if (matrix[y][x] == 22) {
                secAlBoneBaseArr.push(new SecAlBoneBase(x, y))
            }
            if (matrix[y][x] == 21) {
                secAlligatorTaleArr.push(new SecAlligatorTale(x, y))
            }
            if (matrix[y][x] == 26) {
                pistolArr.push(new Pistol(x, y))
            }
            if (matrix[y][x] == 27) {
                bulletArr.push(new Bullet(x, y))
            }
            if (matrix[y][x] == 28) {
                craterArr.push(new Crater(x, y))
            }
        }      
    }
}
creatingObjects();
function game() {
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in mushroomArr) {
        mushroomArr[i].mul();
    }
    for (let i in nestArr) {
        nestArr[i].mul();
    }
    for (let i in fishsnestArr) {
        fishsnestArr[i].mul();
    }
    for (let i in creatorArr) {
        creatorArr[i].mul1();
        creatorArr[i].mul2();
    }
    for (let i in grassEatersArr) {
        grassEatersArr[i].eat();
    }
    for (let i in fishsArr) {
        fishsArr[i].mul();
    }
    for (let i in caviarArr) {
        caviarArr[i].mul();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    for (let i in alligatorArr) {
        alligatorArr[i].move();
    }
    for (let i in alBoneArr) {
        alBoneArr[i].NaN();
    }
    for (let i in alBoneBaseArr) {
        alBoneBaseArr[i].NaN();
    }
    for (let i in alligatorBaseArr) {
        alligatorBaseArr[i].move();
    }
    for (let i in alligatorTaleArr) {
        alligatorTaleArr[i].move();
    }
    for (let i in secAlligatorArr) {
        secAlligatorArr[i].move();
    }
    for (let i in secAlBoneArr) {
        secAlBoneArr[i].NaN();
    }
    for (let i in secAlBoneBaseArr) {
        secAlBoneBaseArr[i].NaN();
    }
    for (let i in secAlligatorBaseArr) {
        secAlligatorBaseArr[i].move();
    }
    for (let i in secAlligatorTaleArr) {
        secAlligatorTaleArr[i].move();
    }
    for (var i = 0; i <= 12; i++) {
        for (let i in bulletArr) {
            bulletArr[i].destroy();
        }
    }
    // for (let i in pistolArr) {
    //     pistolArr[i].mul();
    // }
    for (var i = 0; i <= 8; i++) {
        for (let i in craterArr) {
            craterArr[i].cr();
        }
    }
    io.sockets.emit("send info",matrix)
}

setInterval(game, 85)
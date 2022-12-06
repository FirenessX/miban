var port = 4004;
var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('localhost:4004');
});
var io = require('socket.io')(server);
var fs = require('fs');
server.listen(port, function () {
    console.log('PORT OF THE SERVER: ', port)
})

weath = "spring";

var Grass = require("./class.grass.js");
var GrassEaters = require("./class.grasseaters.js");
var AlBone = require("./class.albone.js");
var AlBoneBase = require("./class.albonebase.js");
var Alligator = require("./class.alligator.js");
var AlligatorBase = require("./class.alligatorbase.js");
var AlligatorTale = require("./class.alligatortale.js");
var Bullet = require("./class.bullet.js");
//var Caviar = require("./class.caviar.js");
var Crater = require("./class.crater.js");
var Creator = require("./class.creator.js");
var Fishs = require("./class.fishs.js");
var FishsNest = require("./class.fishsnest.js");
var LivingCreature = require("./LivingCreature.js");
var Mushroom = require("./class.mushroom.js");
var Nest = require("./class.nest.js");
var Pistol = require("./class.pistol.js");
var Predator = require("./class.predator.js");
var SecAlBone = require("./class.secalbone.js");
var SecAlBoneBase = require("./class.secalbonebase.js");
var SecAlligator = require("./class.secalligator.js");
var SecAlligatorBase = require("./class.secalligatorbase.js");
var SecAlligatorTale = require("./class.secalligatortale.js");

grassArr = [];
grassEatersArr = [];
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

matrix = [
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 18, 19, 21, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 14, 16, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 6, 7, 7, 7, 7, 7, 7, 7],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 24, 24, 25, 25, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 24],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 25, 24, 24, 25, 25, 24, 24],
	[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 25, 25, 25, 25],
	[6, 6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 24, 25, 25, 25, 25],
	[6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
	[6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25],
];

const side = 23;

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "fall"
    }
    else if (weath == "fall") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}

setInterval(weather, 5000);


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

// function Strike() {
//     for (let i in pistolArr) {
//         pistolArr[i].strike();
//     }
// }

function game() {
    if (grassArr[0] !== undefined) {
        if(weath != 'winter') {
            for(let i in grassArr){
                grassArr[i].mul();
            }
        }             
    }
    if (Math.floor(Math.random()*199) == 0) 
    {
        if (mushroomArr[0] !== undefined) {
            if(weath == 'fall') {
                for (let i in mushroomArr) {
                    mushroomArr[i].mul();
                }
        }
        
    }
    }
    if (nestArr[0] !== undefined) {
        if(weath != 'winter') {
            for (let i in nestArr) {
                nestArr[i].mul();
            }
        }
        
    }
    if (fishsnestArr[0] !== undefined) {
        if(weath != 'winter') {
            for (let i in fishsnestArr) {
                fishsnestArr[i].mul();
            }
        }
        
    }
    if (creatorArr[0] !== undefined) {
        for (let i in creatorArr) {
            creatorArr[i].mul1();
            creatorArr[i].mul2();
    }
        
    }
    if (grassEatersArr[0] !== undefined) {
        if(weath != 'winter') {
            for (let i in grassEatersArr) {
                grassEatersArr[i].eat();
            }
        }
        else if(Math.floor(Math.random()*4) == 0) {
            for (let i in grassEatersArr) {
                grassEatersArr[i].eat();
            }
        }
        
    }
    if (fishsArr[0] !== undefined) {
        if(weath != 'winter') {
            for (let i in fishsArr) {
                fishsArr[i].mul();
            }
        }
        else {
           for (let i in fishsArr) {
                fishsArr[i].move();
            } 
        }
        
    }
    if (caviarArr[0] !== undefined) {
        if(weath != 'winter') {
            for (let i in caviarArr) {
                caviarArr[i].mul();
            }
        }
        
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    if (weath != 'winter') {
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
    }

    
    for (var i = 0; i <= 12; i++) {
        for (let i in bulletArr) {
            bulletArr[i].destroy();
        }
    }
    if (Math.floor(Math.random()*74) == 0) 
        {
            for (let i in pistolArr) {
            pistolArr[i].strike();
        }
    }
    for (var i = 0; i <= 64; i++) {
        for (let i in craterArr) {
            craterArr[i].cr();
        }
    }

    let sendData = {
        matrix: matrix,
        grassCounter: grassArr.length,
        grassEatersCounter: grassEatersArr.length,
        mushroomCounter: mushroomArr.length,
        creatorCounter: creatorArr.length,
        fishsCounter: fishsArr.length,
        caviarCounter: caviarArr.length,
        predatorCounter: predatorArr.length,
        bulletCounter: bulletArr.length,
        craterCounter: craterArr.length,
    }
    io.sockets.emit("send info",sendData)
}

setInterval(game, 85)

io.on('connection', function (socket) {
    creatingObjects();
});

var statistics = {};

setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEaters = grassEatersArr.length;
    statistics.mushroom = mushroomArr.length;
    statistics.creator = creatorArr.length;
    statistics.fishs = fishsArr.length;
    statistics.caviar = caviarArr.length;
    statistics.predator = predatorArr.length;
    statistics.bullet = bulletArr.length;
    statistics.crater = craterArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
    })
}, 1000)
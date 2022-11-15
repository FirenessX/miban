let matrix = [
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

const side = 23;
let grassArr = [];
let grassEatersArr = [];
let mushroomArr = [];
let creatorArr = [];
let nestArr = [];
let fishsnestArr = [];
let fishsArr = [];
let caviarArr = [];
let predatorArr = [];
let alligatorArr = [];
let alBoneArr = [];
let alBoneBaseArr = [];
let alligatorBaseArr = [];
let alligatorTaleArr = [];
let secAlligatorArr = [];
let secAlBoneArr = [];
let secAlBoneBaseArr = [];
let secAlligatorBaseArr = [];
let secAlligatorTaleArr = [];
let bulletArr = [];
let pistolArr = [];
let craterArr = [];

function mousePressed() {
	for (let i in pistolArr) {
		pistolArr[i].strike();
	}
}

function setup() {
	frameRate(15);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	noStroke();

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
			if (matrix[y][x] == 2) {
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

function draw() {
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("green");
			}
			else if (matrix[y][x] == 2) {
				fill("#ffad00");
			}
			else if (matrix[y][x] == 3) {
				fill("#c63535");
			}
			else if (matrix[y][x] == 4) {
				fill("black");
			}
			else if (matrix[y][x] == 5) {
				fill("#9a4b00");
			}
			else if (matrix[y][x] == 6) {
				fill("#9a4b00");
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
			}
			else if (matrix[y][x] == 23) {
				fill("#ccc");
			}
			else if (matrix[y][x] == 24) {
				fill("#303030");
			}
			else if (matrix[y][x] == 25) {
				fill("#acacac");
			}
			else if (matrix[y][x] == 7) {
				fill("#4b90ff")
			}
			else if (matrix[y][x] == 8) {
				fill("#88ebfd")
			}
			else if (matrix[y][x] == 9) {
				fill("#88ebfd")
			}
			else if (matrix[y][x] == 10) {
				fill("#ff884d")
			}
			else if (matrix[y][x] == 11) {
				fill("#ff4928")
			}
			else if (matrix[y][x] == 12) {
				fill("#480c00")
			}
			else if (matrix[y][x] == 13) { /// Al.
				fill("#005e00")
			}
			else if (matrix[y][x] == 14) { /// Al.Base
				fill("#003e00")
			}
			else if (matrix[y][x] == 15) { /// Al. Bone
				fill("#4b90ff")
			}
			else if (matrix[y][x] == 16) { /// Al.Tale
				fill("#001e00")
			}
			else if (matrix[y][x] == 17) { /// Al.Base Bone
				fill("#4b90ff")
			}
			else if (matrix[y][x] == 18) { /// secAl.
				fill("#5e0000")
			}
			else if (matrix[y][x] == 19) { /// secAl.Base
				fill("#3e0000")
			}
			else if (matrix[y][x] == 20) { /// secAl. Bone
				fill("#4b90ff")
			}
			else if (matrix[y][x] == 21) { /// secAl.Tale
				fill("#1e0000")
			}
			else if (matrix[y][x] == 22) { /// secAl.Base Bone
				fill("#1e0000")
			}
			else if (matrix[y][x] == 26) {
				fill("#303030")
			}
			else if (matrix[y][x] == 27) {
				fill("yellow")
			}
			else if (matrix[y][x] == 28) {
				fill("red")
			}
			rect(x * side, y * side, side, side);

		}


	}

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
	for (var i = 0; i <= 8; i++) {
		for (let i in bulletArr) {
			bulletArr[i].destroy();
		}
	}
	/*for (let i in pistolArr) {
		pistolArr[i].mul();
	}*/
	for (var i = 0; i <= 8; i++) {
		for (let i in craterArr) {
			craterArr[i].cr();
		}
	}
}
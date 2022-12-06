let socket = io();

const side = 23;

let matrix = [];      

var weath = 'spring';

    let grassCountElement
    let grassEatersCountElement
    let mushroomCountElement
    let creatorCountElement
    let fishsCountElement
    let caviarCountElement
    let predatorElement
    let bulletCountElement
    let craterCountElement

function setup() {
	frameRate(60);
    background('#acacac');
    noStroke();

    grassCountElement = document.getElementById('grassCount');
    grassEatersCountElement = document.getElementById('grassEatersCount');
    mushroomCountElement = document.getElementById('mushroomCount');
    creatorCountElement = document.getElementById('creatorCount');
    fishsCountElement = document.getElementById('fishsCount');
    caviarCountElement = document.getElementById('caviarCount');
    predatorCountElement = document.getElementById('predatorCount');
    bulletCountElement = document.getElementById('bulletCount');
    craterCountElement = document.getElementById('craterCount');
    socket.on("send info", draww)
    socket.on("weather", function (data) {
        weath = data;
    })
}

function draww(data){
	//console.log(data);
	matrix = data.matrix;
	createCanvas(matrix[0].length * side, matrix.length * side);

    matrix = data.matrix;
    grassCountElement.innerText = data.grassCounter;
    grassEatersCountElement.innerText = data.grassEatersCounter;
    mushroomCountElement.innerText = data.mushroomCounter;
    creatorCountElement.innerText = data.creatorCounter;
    fishsCountElement.innerText = data.fishsCounter;
    caviarCountElement.innerText = data.caviarCounter;
    predatorCountElement.innerText = data.predatorCounter;
    bulletCountElement.innerText = data.bulletCounter;
    craterCountElement.innerText = data.craterCounter;

    createCanvas(matrix[0].length * side, matrix.length * side);

    background('#acacac');
	for (let y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (weath == "winter") {
                    fill("#cce5ff")
                }
                else if (weath == "spring") {
                    fill("green")
                }
                else if (weath == "summer") {
                    fill("#4d9700");
                }
                else if (weath == "fall") {
                    fill("#db9700")
                }
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 2) {
                if (weath == "winter") {
                    fill("#ffad4b")
                }
                else if (weath == "spring") {
                    fill("#ffad00")
                }
                else if (weath == "summer") {
                    fill("#ff8500");
                }
                else if (weath == "fall") {
                    fill("#ffad00")
                }
                rect(x * side, y * side, side, side);
            }            
            else if (matrix[y][x] == 3) {
                fill("#c63535");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#9a4b00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#9a4b00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 23) {
                fill("#ccc");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 24) {
                fill("#303030");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 25) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 7) {
                if (weath == "winter") {
                    fill("#a7c5da")
                }
                else if (weath == "spring") {
                    fill("#4b90ff")
                }
                else if (weath == "summer") {
                    fill("#2567ff");
                }
                else if (weath == "fall") {
                    fill("#4bbcfd")
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill("#88ebfd")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                fill("#88ebfd")
                rect(x * side, y * side, side, side);
            }
            if (matrix[y][x] == 10) {
                if (weath == "winter") {
                    fill("#ffd4a3")
                }
                else {
                    fill("#ff884d")
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 11) {
                fill("#ff4928")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 12) {
                fill("#480c00")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 13) { /// Al.
                fill("#005e00")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 14) { /// Al. Base
                fill("#003e00")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 15) { /// Al. Bone
                fill("#4b90ff")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 16) { /// Al. Tale
                fill("#001e00")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 17) { /// Al. Base Bone
                fill("#4b90ff")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 18) { /// secAl.
                fill("#5e0000")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 19) { /// secAl. Base
                fill("#3e0000")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 20) { /// secAl. Bone
                fill("#4b90ff")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 21) { /// secAl. Tale
                fill("#1e0000")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 22) { /// secAl. Base Bone
                fill("#1e0000")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 26) {
                fill("#303030")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 27) {
                fill("yellow")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 28) {
                fill("red")
                rect(x * side, y * side, side, side);
            }
        }
    }
}
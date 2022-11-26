let socket = io();

const side = 23;

function mousePressed() {
	for (let i in pistolArr) {
		pistolArr[i].strike();
	}
}

function setup() {
	
	var weather = 'winter';

	// socket.on("weather", function (data) {
	// 	weather = data;
	// })
}

socket.on("send info", draww)

function draww(data){
	console.log(data);
	matrix = data.matrix;
	
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	noStroke();

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
}
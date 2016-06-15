$(function() {

	render(40);

	position(snake.position);

	$(document).keydown(keys);

	// let gameOver = false;
	// while (!gameOver) {
	// 	let i = 10;
	// while (i > 0 ) {

	// 	setTimeout(move, 1000);

	// 	setTimeout(headMove, 2000);

		turn();

		// gameOver = true;
	// 	i--;

	// }

});

function render(gridNum) {
	const container = $(".container");
	let i = 0;
	for ( ; i < gridNum; i++) {
		container.append("<div class='row'></div>");
	}
	const row = $(".row");
	i = 0;
	for ( ; i < gridNum; i++) {
		row.append("<div class='grid' /*tabindex='0'*/></div>");
	}
}

function keys(event) {
	if([37, 38, 39, 40].indexOf(event.which) > -1) {
		event.preventDefault();

		if (currentDirNum != event.which ) {
			switch (event.which) {
				case 37:
				currentDir = "l";
				break;
				case 38:
				currentDir = "u";
				break;
				case 39:
				currentDir = "r";
				break;
				case 40:
				currentDir = "d";
				break;
				default:
				break;
			}
			console.log(currentDir);
		}

	} else {
		console.log("Excuse me? " + event.which);
	}
}

let snake = {
	position: [[4, 20]],
	direction: "r"
};

let currentPos = snake.position;
let currentDir = snake.direction;

let currentDirNum;
switch (currentDir) {
	case "l":
	currentDirNum = 37;
	break;
	case "u":
	currentDirNum = 38;
	break;
	case "r":
	currentDirNum = 39;
	break;
	case "d":
	currentDirNum = 40;
	break;
	default:
	break;
}

let food = {
	position: [[Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1)]]
};

let cpx = currentPos[0][0];
let cpy = currentPos[0][1];
function turn() {
	let i = 0;
	if (i < 10) {
		setTimeout(function() {
			switch(snake.direction) {
				case "r":
				cpy = cpy + 1;
				break;
				default:
				break;
			}
			position([[cpx, cpy]]);
			i++
			turn();
		}, 2000);
	}
}

function move() {
	console.log("New turn");
}

function headMove() {
	let cpx = currentPos[0][0];
	let cpy = currentPos[0][1];
	switch(snake.direction) {
		case "l":
		cpy = cpy + 1;
		break;
		case "r":
		cpy = cpy + 1;
		break;
		case "u":
		cpx = cpx + 1;
		break;
		case "d":
		cpx = cpx + 1;
		break;
		default:
		break;
	}
	position([[cpx, cpy]]);
	// currentPos[0][1] = cpy;
	// currentPos[0][0] = cpx;
	// position(snake.position);
}

function eat() {
	console.log("Got you");
}

function position(posArray) {
	let i = 0;
	for ( ; i < posArray.length; i++) {
		const x = posArray[i][0];
		const y = posArray[i][1];
		$(".row").eq(x).find(".grid").eq(y).addClass("snake-body");
	}
	// $(".row:nth-child(" + x + ") .grid:nth-child(" + y + ")").addClass("test");
}

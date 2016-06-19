
$(function() {

	render(40);

	snakeDisplay(currentPos);
	foodDisplay(foodPos);

	move();

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

function gamePause(event) {
	if (enent.which === 32) {
		event.preventDefault();
		if(move().paused == true) {
			move().p
			console.log("Have a rest");
		}
	}
}

function directionControl(event) {
	if ([37, 38, 39, 40].indexOf(event.which) > -1) {
		event.preventDefault();
		let keyWhich;
		switch (event.which) {
			case 37:
			keyWhich = "l";
			break;
			case 38:
			keyWhich = "u";
			break;
			case 39:
			keyWhich = "r";
			break;
			case 40:
			keyWhich = "d";
			break;
			default:
			break;
		}

		if (currentDir != keyWhich ) {
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
		}
		console.log(currentDir);

	} else {
		console.log("Excuse me? " + event.which);
	}
}

let snake = {
	position: [[4, 20], [4, 18]],
	direction: "r"
};
let currentPos = snake.position;
let currentDir = snake.direction;

let food = {
	position: foodxy()
};
let foodPos = food.position;

let cpx = currentPos[0][0];
let cpy = currentPos[0][1];

function move() {
	if (cpy < 1 || cpy > 38 || cpx < 1 ||cpx > 38) {
		console.log("Game over ):");
		return;
	}

	let i = 1;
	for ( ; i < currentPos.length; i++) {
		let x = currentPos[i - 1];
		currentPos[i] = x;
	}
	console.log(currentPos[0] + "  " + currentPos[1]);

	switch (currentDir) {
		case "l":
		cpy = cpy - 1;
		break;
		case "r":
		cpy = cpy + 1;
		break;
		case "u":
		cpx = cpx - 1;
		break;
		case "d":
		cpx = cpx + 1;
		break;
		default:
		break;
	}

	currentPos[0][0] = cpx;
	currentPos[0][1] = cpy;
	console.log(currentPos[0] + "  " + currentPos[1]);
	if (cpx == foodPos[0] && cpy == foodPos[1]) {
		console.log("Got you");
		foodPos = foodxy();
		foodDisplay(foodPos);
		currentPos.push(currentPos[0]);
	}

	snakeDisplay(currentPos);
	$(document).keydown(directionControl);
	setTimeout(move, 400);
	console.log("New turn");
}

function foodxy() {
	return  [Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1)];
}

function foodDisplay(posArray) {
		$(".grid").removeClass("food");
		$(".row").eq(foodPos[0]).find(".grid").eq(foodPos[1]).addClass("food");
}

function snakeDisplay(posArray) {
	$(".grid").removeClass("snake-body");
	let i = 0;
	for ( ; i < posArray.length; i++) {
		const x = posArray[i][0];
		const y = posArray[i][1];
		$(".row").eq(x).find(".grid").eq(y).addClass("snake-body");
	//  $(".row:nth-child(" + x + ") .grid:nth-child(" + y + ")").addClass("test");
	}
}

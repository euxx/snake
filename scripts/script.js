
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

		const key = event.which;
		if (key === 37 && currentDir != "l") {
			currentDir = "l";
		} else if (key === 38 && currentDir != "u") {
			currentDir = "u";
		} else if (key === 39 && currentDir != "r") {
			currentDir = "r";
		} else if (key === 40 && currentDir != "d") {
			currentDir = "d";
		}
		console.log(currentDir);

	} else {
		console.log("Excuse me? " + event.which);
	}
}

let snake = {
	position: [[4, 20], [4,19], [4, 18]],
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

function foodxy() {
  const xy = [Math.floor(Math.random()*38) + 2, Math.floor(Math.random()*38) + 2]
	console.log("food  " + xy);
	return xy;
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

function move() {
	if (cpy < 1 || cpy > 39 || cpx < 1 ||cpx > 39) {
		console.log("Game over ):");
		return;
	}

	let lastPos = currentPos[currentPos.length - 1];
	lastPos = [lastPos[0], lastPos[1]];

	let i = currentPos.length;
	for ( ; i > 1; i--) {
		currentPos[i - 1][0] = currentPos[i - 2][0];
		currentPos[i - 1][1] = currentPos[i - 2][1];
	}

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
	if (cpx == foodPos[0] && cpy == foodPos[1]) {
		console.log("Got you");
		foodPos = foodxy();
		foodDisplay(foodPos);
		currentPos.push(lastPos);
	}

	snakeDisplay(currentPos);
	$(window).keydown(directionControl);
	setTimeout(move, 200);
}

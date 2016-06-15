
$(function() {

	render(40);

	positionDisplay(snake.position);

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

function keys(event) {
	if ([37, 38, 39, 40].indexOf(event.which) > -1) {
		event.preventDefault();

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
	position: [[4, 20]],
	direction: "r"
};

let currentPos = snake.position;
let currentDir = snake.direction;

let food = {
	position: [[Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1)]]
};
let foodPos = food.position;

let cpx = currentPos[0][0];
let cpy = currentPos[0][1];

function move() {
	if (cpy < 1 || cpy > 38 || cpx < 1 ||cpx > 38) {
		// positionDisplay([[cpx, cpy]]);
		alert("Game over ):");
		return;
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
	$(".grid").removeClass("snake-body");
	positionDisplay([[cpx, cpy]]);
	$(document).keydown(keys);
	setTimeout(move, 1000);
	console.log("New turn");
}

function eat() {
	console.log("Got you");
}

function positionDisplay(posArray) {
	let i = 0;
	for ( ; i < posArray.length; i++) {
		const x = posArray[i][0];
		const y = posArray[i][1];
		$(".row").eq(x).find(".grid").eq(y).addClass("snake-body");
	//  $(".row:nth-child(" + x + ") .grid:nth-child(" + y + ")").addClass("test");
	}
}

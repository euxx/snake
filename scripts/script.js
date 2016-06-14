
$(function() {

	render(40);
	position(snake.position);

	$(document).keydown(keys);

	let gameOver = false;
	while (!gameOver) {
		setTimeout(move, 1000);
		setTimeout(eat, 4000);
		gameOver = true;
	}

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

		switch (event.which) {
			case 37:
			snake.direction = "l";
			break;
			case 38:
			snake.direction = "u";
			break;
			case 39:
			snake.direction = "r";
			break;
			case 40:
			snake.direction = "d";
			break;
			default:
			console.log("Excuse me? " + event.which);
		}
		console.log(snake.direction);
	}
}

let snake = {
	position: [[4, 20]],
	direction: "r"
};

let currentPos = snake.position;

let food = {
	position: [[Math.floor(Math.random()*40 + 1), Math.floor(Math.random()*40 + 1)]]
};

function move() {
	console.log("New turn");
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

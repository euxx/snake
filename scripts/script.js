
$(function() {

	render(40);

	$(document).keydown(keys);

	setTimeout(move, 100);

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
	position: [20, 20],
	direction: "r"
};

let currentPos = [[20, 20]];

function move() {
	console.log("New turn");
}

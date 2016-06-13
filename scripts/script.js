$(function() {
	render(40);

	const grid = $(".grid");
	$(document).keydown(function(event) {
		switch (event.which) {
			case 37:
			event.preventDefault();
			snake.direction = "Left";
			console.log(snake.direction);
			break;
			case 38:
			event.preventDefault();
			snake.direction = "Up";
			console.log(snake.direction);
			break;
			case 39:
			event.preventDefault();
			snake.direction = "Right";
			console.log(snake.direction);
			break;
			case 40:
			event.preventDefault();
			snake.direction = "Down";
			console.log(snake.direction);
			break;
			default:
			console.log("Excuse me? " + event.which);
		}
	});
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

let snake = {
	position: [20, 20],
	direction: "r"
};

let currentPos = [[20, 20]];

function setTimeout(time) {

}

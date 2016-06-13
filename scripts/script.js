$(function() {
	render(40);

	const grid = $(".grid");
	$(document).keydown(function(event) {
		switch (event.which) {
			case 37:
			event.preventDefault();
			console.log("left");
			break;
			case 38:
			event.preventDefault();
			console.log("up");
			break;
			case 39:
			event.preventDefault();
			console.log("right");
			break;
			case 40:
			event.preventDefault();
			console.log("down");
			break;
			default:
			console.log("Excuse me");
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

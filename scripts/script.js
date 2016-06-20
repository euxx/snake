
$(function() {

	display();
	render(40);

	snakeDisplay(currentPos);
	foodDisplay(foodPos);

	move();

});

function move() {

	if (cpy < 1 || cpy > 39 || cpx < 1 ||cpx > 39) {
		console.log("Game over ):");
		return;
	}

	let i = currentPos.length;
	let tailPos = currentPos[i - 1];
	tailPos = [tailPos[0], tailPos[1]];

	for ( ; i > 0 ; i--) {
		let j = i - 1;
		for ( ; j > 0; j-- ) {
			if(currentPos[i - 1][0] === currentPos[j - 1][0] &&
				 currentPos[i - 1][1] === currentPos[j - 1][1]) {
				console.log("Game over ):");
				snakeDisplay(lastPos);
				return;
			}
		}

		if (i > 1) {
			currentPos[i - 1][0] = currentPos[i - 2][0];
			currentPos[i - 1][1] = currentPos[i - 2][1];
		}
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
		foodPos = foodxy();
		foodDisplay(foodPos);
		currentPos.push(tailPos);
		count++;
		score(count);
		console.log("Got you");
	}

	snakeDisplay(currentPos);
	$(window).keydown(directionControl);
	setTimeout(move, 200);
}

function display() {
	$(".container").append("<h4>Enjoy it^</h4>");
	$(".container").append("<p>Score: <span>0</span></p>");
}

let count = 0;
function score(count) {
	$("span").text(count);
}

function render(gridNum) {
	$(".container").append("<div class='box'></div>");
	const box = $(".box");
	let i = 0;
	for ( ; i < gridNum; i++) {
		box.append("<div class='row'></div>");
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
			console.log("Have a rest");
		}
	}
}

function directionControl(event) {
	if ([37, 38, 39, 40].indexOf(event.which) > -1) {
		event.preventDefault();

		const key = event.which;
		if (key === 37 && currentDir != "r") {
			currentDir = "l";
		} else if (key === 38 && currentDir != "d") {
			currentDir = "u";
		} else if (key === 39 && currentDir != "l") {
			currentDir = "r";
		} else if (key === 40 && currentDir != "u") {
			currentDir = "d";
		}
	} /*else {
		console.log("Excuse me? " + event.which);
	}*/
}

let snake = {
	position: [[4, 20], [4,19], [4, 18]],
	direction: "r"
};
let currentPos = snake.position;
let currentDir = snake.direction;
let cpx = currentPos[0][0];
let cpy = currentPos[0][1];

let food = {
	position: foodxy()
};
let foodPos = food.position;

function foodxy() {
  const xy = [Math.floor(Math.random()*38) + 2, Math.floor(Math.random()*38) + 2];
  let i = 0;
  const l = currentPos.length;
  for ( ; i < l; i++ ) {
  	if(currentPos[i][0] === xy[0] && currentPos[i][1] === xy[1]) {
  		foodxy();
  	}
  }
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

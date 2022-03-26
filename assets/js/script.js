// Variable

const gameSize = 600;
const squareSize = 20;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let currentDirection = 'right';

const snake = new Snake(squareSize);
const food = new Food();

// Functions

const detectKeyPressed = () => {
	document.addEventListener('keydown', (e) => {
		switch (e.key) {
			case 'ArrowLeft':
				currentDirection = 'left';
				break;
			case 'ArrowRight':
				currentDirection = 'right';
				break;
			case 'ArrowUp':
				currentDirection = 'up';
				break;
			case 'ArrowDown':
				currentDirection = 'down';
				break;
			default:
				break;
		}
	});
};
const clearScreen = () => {
	ctx.clearRect(0, 0, gameSize, gameSize);
};
const update = () => {
	clearScreen();
	food.draw();
	snake.update();
	if (snake.alive) setTimeout(update, 100);
};
const start = () => {
	detectKeyPressed();
	update();
};

start();

class Food {
	constructor() {
		this.size = squareSize;
		this.randomPosition();
	}
	randomPosition() {
		this.x = Math.floor((Math.random() * gameSize) % (gameSize / this.size));
		this.y = Math.floor((Math.random() * gameSize) % (gameSize / this.size));
	}
	draw() {
		ctx.fillStyle = '#66B2FF';
		ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
	}
}

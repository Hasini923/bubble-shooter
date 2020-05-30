var game;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ship = new Ship(width / 2, height / 2);
	scoreBoard = new ScoreBoard(width - 10, 20);
	game = new Game(ship, scoreBoard);
	game.reset();
	game.setDebug(true);
}

function draw() {
	if (game.isActive()) {
		background(255);
		
		game.createNewMeteor();
		
		game.updateAndDisplayMeteors();
		game.updateAndDisplayProjectiles();
		game.updateAndDisplayShip();
		
		game.displayScoreboard();
		
		game.removeLostProjectiles();
		
		game.detectSuccessfullShots();
		
		game.removeKilledBubbles();
		game.removeUsedProjectiles();
		
		game.stopIfBubblesHitGround();
		
		game.showDebugInfo();
	} else {
		game.showWelcomeScreen();
	}
}

function mouseClicked() {
	
	if (game.gameActive)
		game.shoot();

	else {
		game.reset();
		game.start();
	}
}
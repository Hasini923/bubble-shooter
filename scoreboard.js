function ScoreBoard(x,y) {
	
	this.x = x;
	this.y = y;
	
	this.score = 0;
	
	this.display = function() {
		noStroke();
		fill(0);
		textAlign(RIGHT);
		textFont("Courier new");
		textSize(22);
		text("score: " + this.score,this.x,this.y);
	};
	
	this.incrementScore = function() {
		this.score++;
	};
	
	this.reset = function() {
		this.score = 0;
	}
}
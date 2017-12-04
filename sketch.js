 var circleX=0;

function setup() {

	createCanvas(600, 400);
}

function draw() {
	background(250,180,200);

	fill(200,250,200);
	ellipse(circleX,200,80,80);
	circleX += 1;
	if(circleX === 599)
		circleX = 0;
}

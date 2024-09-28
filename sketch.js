let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 25); // Slightly transparent background for trail effect
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();
    if (circles[i].isFinished()) {
      circles.splice(i, 1); // Remove circle if finished
    }
  }
}

function mouseMoved() {
  circles.push(new Circle(mouseX, mouseY));
}

class Circle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.radius = random(5, 15);
    this.alpha = 255;
    this.lifespan = 100; // Frames before fading
  }
  
  update() {
    this.lifespan--;
    this.alpha = map(this.lifespan, 0, 100, 0, 255);
  }
  
  display() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
  
  isFinished() {
    return this.lifespan <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

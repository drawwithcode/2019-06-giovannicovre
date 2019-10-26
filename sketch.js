var x = 1;
var divCounter = 0;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(60);

  background(255, 20, 40);

  //text
  noStroke();
  fill("white");
  textFont("Work Sans");
  textSize(11);
  text("PRESS A KEY TO CHANGE COLOR",12,windowHeight-16);
}

function draw() {
  var counter = 0;
  var box;
  var boxSize = x * (frameCount ^ 2); //set box size

  if (windowWidth > windowHeight) {
    counter = windowWidth;
    if ((counter > boxSize) && (boxSize / (sqrt(2)) < windowHeight /2)) {
      box = createElement("div", ""); //create box
      box.class("a" + divCounter); //add class
      box.style("border", "1px solid black"); //box border
      box.style("z-index", frameCount); //put each box over the previous box
      box.position((windowWidth - boxSize) / 2, (windowHeight - boxSize) / 2); //center box
      box.size(boxSize, boxSize); //box size
      box.style("transform", "rotate(" + boxSize + "deg)"); //rotate box
      x = x * 1.001; //increase box size
      box.style("transition", "border 1s ease-out"); //smooth transition
      divCounter++;
    }

  } else {
    counter = windowHeight;
    if ((counter > boxSize) && (boxSize / (sqrt(2)) < windowWidth /2)) {
      box = createElement("div", ""); //create box
      box.class("a" + divCounter); //add class
      box.style("border", "1px solid black"); //box border
      box.style("z-index", frameCount); //put each box over the previous box
      box.position((windowWidth - boxSize) / 2, (windowHeight - boxSize) / 2); //center box
      box.size(boxSize, boxSize); //box size
      box.style("transform", "rotate(" + boxSize + "deg)"); //rotate box
      x = x * 1.001; //increase box size
      box.style("transition", "border 0.25s ease"); //smooth transition
      divCounter++;
    }
  }
}

function keyPressed() {
  for (var i = 0; i < divCounter; i++) {
    select(".a" + i).style("border", "1px solid white"); //change boxes color
  }
}

// window resized ---> restart animation
function windowResized() {
  for (var i = 0; i < divCounter; i++) {
    select(".a" + i).style("display", "none"); //hide old boxes
  }
  background(255, 20, 40);
  setup();
  frameCount = 0;
  draw();
}

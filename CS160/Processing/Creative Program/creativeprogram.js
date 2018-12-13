function setup() {
    createCanvas(1920,1000);
  }
  

  var timepassed = 50

  function draw() { //Constantly creates a circle 50 pixels large. When holding left click, size of circle increases by one every loop of the function.
    if(mouseIsPressed) {
        timepassed = timepassed + 1
        ellipse(mouseX, mouseY, timepassed, timepassed);
    } else {
        timepassed = 50
        ellipse(mouseX, mouseY, 50, 50);
    }
  }
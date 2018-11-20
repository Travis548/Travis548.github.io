function setup() {
    createCanvas(1920,1000);
}
  
  function draw() {
    background(255);    //Make background white
    fill(255, 204, 0);  //Fill following shape with yellow
      ellipse(1000,500,400,400); //Largest Circle
    fill(0);            //Fill the following shapes with color black.
      ellipse(900,425,50,50); //Left eye
      ellipse(1100,425,50,50);  //Right eye
      arc(1000,550,250,250,0,PI); //Creates bottom portion of mouth
      line(1120,550,890,550); // Closes off mouth, allows for fill
}
  
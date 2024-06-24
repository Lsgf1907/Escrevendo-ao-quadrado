function setup() {
    createCanvas(500,450)
    background("black");
  }
  
  function draw() {
    stroke("white");
    fill("green");
    //console.log(mouseIsPressed);
   
      if(mouseIsPressed)
      rect(mouseX, mouseY, 10, 10);
  }
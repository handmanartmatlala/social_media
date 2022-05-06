
let whats;
let scroll;

function setup() {
  createCanvas(windowWidth, windowHeight);
  whats = loadImage('whatsapp.png');
  scroll = loadImage('hand_scrolling.gif')
}

function draw() {
  background(220);
  
  //grass
 for (var x = 0; x < width; x = x + random(200, 200)) {
    image(whats, -50 + x, 100, 250, 600);
  }
  

    image(scroll, mouseX, mouseY);
  
}
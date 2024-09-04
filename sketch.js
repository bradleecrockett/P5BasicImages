// Project Title: P5 Basic Image Example
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Image credit www.rosevilletigers.org

let img;

// Load the image.
function preload() {
  img = loadImage('TigerPaw.png');
}

function setup() {
  createCanvas(600, 400);

  background(50);

  // Draw the image at (0, 0)
  image(img, 0, 0);

  // Redraw the paw in the center of the screen
  // image(img, ??, ??);

  // ReDraw the paw smaller (50, 50)
  // image(img, 300, 100, ??, ??);

  // Try to draw a paw image that follows the mouse
  

  // Try to move one paw with the arrow or wasd keys


  //Try to load your own image. Note that you generally what 
  // somewhat small images. Our canvas size is limited.


  describe('RHS Tiger Paw');
}
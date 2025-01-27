# P5 Basics Images

* First, we are going to read the P5 Images Documentation: https://p5js.org/reference/p5/image/ 

```javascript
//First load the image into a variable using preload
let img;
function preload() {
  img = loadImage('imageFilePath.png');
}

// basic usuage to display an image.
image(img, x, y, [width], [height])

// or more detailed usage
image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
```

| Parameters | Description |
| --- | --- |
`img` | p5.Image|p5.Element|p5.Texture|p5.Framebuffer|p5.FramebufferTexture: image` to display.
`x` | Number: x-coordinate of the top-left corner of the image.
`y` | Number: y-coordinate of the top-left corner of the image.
`width` | Number: width to draw the image.
`height` | Number: height to draw the image.
`dx` | Number: the x-coordinate of the destination rectangle in which to draw the source image
`dy` | Number: the y-coordinate of the destination rectangle in which to draw the source image
`dWidth` | Number: the width of the destination rectangle
`dHeight` | Number: the height of the destination rectangle
`sx` | Number: the x-coordinate of the subsection of the source image to draw into the destination rectangle
`sy` | Number: the y-coordinate of the subsection of the source image to draw into the destination rectangle
`sWidth` | Number: the width of the subsection of the source image to draw into `the destination rectangle
`sHeight` | Number: the height of the subsection of the source image to draw into the destination rectangle
`fit` | Constant: either CONTAIN or COVER
`xAlign` | Constant: either LEFT, RIGHT or CENTER default is CENTER
`yAlign` | Constant: either TOP, BOTTOM or CENTER default is CENTER


* Alternatively, you can watch a short video about working with P5JS Images. https://youtu.be/friYx8xdLOELinks

Now Open VS Code on your computer.

* Clone https://github.com/bradleecrockett/P5BasicImages.git 
* Follow the comments in `sketch.js` to create additional TigerPaws
* Finally, try adding a second new image. Remember that your images must be saved in the project's folder with all the other files.
* What can you create? 
* You need to have at least 2 different images and at least one should be animated (move).
* With some clever math, we can create a walking or attack animation by displaying different sections of the spritesheet.

Character Sprite sheet Credit: https://opengameart.org/content/a-platformer-in-the-forest 
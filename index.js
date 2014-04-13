function sierpinski (canvas, depth, rotation, color) {
  var height = canvas.height
    , width = canvas.width
    , size = canvas.height * 0.5
    , context = canvas.getContext("2d")
    ;

  if (!color) color = 'black'
  context.clearRect(0, 0, width, height);
  context.save()
  context.translate(width * 0.5, height * 0.6)
  context.scale(size, size)
  drawTriangle(depth)
  context.restore()

  function drawTriangle (depth) {
    var angle = -Math.PI / 2
    if (depth === 0) {
      context.beginPath()

      // move to top point of triangle
      context.moveTo(Math.cos(angle), Math.sin(angle))
      angle += Math.PI * 2 / 3

      // draw line to lower right point
      context.lineTo(Math.cos(angle), Math.sin(angle))

      // draw line to final point
      angle += Math.PI * 2 / 3;
      context.lineTo(Math.cos(angle), Math.sin(angle))

      // fill will close the shape
      if (color === 'random') {
        context.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
      } else {
        context.fillStyle = color
      }
      context.fill()
    } else {
      if (rotation) context.rotate(rotation)
      // draw the top triangle
      context.save()
      context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5)
      context.scale(0.5, 0.5)
      drawTriangle(depth - 1)
      context.restore()

      // draw the lower right triangle
      angle += Math.PI * 2 / 3
      context.save()
      context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5)
      context.scale(0.5, 0.5)
      drawTriangle(depth - 1)
      context.restore()

      // draw the lower left triangle
      angle += Math.PI * 2 / 3;
      context.save()
      context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5)
      context.scale(0.5, 0.5)
      drawTriangle(depth - 1)
      context.restore()
    }
  }
}

module.exports = sierpinski

if (process.browser) window.sierpinski = sierpinski

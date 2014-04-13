var keycode = require('keycode')

window.onload = init

function init() {
  var currentDepth = 0

  var canvas = document.getElementById("canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  function draw () {
    var color = document.getElementById("color").value || undefined
      , rotation = document.getElementById("rotation").value ||  undefined
      ;
    if (color && !isNaN(parseInt(color))) {
      color = parseInt(color)
    }
    if (rotation) rotation = parseInt(rotation)
    sierpinski(canvas, currentDepth, rotation, color)
    document.getElementById("depth").value = currentDepth.toString()
  }

  document.body.addEventListener("keyup", function (event) {
    if (event.target.nodeName === 'INPUT') return

    var key = keycode(event.keyCode)
    if (key === 'space') {
      draw()
      currentDepth = currentDepth + 1
    } else if (!isNaN(parseInt(key))) {
      currentDepth = parseInt(key)
      draw()
    }
  })

  document.getElementById("draw").onclick = function () {
    currentDepth = document.getElementById("depth").value || currentDepth
    draw()
  }

  var ctx = canvas.getContext("2d");
  ctx.font = "40px Helvetica";
  ctx.fillText("Hit space bar to iterate through sierpinski triangles.",10,300)
  ctx.fillText("Use number keys to set sierpinski depth.",10,350)
}

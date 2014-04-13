## sierpinski -- cause triangles!

![Sierpinski Triange](http://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Animated_construction_of_Sierpinski_Triangle.gif/250px-Animated_construction_of_Sierpinski_Triangle.gif)

```javascript
var sierpinski = require('sierpinski')
  , canvas = document.getElementById("canvas")
  ;
canvas.width = window.innerWidth
canvas.height = window.innerHeight
sierpinski(canvas, 4)
```

### sierpinski (canvas, depth[, rotation[, color]])

Draws a sierpinski triangle in the given canvas element with the requested depth. Optionally can add rotation and color.

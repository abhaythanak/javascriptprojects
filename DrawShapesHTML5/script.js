const Canvas = document.getElementById("canvas1")
const ctx = Canvas.getContext("2d")
Canvas.height = window.innerHeight;
Canvas.width = window.innerWidth;

// add insight the function
// ctx.beginPath();
// ctx.moveTo(Canvas.width/2, Canvas.height/2);
// ctx.lineTo(50,50);
// ctx.closePath();
// ctx.stroke();

function drawShape(radius) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(Canvas.width/2,Canvas.height/2);
  ctx.moveTo(0,0);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  ctx.rotate(Math.PI / 3);
  ctx.lineTo(0,0 - radius);
  
  ctx.restore()
  ctx.closePath();
  ctx.stroke();

}
drawShape(100)
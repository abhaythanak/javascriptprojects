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

function drawShape() {
    ctx.beginPath();
    ctx.moveTo(50,200);
    ctx.lineTo(450,150);
    ctx.closePath();
    ctx.stroke();
}
drawShape()
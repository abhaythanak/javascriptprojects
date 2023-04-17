const Canvas = document.getElementById("canvas1")
const ctx = Canvas.getContext("2d")
Canvas.height = window.innerHeight;
Canvas.width = window.innerWidth;

//coloring
ctx.fillStyle = 'red';
ctx.lineWidth = 10;

// add insight the function
// ctx.beginPath();
// ctx.moveTo(Canvas.width/2, Canvas.height/2);
// ctx.lineTo(50,50);
// ctx.closePath();
// ctx.stroke();

//hexagonal shaPE
// function drawShape(radius) {
//   ctx.beginPath();
//   ctx.save();
//   ctx.translate(Canvas.width/2,Canvas.height/2);
//   ctx.moveTo(0,0);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0,0 - radius);
  
//   ctx.restore()
//   ctx.closePath();
//   ctx.stroke();

// }
//drawShape(100)

//STAr SHAPe
// function drawShape(radius, inset,n) {
//     ctx.beginPath();
//     ctx.save();
//     ctx.translate(Canvas.width/2,Canvas.height/2);
//     ctx.moveTo(0,0);

//     for (let i=0; i< n ; i++){
//         ctx.lineTo(0,0 - radius);
//     ctx.rotate(Math.PI / n);
//     ctx.lineTo(0,0 - (radius * inset));
//     ctx.rotate(Math.PI / n);
//     }

    


    
//     ctx.restore()
//    // ctx.closePath();
//     ctx.stroke();
//     ctx.fill(); // coloring
  
//   }
// drawShape(100, 0.5, 5) //1 change size big and small 2) shape changing 3) radius multi connecton on circle many attach line

//adding eventListener  

function drawShape(x,y,radius, inset,n) {
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0,0);

    for (let i=0; i< n ; i++){
        ctx.lineTo(0,0 - radius);
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0,0 - (radius * inset));
    ctx.rotate(Math.PI / n);
    }

    


    
    ctx.restore()
   // ctx.closePath();
    ctx.stroke();
    ctx.fill(); // coloring
  
  }

//   drawShape(100, 0.5, 5)

window.addEventListener('mousemove', function(e){
    drawShape(e.x, e.y, 150 ,0.5, 7)
})
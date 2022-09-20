canvas=document.getElementById("myCanvas");
colour="red";
ctx=canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.(200, 100, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(200, 200, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(100, 200, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(300, 200, 40, 0 , 2 * Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(200, 100, 40, 0 , 2 * Math.PI);
ctx.stroke(); 
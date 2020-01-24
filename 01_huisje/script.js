// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
context.beginPath()
context.lineWidth = 7;
context.moveTo(300,500);
context.lineTo(300,900);
context.lineTo(900,900);
context.lineTo(900,500);
context.closePath();
context.stroke();
context.fillStyle = "#8E5335";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(900,500);
context.lineTo(900,900);
context.lineTo(1100,800);
context.lineTo(1100,400);
context.closePath();
context.stroke();
context.fillStyle = "#8E5335";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(300,500)
context.lineTo(600,200)
context.lineTo(900,500)
context.closePath();
context.stroke();
context.fillStyle = "#744331";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(600,200);
context.lineTo(900,500);
context.lineTo(1100,400);
context.lineTo(800,100);
context.closePath();
context.stroke();
context.fillStyle = "#744331";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(600,900);
context.lineTo(600,700);
context.lineTo(700,700);
context.lineTo(700,900);
context.closePath();
context.stroke();
context.fillStyle = "#77594D";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(670,800);
context.lineTo(670,800);
context.lineTo(680,810);
context.lineTo(680,800);
context.closePath();
context.stroke();
context.fillStyle = "#F2F2E9";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(620,720);
context.lineTo(620,765);
context.lineTo(680,765);
context.lineTo(680,720);
context.closePath();
context.stroke();
context.fillStyle = "#B3DBDE";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(340,700);
context.lineTo(340,800);
context.lineTo(560,800);
context.lineTo(560,700);
context.closePath();
context.stroke();
context.fillStyle = "#B7DDDF";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(740,700);
context.lineTo(740,800);
context.lineTo(860,800);
context.lineTo(860,700);
context.closePath();
context.stroke();
context.fillStyle = "#B7DDDF";
context.fill();

context.beginPath()
context.lineWidth = 7;
context.moveTo(920,695);
context.lineTo(920,795);
context.lineTo(1090,700);
context.lineTo(1090,600);
context.closePath();
context.stroke();
context.fillStyle = "#B7DDDF";
context.fill();


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
context.lineWidth = 5;
context.moveTo(300,400);
context.lineTo(300,800);
context.moveTo(300,800);
context.lineTo(1200,800);
context.closePath();
context.stroke();

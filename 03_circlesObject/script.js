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
console.log(getRandomNumber(200));

function getRandomNumber(max){
    return Math.floor(Math.random()*max);
}

let colors = ["red","green","blue","orange","yellow","purple"]

function drawCircle(){ 
    context.beginPath()
    context.lineWidth = "10";
    context.strokeStyle = colors[getRandomNumber(colors.length)]; 
    context.fillStyle = colors[getRandomNumber(colors.length)]; 
    context.arc(getRandomNumber(width),getRandomNumber(height),20,0,Math.PI*2);
    context.stroke(); 
    context.fill(); 
    context.closePath(); 
} 

for(let i = 0; i<100;i++){ 
    drawCircle(); 
} 

function animate(){
    drawCircle();
}

setInterval(animate,0.5)

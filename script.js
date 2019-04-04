const color1=document.querySelector(".color1");
const color2=document.querySelector(".color2");
const body=document.getElementById('gradient');
const gradient=document.querySelector("h3");
const buttonRandom=document.getElementById("randomColor");
const buttonPrevious=document.getElementById("previous-color");

let colorBack=[];

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let randomColor1 = '#';
  let randomColor2='#';
  
  for (let i = 0; i < 6; i++) {
    randomColor1 += letters[Math.floor(Math.random() * 16)];
  	randomColor2 += letters[Math.floor(Math.random() * 16)];
  }
  	color1.value=randomColor1;
  	color2.value=randomColor2;
    colorBack.push(color1.value,color2.value);
    console.log(colorBack);
    body.style.background = "linear-gradient(to right, "+randomColor1+","+randomColor2+")";
	  gradient.textContent=body.style.background;
  
};

function previousColor(){
    
    let previous=colorBack.splice(-2,2);
    console.log(previous[0],previous[1]);
    body.style.background = `linear-gradient(to right,${previous[0]},${previous[1]})`; 
    gradient.textContent=body.style.background;
    
};
   
    
    
buttonPrevious.addEventListener('click',previousColor);
buttonRandom.addEventListener("click",getRandomColor);

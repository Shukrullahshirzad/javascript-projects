const body = document.querySelector('#body');
const color = document.querySelector('#color');
const button = document.querySelector('#btn');
const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E',
'F'];
button.addEventListener("click", (e)=>{
    let genColor = '#';
    for(let i = 0; i < 6; i++){
        genColor += colors[getRandomNumber()];
    }
    body.style.backgroundColor = genColor;
    color.textContent = genColor;
    
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}

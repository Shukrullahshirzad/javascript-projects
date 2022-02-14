const body = document.querySelector('#body');
const color = document.querySelector('#color');
const button = document.querySelector('#btn');
const colors = ['red','green', 'blue', 'black', 'yellow', 'purple'];
button.addEventListener("click", (e)=>{
    const randomNumber = getRandomNumber();
    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}

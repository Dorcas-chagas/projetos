const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn (){
    lamp.src = './img/ybxlO.jpg';
}

function lampOff (){
    lamp.src = './img/b983w.jpg';
}

function lampBroke (){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampBroke.addEventListener('click', lampBroken)
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lampBroke.addEventListener('click', lampBroken);

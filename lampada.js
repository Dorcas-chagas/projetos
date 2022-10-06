const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById ('lamp');


function isLampBroke () {
    return lamp.src.indexOf ( 'quebrada' ) > -1;
}

function lampOn (){
    if (!isLampBroke () ) {
        lamp.src = './img/ybxlO.jpg';
    }
}

function lampOff () {
    if (!isLampBroke () ) {
        lamp.src = './img/b983w.jpg';
    }
}

function lampBroke (){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroke);


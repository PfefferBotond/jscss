import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'

import './main.css';

let szinek = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
    'black',
];
let aktualisszin = 0;

function szinvaltas(){
    aktualisszin = aktualisszin +1;
    if (aktualisszin >= szinek.length){
        aktualisszin = 0;
    }
    document.body.style.backgroundColor = szinek[aktualisszin];
}


function init(){
    document.getElementById('szinvaltas').addEventListener('click', szinvaltas)
}

document,addEventListener('DOMContentLoaded', init);

console.log('Loaded')


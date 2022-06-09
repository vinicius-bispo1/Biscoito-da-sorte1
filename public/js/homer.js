
let divSortes = document.querySelector('.card-body');

let button = document.querySelector('.btn');

button.addEventListener('click', sortesAleatoria);


function sortesAleatoria() {


    let i = Math.floor(Math.random() * (359 - 0 + 1) + 0)
    
    divSortes.textContent = sortes[i];

};
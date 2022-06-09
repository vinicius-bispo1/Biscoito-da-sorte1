
let divSortes = document.querySelector('.card-body');

let button = document.querySelector('.btn');

button.addEventListener('click', sortesAleatoria);


function sortesAleatoria() {


    let i = Math.round(Math.random() * 5);
    
    divSortes.textContent = sortes[i];

};
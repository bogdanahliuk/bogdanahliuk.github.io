const button = document.getElementById('change_btn');
let titles = document.getElementsByTagName('h2');
let paragraphs = document.getElementsByTagName('p');
let cells = document.getElementsByTagName('td');

button.addEventListener('click', () => {
    for(let i = 6; i < 9; i++){
        cells[i].innerHTML = '';
        cells[i].appendChild(document.getElementById(i));
    }
    for(let i = 0; i < 3; i++){
        cells[i].innerHTML = '';
        cells[i].appendChild(document.getElementById(i));
    }
})
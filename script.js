const input = document.getElementById('text');
const square = document.getElementById('square');
const button = document.getElementById('btn');
const circle = document.getElementById('circle');
const buttonInSqure = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');

const changedColor = function(){
    square.style.backgroundColor = input.value;
}
button.addEventListener('click', changedColor);


buttonInSqure.style.display = 'none';

const spanAndCircle = function(){
    span.textContent = range.value + '%';
    circle.style.height = `${range.value}px`;
    circle.style.width = `${range.value}px`;
}

spanAndCircle();
range.addEventListener('click', spanAndCircle);

console.dir(buttonInSqure);
console.log(typeof(circle.style.width));
console.dir(range);
console.dir(circle);
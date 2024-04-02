// Modify the menu styles
const menu = document.querySelector('.btn-group-vertical');
menu.classList.remove('btn-group-vertical');

// Modify the header styles
const header = document.querySelector('.jumbotron');
header.classList.add('text-right');
header.classList.add('bg-secondary');
header.classList.add('text-white');
headerButton = header.querySelector('.btn');
headerButton.classList.replace('btn-primary', 'btn-success');

// Modify the cards
const cards = document.querySelectorAll('.col-lg-3');
var second = cards[1];
var last = cards[3];
cards.forEach((card, index) => {
  if (index === 1 || index === 3) {
    card.parentNode.removeChild(card);
  }
});
cards.forEach((card, index) => {
  if (index === 0) {
    card.parentNode.appendChild(second);
  }
  if (index === 0) {
    card.parentNode.insertBefore(last, card);
  }
});

// Modify button card
const buttons = document.querySelectorAll('.card-body .btn');
buttons[1].classList.replace('btn-primary', 'btn-success');

// Modify the list items
const list = document.querySelector('.list-group');
let newItens = ['Quarto item', 'Quinto item'].map((item) => {
  const newLi = document.createElement('li');
  newLi.className = 'list-group-item';
  newLi.innerHTML = item;
  return newLi;
});
const itensList = document.querySelectorAll('.list-group-item');
const newList = [...itensList, ...newItens];
newList[0].classList.remove('active');
newList[3].classList.add('active');
list.innerHTML = newList.map((item) => item.outerHTML).join('');

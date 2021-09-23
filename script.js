'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//will only show the first of the group
//const btnsOpenModal = document.querySelector('.show-modal');

//working with classes
//this will show ALL of the buttons
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//only the first of the group of elements will get selelcted
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Handling "ESC" keypress

document.addEventListener('keydown', function (event) {
  //console.log('a key was pressed');

  if (event.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});

'use strict';
// we can add and remove classes using classlist property
// we can also see that the class present or not using contains(classname)
const openModalBtn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i =0;i<openModalBtn.length;i++){
    openModalBtn[i].addEventListener('click', openModal);
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

/*
 there is the  three type of the keyboard event
 1. keypress
 2. keydown
 3. keyup
 */
document.addEventListener('keydown', function(e){
    console.log('which event happened');
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        modal.classList.add('hidden');
    }
});

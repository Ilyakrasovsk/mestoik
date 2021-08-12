let editButton = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__cross');
let pop =  document.querySelector('.popup');
let nameInput = document.querySelector('#name');
let profInput = document.querySelector('#prof');



editButton.addEventListener('click', function() {
  pop.classList.add('popup_open');
  nameInput.value = document.querySelector('.profile__name').innerHTML;
  profInput.value = document.querySelector('.profile__prof').innerHTML;
});
close.addEventListener('click', function() {
  pop.classList.remove('popup_open');
});


let formElement = document.querySelector('.popup');
function formSubmitHandler (evt) {
	evt.preventDefault();

	 document.querySelector('.profile__name').textContent = nameInput.value;
	 document.querySelector('.profile__prof').textContent = profInput.value;
   pop.classList.remove('popup_open');
}

formElement.addEventListener('submit', formSubmitHandler);

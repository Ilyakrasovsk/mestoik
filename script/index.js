let editButton = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__cross');
let pop =  document.querySelector('.popup');
let nameInput = document.querySelector('#name');
let profInput = document.querySelector('#prof');
let profileName = document.querySelector('.profile__name');
let profileProf = document.querySelector('.profile__prof');

function openPopup() {
  pop.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
}
function closePopup () {
  pop.classList.remove('popup_open');
}
editButton.addEventListener('click', openPopup);
close.addEventListener('click',closePopup);

let formElement = document.querySelector('.popup__container');
function formSubmitHandler (evt) {
	evt.preventDefault();

	 profileName.textContent = nameInput.value;
	 profileProf.textContent = profInput.value;

   closePopup ();
}

formElement.addEventListener('submit', formSubmitHandler);

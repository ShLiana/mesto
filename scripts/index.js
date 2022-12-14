let popupOpened = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
let nameInput = document.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input_type_job"); // Воспользуйтесь инструментом .querySelector()
let editProfile = document.querySelector(".profile__editButton"); //редактировать профиль - нажимаем на ручку
let userName = document.querySelector(".profile__userName");
let userJob = document.querySelector(".profile__userJob");
let popupClose = document.querySelector(".popup__cross");

//добавим функцию, ктр добавляет селектор, чтобы показать попап
function openPopup() {
  popupOpened.classList.add("popup_opened");
  nameInput.value = userName.textContent; //чтобы в полях имя/работа были базовые имена
  jobInput.value = userJob.textContent;
}
editProfile.addEventListener("click", openPopup); 
//добавим функцию, ктр добавляет селектор, чтобы скрыть попап
function closePopup() {
  popupOpened.classList.remove("popup_opened");
}
popupClose.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  userJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);

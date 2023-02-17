import { Card } from "./Card.js";
import { initialCards } from "./initialcards.js";
import { FormValidator } from "./FormValidator.js";

import {
  profileSection,
  popupProfileOpenButton,
  addCardButton,
  profileUserName,
  profileUserJob,
  popupProfile,
  formProfileElement,
  profileNameInput,
  profileJobInput,
  cardsContainer,
  popupZoom,
  popupZoomImage,
  popupZoomTitle,
  popupAddCard,
  popupCreateCard,
  placeNameInput,
  placeLinkInput,
  validationConfig,
} from "./constants.js";

//общая функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closePopupByEsc);
}

//общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closePopupByEsc); //удаляем обработчик Escape
}

//Функция закрытия попапа по нажатию на кнопку "ESC"
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const forOpenPopupByEsc = document.querySelector(".popup_opened");
    closePopup(forOpenPopupByEsc);
  }
}

const popupList = Array.from(document.querySelectorAll(".popup"));
// Функция закрытия открытого popup по клику по оверлау - Отдельные обработчики для крестиков не нужны, здесь универсально объединены обработчики оверлея и крестиков
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__cross")) {
      closePopup(popup);
    }
  });
});

//открыть попап профиля, тут же данные о пользователе
popupProfileOpenButton.addEventListener("click", () => {
  profileNameInput.value = profileUserName.textContent; // Получите значение полей jobInput и nameInput из свойства value
  profileJobInput.value = profileUserJob.textContent;
  openPopup(popupProfile);
});

//добавить имя и работу нового пользователя через submit
function addNewUserInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileUserName.textContent = profileNameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  profileUserJob.textContent = profileJobInput.value;
  closePopup(popupProfile);
}
formProfileElement.addEventListener("submit", addNewUserInfo);

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  cardsContainer.prepend(createCard(newCard));
  closePopup(popupAddCard);
  placeNameInput.value = "";
  placeLinkInput.value = "";
  newCardFormValidator.resetValidation();//методы класса FormValidator активируют/деактивируют кнопку сабмита и очищать ошибки в index.js
}
popupCreateCard.addEventListener("submit", addNewCard);

//открыть попап добавления новых карточек
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//create Card
function createCard(item) {
  const card = new Card(item, ".card-template", (name, link) => {
    popupZoomImage.src = link;
    popupZoomImage.alt = name;
    popupZoomTitle.textContent = name;
    openPopup(popupZoom);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

//render Card
const renderCard = (item) => {
  const cardElement = createCard(item);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(renderCard);

//поиск форм по уникальным классам
const editProfileForm = document.querySelector(".editProfileForm");
const newCardForm = document.querySelector(".newCardForm");

//создать экземпляр класса FormValidator
const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm);
const newCardFormValidator = new FormValidator(validationConfig, newCardForm);

editProfileFormValidator.enableValidation();
newCardFormValidator.enableValidation();



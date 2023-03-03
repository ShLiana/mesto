import { Card } from "../../src/scripts/components/Card.js";
import { initialCards } from "../../src/scripts/initialCards.js";
import { FormValidator } from "../../src/scripts/components/FormValidator.js";
import { Section } from "../../src/scripts/components/Section.js";
import { PopupWithForm } from "../../src/scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../../src/scripts/components/PopupWithImage.js";
import { UserInfo } from "../../src/scripts/components/UserInfo.js";
import "../pages/index.css";

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
} from "../../src/scripts/utils/constants.js";

const zoomPopupImage = new PopupWithImage(".zoomPopup");
zoomPopupImage.setEventListeners();

//функция, ктр заносит информацию в инпуты профиля
function addUserInfoPopupForm({ userName, userJob }) {
  profileNameInput.value = userName; // Получите значение полей jobInput и nameInput из свойства value
  profileJobInput.value = userJob;
}

const userInfo = new UserInfo({
  userName: ".profile__user-name",
  userJob: ".profile__user-job",
});

//создание попапа редактирования профиля
const editProfilePopupForm = new PopupWithForm({
  popupSelector: ".profilePopup",
  handleFormSubmit: (item) => {
    userInfo.setUserInfo({
      name: item["addName"], // в html name="addName"
      job: item["addJob"],
    });
    editProfilePopupForm.close();
  },
});
editProfilePopupForm.setEventListeners();

//открыть попап профиля, тут же данные о пользователе
popupProfileOpenButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  addUserInfoPopupForm({
    userName: info.userName,
    userJob: info.userJob,
  });
  editProfilePopupForm.open();
});

//функция, ктр заносит информацию в инпуты профиля
function addNewCard({ newCardName, newCardLink }) {
  newCardName = placeNameInput.value;
  newCardLink = placeLinkInput.value;
}

//создание попапа добавления новых карточек
const addCardPopupForm = new PopupWithForm({
  popupSelector: ".addCardPopup",
  handleFormSubmit: (item) => {
    const newCard = createCard({
      name: item["placeNameInput"],
      link: item["placeLinkInput"],
    });
    cardList.addItem(newCard);
    addCardPopupForm.close();
  },
});
addCardPopupForm.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  addCardPopupForm.open();
});

//создание новой карточки
function createCard(item) {
  const card = new Card(item, ".card-template", (name, link) => {
    popupZoomImage.src = link;
    popupZoomImage.alt = name;
    popupZoomTitle.textContent = name;
    zoomPopupImage.open(item);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".gallery__list"
);
cardList.renderItems();

//поиск форм по уникальным классам
const editProfileForm = document.querySelector(".editProfileForm");
const newCardForm = document.querySelector(".newCardForm");

//создать экземпляр класса FormValidator
const editProfileFormValidator = new FormValidator(
  validationConfig,
  editProfileForm
);
const newCardFormValidator = new FormValidator(validationConfig, newCardForm);

editProfileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

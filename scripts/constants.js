const profileSection = document.querySelector(".profile"); //ищет секцию профиль
const popupProfileOpenButton = profileSection.querySelector(".profile__edit-button"); //редактировать профиль - нажимаем на ручку (profile__edit-button)
const addCardButton = profileSection.querySelector(".profile__add-button"); //кнопка добавления карточек (+)
const userName = profileSection.querySelector(".profile__user-name"); //вытащим имя пользователя, ктр уже забито в профиле
const userJob = profileSection.querySelector(".profile__user-job");
const popupProfile = document.querySelector(".profilePopup"); //ищем профиль по уникальному классу profilePopup
const formProfileElement = popupProfile.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name"); //введенное имя
const jobInput = document.querySelector(".popup__input_type_job");

const cardsContainer = document.querySelector(".gallery__list"); //добавить переменную-контейнер cardsContainer, в этот контейнер будут помещаться карточки

const popupZoom = document.querySelector(".zoomPopup"); //ищем попап Zoom по уникальному классу zoomPopup
const popupZoomImage = popupZoom.querySelector(".zoomPopup__photo-cards-img"); // фото в большом масштабе
const popupZoomTitle = popupZoom.querySelector(".zoomPopup__photo-cards-text");


const popupAddCard = document.querySelector(".addCardPopup"); //ищем попап добавления карточек по уникальному классу addCardsOpen
const popupCreateCard = popupAddCard.querySelector(".popup__content"); //кнопка "создать"
const placeNameInput = popupAddCard.querySelector(".popup__input_type_title");
const placeLinkInput = popupAddCard.querySelector(".popup__input_type_link");

const submitForAddCard = popupAddCard.querySelector(".popup__save-button");
const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_visible",
  };

export {
profileSection,
popupProfileOpenButton,
addCardButton,
userName,
userJob,
popupProfile,
formProfileElement,
nameInput,
jobInput,
cardsContainer,
popupZoom,
popupZoomImage,
popupZoomTitle,
popupAddCard,
popupCreateCard,
placeNameInput,
placeLinkInput,
submitForAddCard,
validationConfig,
}
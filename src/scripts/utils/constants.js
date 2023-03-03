//popup profile
const profileSection = document.querySelector(".profile"); //ищет секцию профиль
const profileUserName = profileSection.querySelector(".profile__user-name"); //вытащим имя пользователя, ктр уже забито в профиле
const profileUserJob = profileSection.querySelector(".profile__user-job");
const popupProfile = document.querySelector(".profilePopup"); //ищем профиль по уникальному классу profilePopup
const formProfileElement = popupProfile.querySelector(".popup__form");
const profileNameInput = document.querySelector(".popup__input_type_name"); //введенное имя
const profileJobInput = document.querySelector(".popup__input_type_job");

//popup zoom
const popupZoom = document.querySelector(".zoomPopup"); //ищем попап Zoom по уникальному классу zoomPopup
const popupZoomImage = popupZoom.querySelector(".zoomPopup__photo-cards-img"); // фото в большом масштабе
const popupZoomTitle = popupZoom.querySelector(".zoomPopup__photo-cards-text");

//popup addCard
const popupAddCard = document.querySelector(".addCardPopup"); //ищем попап добавления карточек по уникальному классу addCardsOpen
const popupCreateCard = popupAddCard.querySelector(".newCardForm"); //форма создания новой карточки
const placeNameInput = popupAddCard.querySelector(".popup__input_type_title");
const placeLinkInput = popupAddCard.querySelector(".popup__input_type_link");

//buttons
const popupProfileOpenButton = profileSection.querySelector(".profile__edit-button"); //редактировать профиль - нажимаем на ручку (profile__edit-button)
const addCardButton = profileSection.querySelector(".profile__add-button"); //кнопка добавления карточек (+)

const cardsContainer = document.querySelector(".gallery__list"); //добавить переменную-контейнер cardsContainer, в этот контейнер будут помещаться карточки

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
} 
const profileSection = document.querySelector(".profile"); //ищет секцию профиль
const popupProfileOpenButton = profileSection.querySelector(".profile__edit-button"); //редактировать профиль - нажимаем на ручку (profile__edit-button)
const addCardButton = profileSection.querySelector(".profile__add-button"); //кнопка добавления карточек (+)
const userName = profileSection.querySelector(".profile__user-name"); //вытащим имя пользователя, ктр уже забито в профиле
const userJob = profileSection.querySelector(".profile__user-job");
const popupProfile = document.querySelector(".profilePopup"); //ищем профиль по уникальному классу profilePopup
const formProfileElement = popupProfile.querySelector(".popup__form"); 
const nameInput = document.querySelector(".popup__input_type_name"); //введенное имя
const jobInput = document.querySelector(".popup__input_type_job");
const profileCloseButton = popupProfile.querySelector(".popup__cross"); //закрыть попап профиля

const cardsTemplate = document.querySelector(".card-template").content; //добавить переменной cardsTemplate значение с классом card-template
const cardsContainer = document.querySelector(".gallery__list"); //добавить переменную-контейнер cardsContainer, в этот контейнер будут помещаться карточки 

const popupZoom = document.querySelector(".zoomPopup"); //ищем попап Zoom по уникальному классу zoomPopup
const popupZoomImage = popupZoom.querySelector(".zoomPopup__photo-cards-img"); // фото в большом масштабе
const popupZoomTitle = popupZoom.querySelector(".zoomPopup__photo-cards-text");
const zoomCloseButton = popupZoom.querySelector(".popup__cross"); // кнопка закрытия попапа zoom

const popupAddCard = document.querySelector(".addCardPopup"); //ищем попап добавления карточек по уникальному классу addCardsOpen 
const popupCreateCard = popupAddCard.querySelector(".popup__content"); //кнопка "создать"
const placeNameInput = popupAddCard.querySelector(".popup__input_type_title"); 
const placeLinkInput = popupAddCard.querySelector(".popup__input_type_link");
const addCardCloseButton = popupAddCard.querySelector(".addCardClose"); //закрываем попап addCardPopup,нажимая на х  

const submitForAddCard = popupAddCard.querySelector('.popup__save-button'); 

//закрытие попапа по оверлау
const popupList = Array.from(document.querySelectorAll('.popup'));
// Функция закрытия открытого popup по клику
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    console.log(evt);
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__cross')) {
        closePopup(popup)
      }
  })
})

//общая функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', closePopupByEsc);
}

//общая функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', closePopupByEsc);
}

//Функция закрытия попапа по нажатию на кнопку "ESC"
function closePopupByEsc(event) {
  if (event.key === 'Escape') {
    const forOpenPopupByEsc = document.querySelector('.popup_opened');
    closePopup(forOpenPopupByEsc);
   }
} 

//создать базовые карточки
function createCard(item) {
  const card = cardsTemplate.querySelector(".card").cloneNode(true); //клонировать темплейт, пч это шаблон
  const likeCard = card.querySelector(".card__like");
  const deleteCard = card.querySelector(".card__delete");
  const zoomButton = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title"); 
  const cardImage = card.querySelector(".card__image");
  
  //присвоить карточкам на странице подписи и ссылки из template
  cardImage.alt = item.name;
  cardImage.src = item.link;
  cardTitle.textContent = item.name;
 
  //добавить лайк карточке по клику на likeCard
  likeCard.addEventListener("click", (evt) => {evt.target.classList.toggle("card__like_active")});
  //удалить карточку по клину на deleteCard
  deleteCard.addEventListener("click", (evt) => {evt.target.closest(".card").remove()}); 
  
  //открыть карточки в Zoom
  zoomButton.addEventListener("click", () => {
    popupZoomImage.src = item.link;
    popupZoomImage.alt = item.name;
    popupZoomTitle.textContent = item.name;
    openPopup(popupZoom);
  });
  return card;
};

//создать новый массив из исходного 
initialCards.map(function (item) {
  cardsContainer.append(createCard(item))
}); 

//открыть попап профиля, тут же данные о пользователе
popupProfileOpenButton.addEventListener("click", () => {
  nameInput.value = userName.textContent; // Получите значение полей jobInput и nameInput из свойства value
  jobInput.value = userJob.textContent;
  openPopup (popupProfile);
}); 

//добавить имя и работу нового пользователя через submit
function addNewUserInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  userJob.textContent = jobInput.value;
  closePopup(popupProfile);
};
formProfileElement.addEventListener("submit", addNewUserInfo);

function addNewCard (evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  cardsContainer.prepend(createCard(newCard));
  closePopup(popupAddCard);
  placeNameInput.value = "";
  placeLinkInput.value = "";
  submitForAddCard.classList.add('popup__save-button_disabled'); //добавим неактивный класс кнопке "добавить", если инпуты не заполнены
  submitForAddCard.disabled = true; //сделать кнопку "добавить" неактивной
};
popupCreateCard.addEventListener("submit", addNewCard);

//открыть попап добавления новых карточек
addCardButton.addEventListener("click", () => {
  openPopup (popupAddCard);
}); 

//закрыть попап профиля
profileCloseButton.addEventListener("click", () => {
  closePopup (popupProfile);
}); 

//закрыть попап добавления новых карточек
addCardCloseButton.addEventListener("click", () => {
  closePopup (popupAddCard);
}); 

//закрыть попап Zoom
zoomCloseButton.addEventListener("click", () => {
  closePopup (popupZoom);
}); 


const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`); 









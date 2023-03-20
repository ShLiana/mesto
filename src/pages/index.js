import { Card } from "../../src/scripts/components/Card.js";
import { FormValidator } from "../../src/scripts/components/FormValidator.js";
import { Section } from "../../src/scripts/components/Section.js";
import { PopupWithForm } from "../../src/scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../../src/scripts/components/PopupWithImage.js";
import { PopupWithConfirmation } from "../../src/scripts/components/PopupWithConfirmation.js";
import { Api } from "../../src/scripts/components/Api.js";
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
  editAvatarButton,
  popupEditUserAvatar,
  formEditUserAvatar,
  userAvatar,
  avatarForm,
} from "../../src/scripts/utils/constants.js";

//Загрузка информации о пользователе с серверa
const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "44fbd263-dcc3-40dc-bdca-15d93dcff4a4"
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

//функция, ктр заносит информацию в инпуты профиля
function addUserInfoPopupForm({ userName, userJob }) {
  profileNameInput.value = userName; // Получите значение полей jobInput и nameInput из свойства value
  profileJobInput.value = userJob;
}

//Получить данные о пользователе
const userInfo = new UserInfo({
  userName: ".profile__user-name",
  userJob: ".profile__user-job",
  userAvatar: ".profile__avatar",
});

//создание попапа редактирования профиля
const editProfilePopupForm = new PopupWithForm({
  popupSelector: ".profilePopup",
  handleFormSubmit: (data) => {
    editProfilePopupForm.loading(true);
    api
      .updateUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        editProfilePopupForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopupForm.loading(false);
      });
  },
});
editProfilePopupForm.setEventListeners();

//открыть попап профиля, тут же данные о пользователе
popupProfileOpenButton.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  const infoAboutUser = userInfo.getUserInfo();
  addUserInfoPopupForm({
    userName: infoAboutUser.userName,
    userJob: infoAboutUser.userJob,
  });
  editProfilePopupForm.open();
});

//создание попапа редактирования аватара
const editUserAvatarPopup = new PopupWithForm({
  popupSelector: ".editAvatarPopup",
  handleFormSubmit: (data) => {
    editUserAvatarPopup.loading(true);
    api
      .updateUserAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        editUserAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editUserAvatarPopup.loading(false);
      });
  },
});
editUserAvatarPopup.setEventListeners();

//функция открытия попапа редактирования авы
editAvatarButton.addEventListener("click", () => {
  avatarValidateForm.resetValidation();
  editUserAvatarPopup.open();
});

//экземпляр класса PopupWithImage для zoom-картинки
const zoomPopupImage = new PopupWithImage(".zoomPopup");
zoomPopupImage.setEventListeners();

//экземпляр класса PopupWithConfirmation для подтверждения удаления картинки
const deleteCardPopup = new PopupWithConfirmation(".deleteCardPopup");
deleteCardPopup.setEventListeners();

//создание новой карточки
const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      currentUserId: userInfo.getUserId(),

      handleCardClick: () => {
        zoomPopupImage.open(data);
      },

      handleDeleteTrashIcon: () => {
        deleteCardPopup.open();
        deleteCardPopup.confirmationRemove(() => {
          api
            .deleteCard(card.getId())
            .then(() => {
              card.deleteCard();
              deleteCardPopup.close();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        });
      },

      handleAddLike: () => {
        api
          .addLikeCard(card.getId())
          .then((data) => {
            card.countCardLikes(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      },

      handleDeleteLike: () => {
        api
          .deleteLikeCard(card.getId())
          .then((data) => {
            card.countCardLikes(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      },
    },
    ".card-template"
  );
  return card.generateCard();
};

//Экземпляр класса Section (вставляем карточку в секции)
const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".gallery__list"
);

//создание попапа добавления новых карточек
const addCardPopupForm = new PopupWithForm({
  popupSelector: ".addCardPopup",
  handleFormSubmit: (data) => {
    addCardPopupForm.loading(true);
    api
      .addNewCard(data)
      .then((data) => {
        cardList.addItem(createCard(data));
        addCardPopupForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCardPopupForm.loading(false);
      });
  },
});
addCardPopupForm.setEventListeners();

// слушатель кнопки открытия попапа добавления новой карточки
addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  addCardPopupForm.open();
});

///поиск форм по уникальным классам
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

const avatarValidateForm = new FormValidator(validationConfig, avatarForm);
avatarValidateForm.enableValidation();

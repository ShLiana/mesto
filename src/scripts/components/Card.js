export class Card {
  constructor(
    {
      data,
      currentUserId,
      handleCardClick,
      handleDeleteTrashIcon,
      handleAddLike,
      handleDeleteLike,
    },
    templateSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._currentUserId = currentUserId;
    this._ownerCard = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteTrashIcon = handleDeleteTrashIcon;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._templateSelector = templateSelector;
  }

  _getCardElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content //извлечёт его содержимое
      .querySelector(".card") //в содержимом найдёт элемент с классом card
      .cloneNode(true); //клонирует его
    return cardElement; //вернёт клонированный элемент
  }

  getId() {
    return this._cardId;
  }

  // метод слушателя по кнопке - "лайк"
  countCardLikes(data) {
    this._likes = data.likes;
    this._toggleLikeButton.classList.toggle("card__like_active");
    this._likeCounter.textContent = this._likes.length;
  }

  // метод слушателя по кнопке - "удалить"
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //метод ставит/убирает "лайк"
  _checkLikeState() {
    if (this._toggleLikeButton.classList.contains("card__like_active")) {
      this._handleDeleteLike(this._cardId);
    } else {
      this._handleAddLike(this._cardId);
    }
  }

  //убираем кнопку "удалить", если карочка не моя
  _checkDeleteState() {
    if (this._ownerCard !== this._currentUserId) {
      this._cardDeleteButton.remove();
    }
  }

  //проверка пользовательского "лайка"
  _isLiked() {
    if (
      this._likes.some((user) => {
        return this._currentUserId === user._cardId;
      })
    ) {
      this._toggleLikeButton.classList.add("card__like_active");
    }
  }

  //Метод добавления всех обработчиков
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteTrashIcon();
    });

    this._toggleLikeButton.addEventListener("click", () => {
      this._checkLikeState();
    });
  }

  //Метод создания карточки
  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getCardElement();
    this._cardImage = this._element.querySelector(".card__image");
    this._toggleLikeButton = this._element.querySelector(".card__like");
    this._cardDeleteButton = this._element.querySelector(".card__delete");
    this._likeCounter = this._element.querySelector(".like__counter");
    this._setEventListeners();
    this._checkDeleteState();
    this._isLiked();
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._likeCounter.textContent = this._likes.length;
    //если картинка не загрузится, то вставится имя этой картинки
    this._cardImage.alt = `${this._name}.`;
    return this._element;
  }
}

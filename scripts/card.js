export class Card {
  constructor (item, templateSelector, openZoomPopup) {
    this._templateSelector = templateSelector;
    this._name = item.name;
    this._link = item.link;
    this._openZoomPopup = openZoomPopup;
  }

  _getCardElement() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content //извлечёт его содержимое
          .querySelector('.card') //в содержимом найдёт элемент с классом card
          .cloneNode(true); //клонирует его
          return cardElement; //вернёт клонированный элемент
}

//Метод создания карточки
  generateCard = () => {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getCardElement();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardLikeButton = this._element.querySelector('.card__like');
    this._cardDeleteButton = this._element.querySelector('.card__delete');

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    
    this._setEventListeners();
    
    // Вернём элемент наружу
    return this._element;
  };

  //Метод добавления всех обработчиков
  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._cardLike();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      const { _name, _link } = this;
      this._openZoomPopup(_name, _link);
    });
  }

  //Метод ставит/убирает лайк
  _cardLike() {
    this._cardLikeButton.classList.toggle("card__like_active");
  }

  //Метод слушателя по кнопке "удалить"
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}












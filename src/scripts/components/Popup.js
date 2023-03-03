"use strict";

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector(".popup__cross");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  //приватный метод, содержит логику закрытия попапа по клавише Esc
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  //метод добавляет слушатель клика иконке закрытия попапа, модальное окно также закрывается по оверлау
  setEventListeners() {
    this._closeBtn.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}

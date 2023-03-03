"use strict";

import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  //метод собирает данные всех полей формы
  _getInputValues() {
    //создаем объект пустой
    this._formValues = {};
    // добавляем в  объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    //возращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // передадим ф-и объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close(); //это наследование родительского метода close
    this._popupForm.reset(); //при закрытии попапа форма сбрасывается
  }
}
"use strict";
//класс отвечает за управление отображением инф-ии о пользователе
//на странице

export class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }

  //метод возвращает объект с данными пользователя.
  //метод нужен когда данные пользователя нужно б/подставить в форму при открытии.
  getUserInfo() {
    const userInfo = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
      userAvatar: this._userAvatar.src,
    };
    return userInfo;
  }

  //метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._id = data._id;
  }

  getUserId() {
    return this._id;
  }
}

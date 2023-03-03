"use strict"
//класс отвечает за управление отображением инф-ии о пользователе
//на странице

export class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  //метод возвращает объект с данными пользователя.
  //метод нужен когда данные пользователя нужно б/подставить в форму при открытии.
  getUserInfo() {
    const userInfo = {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
    return userInfo;
  }

  //метод принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}

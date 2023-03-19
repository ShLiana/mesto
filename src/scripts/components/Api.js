export class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._token,
    };
  }

  //проверить ответ
  _getJson(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  //получить информацию о пользователе
  getUserInfo() {
    const promise = fetch(`${this._url}/users/me`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  //обновить информацию пользователя
  updateUserInfo(data) {
    const promise = fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.userName,
        about: data.userJob,
      }),
    });
    return promise.then(this._getJson);
  }

  //обновить аватар пользователя
  updateUserAvatar(data) {
    console.log(data);
    const promise = fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.userAvatar,
      }),
    });
    return promise.then(this._getJson);
  }

  //получить карточки
  getInitialCards() {
    const promise = fetch(`${this._url}/cards`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  //добавить новые карточки
  addNewCard(data) {
    const promise = fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    return promise.then(this._getJson);
  }

  //удалить карточку
  deleteCard(_id) {
    const promise = fetch(`${this._url}/cards/${_id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  // поставить лайк карточке
  addLikeCard(_id) {
    const promise = fetch(`${this._url}/cards/${_id}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  // удалить лайк с карточки
  deleteLikeCard(_id) {
    const promise = fetch(`${this._url}/cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }
}

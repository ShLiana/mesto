// класс отвечает за отрисовку элементов на странице
// он берет разметку из других классов и вставляет ее в DOM
"use strict";

export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

// метод, отвечающий за создание и отрисовку данных на странице
renderItems(items) {
  items.forEach((item) => {
    this._renderer(item)
  });
}

// принимает DOM-элемент и добавляет его в контейнер
addItem(element) {
  this._container.prepend(element);
}
addCardAppend(element) {
  this._container.append(element);
}
}



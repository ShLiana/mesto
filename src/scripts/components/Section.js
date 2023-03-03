// класс отвечает за отрисовку элементов на странице
// он берет разметку из других классов и вставляет ее в DOM
"use strict"

export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

//отрисовка всех элементов (renderer - отрисовка каждого элемента)
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
//принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }
}

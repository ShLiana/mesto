"use strict";

import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupZoomTitle = this._popup.querySelector(".zoomPopup__photo-cards-text");
    this._popupZoomImage = this._popup.querySelector(".zoomPopup__photo-cards-img");
  }

  open(data) {
    console.log(data);
    this._popupZoomImage.src = data.link;
    this._popupZoomTitle.textContent = data.name;
    this._popupZoomImage.alt = data.name;
    super.open();
  }
}

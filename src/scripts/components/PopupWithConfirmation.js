//попап, уточняющий удалять карточку или нет
import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._form = this._popup.querySelector(".popup__form");  
      //this._confirmationButton = this._popup.querySelector(".popup__save-button");  
   }
   
   confirmationRemove(action) {
      this._removeCard = action;
   }

   setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         this._removeCard();
      });
   }
}

(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r){var n=t.data,o=t.currentUserId,i=t.handleCardClick,u=t.handleDeleteTrashIcon,a=t.handleAddLike,c=t.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._cardId=n._id,this._currentUserId=o,this._ownerCard=n.owner._id,this._likes=n.likes,this._handleCardClick=i,this._handleDeleteTrashIcon=u,this._handleAddLike=a,this._handleDeleteLike=c,this._templateSelector=r}var r,n;return r=e,(n=[{key:"_getCardElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"getId",value:function(){return this._cardId}},{key:"countCardLikes",value:function(e){this._likes=e.likes,this._toggleLikeButton.classList.toggle("card__like_active"),this._likeCounter.textContent=this._likes.length}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_checkLikeState",value:function(){this._toggleLikeButton.classList.contains("card__like_active")?this._handleDeleteLike(this._cardId):this._handleAddLike(this._cardId)}},{key:"_checkDeleteState",value:function(){this._ownerCard!==this._currentUserId&&this._cardDeleteButton.remove()}},{key:"_isLiked",value:function(){var e=this;this._likes.some((function(t){return e._currentUserId===t._cardId}))&&this._toggleLikeButton.classList.add("card__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick()})),this._cardDeleteButton.addEventListener("click",(function(){e._handleDeleteTrashIcon()})),this._toggleLikeButton.addEventListener("click",(function(){e._checkLikeState()}))}},{key:"generateCard",value:function(){return this._element=this._getCardElement(),this._cardImage=this._element.querySelector(".card__image"),this._toggleLikeButton=this._element.querySelector(".card__like"),this._cardDeleteButton=this._element.querySelector(".card__delete"),this._likeCounter=this._element.querySelector(".like__counter"),this._setEventListeners(),this._checkDeleteState(),this._isLiked(),this._cardTitle=this._element.querySelector(".card__title"),this._cardImage.src=this._link,this._cardTitle.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._cardImage.alt="".concat(this._name,"."),this._element}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var a=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_hideInputError",(function(e){console.log(e.id);var t=n._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(n._config.inputErrorClass),t.classList.remove(n._config.errorClass),t.textContent=""})),i(this,"_isValid",(function(e){e.validity.valid?n._hideInputError(e):n._showInputError(e,e.validationMessage)})),i(this,"_hasInvalidInput",(function(){return n._inputList.some((function(e){return!e.validity.valid}))})),this._config=t,this._formElement=r,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),r.textContent=t,r.classList.add(this._config.errorClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_disableButtonState",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_enableButtonState",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!1===e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var s=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addCardAppend",value:function(e){this._container.append(e)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeBtn=this._popup.querySelector(".popup__cross"),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeBtn.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},m.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,n=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._handleFormSubmit=n,t._popupForm=t._popup.querySelector(".popup__form"),t._buttonLoading=t._popupForm.querySelector(".popup__save-button"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;m(v(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(v(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._buttonLoading.textContent=e?"Сохранение...":"Сохранить"}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(o){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupZoomTitle=t._popup.querySelector(".zoomPopup__photo-cards-text"),t._popupZoomImage=t._popup.querySelector(".zoomPopup__photo-cards-img"),t}return t=u,(r=[{key:"open",value:function(e){this._popupZoomImage.src=e.link,this._popupZoomTitle.textContent=e.name,this._popupZoomImage.alt=e.name,k(E(u.prototype),"open",this).call(this)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},O.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"confirmationRemove",value:function(e){this._removeCard=e}},{key:"setEventListeners",value:function(){var e=this;O(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._removeCard()}))}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var A=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._token=r}var t,r;return t=e,(r=[{key:"_getHeaders",value:function(){return{"Content-Type":"application/json",authorization:this._token}}},{key:"_getJson",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({name:e.userName,about:e.userJob})}).then(this._getJson)}},{key:"updateUserAvatar",value:function(e){return console.log(e),fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({avatar:e.userAvatar})}).then(this._getJson)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._getHeaders()}).then(this._getJson)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify({name:e.name,link:e.link})}).then(this._getJson)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._getHeaders()}).then(this._getJson)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._getHeaders()}).then(this._getJson)}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var J=function(){function e(t){var r=t.userName,n=t.userJob,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this._userAvatar.src=e.avatar,this._id=e._id}},{key:"getUserId",value:function(){return this._id}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),U=document.querySelector(".profile"),x=(U.querySelector(".profile__user-name"),U.querySelector(".profile__user-job"),document.querySelector(".profilePopup").querySelector(".popup__form"),document.querySelector(".popup__input_type_name")),N=document.querySelector(".popup__input_type_job"),F=document.querySelector(".zoomPopup"),V=(F.querySelector(".zoomPopup__photo-cards-img"),F.querySelector(".zoomPopup__photo-cards-text"),document.querySelector(".addCardPopup")),H=U.querySelector(".profile__add-button"),z=(V.querySelector(".newCardForm"),V.querySelector(".popup__input_type_title"),V.querySelector(".popup__input_type_link"),document.querySelector(".editAvatarPopup")),Z=U.querySelector(".profile__edit-avatar-button"),M=(z.querySelector("[name='userName']"),document.querySelector(".profile__avatar"),z.querySelector(".editProfileAvatarForm")),$=U.querySelector(".profile__edit-button"),G=(document.querySelector(".gallery__list"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"});function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=new A("https://mesto.nomoreparties.co/v1/cohort-61","44fbd263-dcc3-40dc-bdca-15d93dcff4a4");Promise.all([Q.getUserInfo(),Q.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W.setUserInfo(o),ne.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var W=new J({userName:".profile__user-name",userJob:".profile__user-job",userAvatar:".profile__avatar"}),X=new b({popupSelector:".profilePopup",handleFormSubmit:function(e){X.loading(!0),Q.updateUserInfo(e).then((function(e){W.setUserInfo(e),X.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){X.loading(!1)}))}});X.setEventListeners(),$.addEventListener("click",(function(){ae.resetValidation();var e,t,r,n=W.getUserInfo();t=(e={userName:n.userName,userJob:n.userJob}).userName,r=e.userJob,x.value=t,N.value=r,X.open()}));var Y=new b({popupSelector:".editAvatarPopup",handleFormSubmit:function(e){Y.loading(!0),Q.updateUserAvatar(e).then((function(e){W.setUserInfo(e),Y.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Y.loading(!1)}))}});Y.setEventListeners(),Z.addEventListener("click",(function(){le.resetValidation(),Y.open()}));var ee=new C(".zoomPopup");ee.setEventListeners();var te=new q(".deleteCardPopup");te.setEventListeners();var re=function(e){var t=new r({data:e,currentUserId:W.getUserId(),handleCardClick:function(){ee.open(e)},handleDeleteTrashIcon:function(){te.open(),te.confirmationRemove((function(){Q.deleteCard(t.getId()).then((function(){t.deleteCard(),te.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleAddLike:function(){Q.addLikeCard(t.getId()).then((function(e){t.countCardLikes(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleDeleteLike:function(){Q.deleteLikeCard(t.getId()).then((function(e){t.countCardLikes(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},".card-template");return t.generateCard()},ne=new s({renderer:function(e){ne.addItem(re(e))}},".gallery__list"),oe=new b({popupSelector:".addCardPopup",handleFormSubmit:function(e){oe.loading(!0),Q.addNewCard(e).then((function(e){ne.addItem(re(e)),oe.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){oe.loading(!1)}))}});oe.setEventListeners(),H.addEventListener("click",(function(){ce.resetValidation(),oe.open()}));var ie=document.querySelector(".editProfileForm"),ue=document.querySelector(".newCardForm"),ae=new a(G,ie),ce=new a(G,ue);ae.enableValidation(),ce.enableValidation();var le=new a(G,M);le.enableValidation()})();
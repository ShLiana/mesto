export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector)); //найдем элементы DOM 1 раз тут и сделаем их полями класса
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);

   
};

// Функция, которая добавляет класс с ошибкой
_showInputError (inputElement, errorMessage) {
  const formError = this._formElement.querySelector(`.${inputElement.id}-error`); //нашли span с префиксом -error
  inputElement.classList.add(this._config.inputErrorClass);
// Показывает сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add(this._config.errorClass);
};

// Функция, которая удаляет класс с ошибкой
_hideInputError = (inputElement) => {
  const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._config.inputErrorClass); //убираем подчеркивание красным
  formError.classList.remove(this._config.errorClass); //удаляем текст ошибки
  // Очищает ошибку
  formError.textContent = '';
};

// Функция, которая которая проверяет валидность форм
_isValid = (inputElement) => {
  if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage); // Если поле не прошло валидацию, то показываем ошибку
  } else {
        this._hideInputError(inputElement); // Если проходит валидацию, то скрываем ошибку
  ;}
};

// Проверка на наличие невалидных инпутов
_hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Вызываем функцию toggleButtonState - добавляем/убираем активацию кнопки
_toggleButtonState () {
  if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
} else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass); //убираем класс
      this._buttonElement.removeAttribute('disabled'); 
  }
};

// Функция setEventListeners
_setEventListeners () {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._isValid(inputElement);
      this._toggleButtonState();
    });
  });
};

//метод сброса валидации
resetValidation() {
  this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
  });
  this._toggleButtonState();
};


_disableButtonState() {
  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.setAttribute("disabled", "disabled");
}

_enableButtonState() {
  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.removeAttribute("disabled");
}

_hasInvalidInput() {
  return this._inputList.some(inputElement => inputElement.validity.valid === false);
}


//функция навершивает слушатели для валидации формы
  enableValidation() {
    this._setEventListeners()
  };
}
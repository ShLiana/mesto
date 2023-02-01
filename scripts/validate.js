const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}; 

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`); //нашли span с префиксом -error
  inputElement.classList.add(config.inputErrorClass);
// Показывает сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add(config.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass); //убираем подчеркивание красным
  formError.classList.remove(config.errorClass); //удаляем текст ошибки
  // Очищает ошибку
  formError.textContent = '';
};

// Функция, которая которая проверяет валидность форм
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config); // Если поле не прошло валидацию, то показываем ошибку
  } else {
        hideInputError(formElement, inputElement, config); // Если проходит валидацию, то скрываем ошибку
  ;}
};

// Проверка на наличие невалидных инпутов
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Вызываем функцию toggleButtonState - добавляем/убираем активацию кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList, config)) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
} else {
  buttonElement.classList.remove(config.inactiveButtonClass); //убираем класс
  buttonElement.removeAttribute('disabled'); 
  }
};

// Функция setEventListeners - добавит обработчики сразу всем полям формы
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

// Функция enableValidation - найдёт и переберёт все формы на странице
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

enableValidation(config);
const showInputError = (element) => {
    element.classList.add(errorClass);
  };
  
  const hideInputError = (element) => {
    element.classList.remove(errorClass);
  };

const enableValidation = ({formSelector,
                           inputSelector,
                           submitButtonSelector,
                           inactiveButtonClass,
                           inputErrorClass,
                           errorClass}) => {
    
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: '.popup__submit_disabled',
    inputErrorClass: '.popup__error',
    errorClass: '.popup__error_visible'
  }); 
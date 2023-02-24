// Obtener los elementos del formulario
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');

// Función para validar los campos del formulario
function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('invalid');
    isValid = false;
  } else {
    nameInput.classList.remove('invalid');
  }

  if (emailInput.value.trim() === '') {
    emailInput.classList.add('invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('invalid');
  }

  if (phoneInput.value.trim() === '') {
    phoneInput.classList.add('invalid');
    isValid = false;
  } else {
    phoneInput.classList.remove('invalid');
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('invalid');
    isValid = false;
  } else {
    messageInput.classList.remove('invalid');
  }

  if (isValid) {
    form.submit();
  }
}

// Agregar un escucha de evento para el envío del formulario
form.addEventListener('submit', validateForm);

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (evento) {
    const confirmar = confirm("¿Estás seguro de que quieres enviar los datos?");
    if (!confirmar) {
      evento.preventDefault(); // cancela el envío si el usuario pulsa "Cancelar"
    }
  });
  
  const emailInput = document.getElementById('email');
  const confirmEmailInput = document.getElementById('confirmacionEmail');

  confirmEmailInput.addEventListener('input', () => {
    if (emailInput.value !== confirmEmailInput.value) {
      confirmEmailInput.setCustomValidity('Los correos no coinciden');
    } else {
      confirmEmailInput.setCustomValidity('');
    }
  });
});


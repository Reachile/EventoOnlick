// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Cambiar Iniciar Sesión a Cerrar Sesión
    const loginButton = document.querySelector('.navbar-search button');
    loginButton.addEventListener('click', () => {
        if (loginButton.textContent === "Iniciar Sesión") {
            loginButton.textContent = "Cerrar Sesión";
        } else {
            loginButton.textContent = "Iniciar Sesión";
        }
    });

    // Hacer que el botón "Agregar Definición" desaparezca
    const addDefinitionButton = document.querySelector('.btn-add');
    addDefinitionButton.addEventListener('click', () => {
        addDefinitionButton.style.display = 'none';
    });

    // Manejar el clic en los botones de "Me gusta"
    const likeButtons = document.querySelectorAll('.btn-more');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtener el título de la definición
            const title = button.parentElement.querySelector('h2').textContent;
            alert(`Te gustó la definición de: ${title}`);

            // Aumentar el conteo de "Me gusta"
            const currentLikes = parseInt(button.textContent.split(' ')[0]);
            button.textContent = `${currentLikes + 1} me gusta`;
        });
    });
});

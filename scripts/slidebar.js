document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const slidebar = document.getElementById('slidebar');

    // Alternar la visibilidad de la slidebar al hacer clic en el botón
    toggleButton.addEventListener('click', function() {
        slidebar.classList.toggle('hidden');
    });
});
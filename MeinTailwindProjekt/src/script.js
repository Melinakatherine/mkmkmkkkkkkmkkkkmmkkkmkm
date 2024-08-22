// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleAbout');
    const aboutDetails = document.getElementById('aboutDetails');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggle visibility of the about details
            if (aboutDetails.classList.contains('hidden')) {
                aboutDetails.classList.remove('hidden');
                toggleButton.textContent = 'Weniger anzeigen';
            } else {
                aboutDetails.classList.add('hidden');
                toggleButton.textContent = 'Mehr erfahren';
            }
        });
    }
});
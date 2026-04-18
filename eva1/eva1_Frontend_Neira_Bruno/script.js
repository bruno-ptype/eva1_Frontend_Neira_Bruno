document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const htmlElement = document.documentElement;

    // script para cambiar el tema
    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            toggleButton.innerHTML = "Activar modo claro 🌞";
        } else {
            toggleButton.innerHTML = "Activar modo oscuro 🌙";
        }
    }

    // script para detectar el tema del sistema operativo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = systemPrefersDark ? 'dark' : 'light';
    applyTheme(initialTheme);

    // evento para cambiar el tema al hacer clic en el botón
    toggleButton.addEventListener("click", function(e) {
        e.preventDefault();
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // 4. Escuchar cambios del sistema en tiempo real
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
});
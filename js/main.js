let estiloActual = 'style.css';

document.getElementById('estilo').addEventListener('click', function() {
    if (estiloActual === 'style.css') {
        document.getElementById('modo').href = 'css/style_noche.css';
        estiloActual = 'style_noche.css';
    } else {
        document.getElementById('modo').href = 'css/style.css';
        estiloActual = 'style.css';
    }
});
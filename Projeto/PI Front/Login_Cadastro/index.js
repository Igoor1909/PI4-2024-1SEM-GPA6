document.addEventListener('DOMContentLoaded', function() {
    const linkCadastro = document.getElementById('linkCadastro');
    const cardWrapper = document.querySelector('.card-3d-wrapper');

    linkCadastro.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link

        cardWrapper.classList.toggle('flip'); // Alternar a classe 'flip' no wrapper da carta
    });
});
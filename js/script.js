document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
    // Adicione interatividade aqui
});

document.addEventListener('DOMContentLoaded', () => {
    const testemunhos = document.querySelectorAll('.testemunho');
    let currentIndex = 0;

    /**
     * Mostra o testemunho na posição dada.
     * @param {number} index - O índice do testemunho a ser mostrado.
     */
    function showTestemunho(index) {
        testemunhos.forEach((testemunho, i) => {
            testemunho.classList.remove('active');
            if (i === index) {
                testemunho.classList.add('active');
            }
        });
    }

    function nextTestemunho() {
        currentIndex = (currentIndex + 1) % testemunhos.length;
        showTestemunho(currentIndex);
    }

    showTestemunho(currentIndex);
    setInterval(nextTestemunho, 3000); // Mudar testemunho a cada 3 segundos
});

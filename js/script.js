document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
    // Adicione interatividade aqui
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');

    // Exemplo de interatividade: Mostrar uma mensagem de boas-vindas
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Bem-vindo à nossa loja de produtos artesanais!';
    welcomeMessage.style.backgroundColor = '#333';
    welcomeMessage.style.color = '#fff';
    welcomeMessage.style.padding = '1rem';
    welcomeMessage.style.textAlign = 'center';
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
});
document.addEventListener('DOMContentLoaded', () => {
    const testemunhos = document.querySelectorAll('.testemunho');
    let currentIndex = 0;

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

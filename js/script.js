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

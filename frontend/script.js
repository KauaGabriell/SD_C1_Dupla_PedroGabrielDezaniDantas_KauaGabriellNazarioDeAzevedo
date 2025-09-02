// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o formulário usando o ID correto: 'loginForm'
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(event) {
        // Impede o comportamento padrão de recarregar a página
        event.preventDefault();

        // Pega os valores dos inputs
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        
        // Seleciona o elemento de mensagem usando o ID correto: 'message'
        const messageElement = document.getElementById('message');

        // URL do backend com a porta correta: 3001
        const backendUrl = 'http://localhost:3001/login';

        // Limpa mensagens anteriores
        messageElement.textContent = '';
        messageElement.className = '';

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Corpo da requisição com os nomes corretos: 'usuario' e 'senha'
                body: JSON.stringify({ usuario: usuario, senha: senha })
            });

            const data = await response.json();
            
            // Verifica o status da resposta para decidir o que fazer
            if (response.ok) { // response.ok é verdadeiro para status 200-299
                messageElement.textContent = data.mensagem;
                messageElement.className = 'success';
            } else {
                // Para status 400, 401 ou outros erros vindos do servidor
                messageElement.textContent = data.mensagem;
                messageElement.className = 'error';
            }
        // Captura erros de rede (ex: servidor offline)
        } catch (error) {
            console.error('Erro na comunicação com o servidor:', error);
            messageElement.textContent = 'Erro de conexão com o servidor. Tente novamente mais tarde.';
            messageElement.className = 'error';
        }
    });
});
const express = require('express');
const cors = require ('cors');

/**Criando server */
const app = express();
const PORT = 3001; /**Porta do Server */

app.use(cors());
app.use(express.json());

/**Declarando variáveis estáticas do usuário e senha */
const usuarioEstatico = {
  usuario: 'admin',
  senha: '123',
};

// Criando ENDPOINT POST /login (AGORA CORRIGIDO)
app.post('/login', (requisicao, resposta) => {
  const { usuario, senha } = requisicao.body;
  
    /**Verificando se os dados foram enviados na requisição */
  if (!usuario || !senha) {
    return resposta.status(400).json({ mensagem: 'Usuário e senha são obrigatórios.' });
  }
    /**Verificando se o usuário e senha são iguais a das variáveis estáticas*/
  if (usuario === usuarioEstatico.usuario && senha === usuarioEstatico.senha) {
    return resposta.status(200).json({ mensagem: 'Login bem-sucedido' });
  } else {
    return resposta.status(401).json({ mensagem: 'Credenciais Inválidas' });
  }
});

/**Iniciando o servidor */
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
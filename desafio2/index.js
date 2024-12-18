const getRankHeroe = require('./getRankHeroe');
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Função para fazer a primeira pergunta
  rl.question("Digite a quantidade de vitórias: ", (victories) => {
  
    // Função para fazer a segunda pergunta
    rl.question('Digite a quantidade de derrotas: ', (defeats) => {
        console.log(getRankHeroe(victories, defeats));
  
      // Fecha a interface após as perguntas
      rl.close();
    });
  });

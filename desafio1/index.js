const classifyLevelHeroes = require('./classifyLevelHeroes');
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Função para fazer a primeira pergunta
  rl.question("Digite seu nome: ", (name) => {
  
    // Função para fazer a segunda pergunta
    rl.question('Digite a quantidade de xp que possui: ', (xp) => {
        console.log(classifyLevelHeroes(name, xp));
  
      // Fecha a interface após as perguntas
      rl.close();
    });
  });



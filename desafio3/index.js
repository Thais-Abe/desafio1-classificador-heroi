const readline = require('readline');
const Heroe = require('./Heroe');


// Cria uma interface para ler a entrada do usuário via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Função para fazer a primeira pergunta
  rl.question("Digite o nome do heroi: ", (name) => {
  
    // Função para fazer a segunda pergunta
    rl.question('Digite a idade do heroi: ', (age) => {
        

   rl.question("Digite o tipo dele: ", (type)=>{
    
   
   const heroe = new Heroe(name, age, type); 
    console.log(heroe.atacar(type));
      // Fecha a interface após as perguntas
      rl.close();
    });
    });
  });

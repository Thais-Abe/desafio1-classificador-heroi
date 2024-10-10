 class Heroe {
     nome;
     idade;
     tipo;
     constructor(tipo){
        this.tipo = tipo;
     }

atacar(heroi){
    let tipoDeAtaque = "";
    if(heroi === 'mago'){
        tipoDeAtaque = "magia";
    }else if(heroi === 'guerreiro'){
        tipoDeAtaque = "espada";
    }else if(heroi === 'monge'){
        tipoDeAtaque = "artes marciais";
    }else if( heroi === 'ninja'){
        tipoDeAtaque = "shuriken";
    }else{
        return "Este heroi não faz parte deste jogo, tente novamente!"
    }
    return  `o ${this.tipo} atacou usando ${tipoDeAtaque}`;
}

}

let heroi = new Heroe("mago");
console.log(heroi.atacar("monge"));
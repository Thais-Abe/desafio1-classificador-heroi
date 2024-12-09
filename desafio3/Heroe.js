class Heroe {
  nome;
  idade;
  tipo;
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  obterTipoDeAtaque(tipo) {
    switch (tipo) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      case "ninja":
        return "shuriken";
      default:
        return null;
    }
  }

  atacar(tipo) {
    let tipoDeAtaque = this.obterTipoDeAtaque(tipo);
    if (tipoDeAtaque) {
      return `O ${this.tipo} atacou usando ${tipoDeAtaque}.`;
    } else {
      return "Este heroi não faz parte deste jogo, tente novamente!";
    }
  }
}
module.exports = Heroe;
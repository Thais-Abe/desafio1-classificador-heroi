function getRank(name,victories,defeats ){
  let result = victories - defeats;
    if(result >= 101){
        return `O Herói tem de saldo de ${result}! está no nível de Imortal`;
    }else if(result >= 91 && result <= 100){
        return `O Herói tem de saldo de ${result}! está no nível de lendário`;
    }else if( result >= 81 && result <= 90){
       return `O Herói tem de saldo de ${result}! está no nível de  Diamante`;
    }else if( result>= 51 && result <= 80){
        return `O Herói tem de saldo de ${result}! está no nível de Ouro `;
    }else if( result >= 21 && result <= 50){
       return `O Herói tem de saldo de ${result}! está no nível de  Prata`;
    }else if( result >= 11 && result <=20){
       return `O Herói tem de saldo de ${result}! está no nível de  Bronze`;
    }else{
        return `O Herói tem de saldo de ${result}! está no nível de Ferro`;
    }
}

console.log(getRank("Rubens", 200, 101));
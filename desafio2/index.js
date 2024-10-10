function getRank(name,victories,defeats ){
  let result = victories - defeats;
    if(result >= 101){
        return `Olá ${name}! Seu nível é Imortal`;
    }else if(result >= 91 && result <= 100){
        return `Olá ${name}! Seu nível é lendário`;
    }else if( result >= 81 && result <= 90){
        return `Olá ${name}! Seu nível é de Diamante`;
    }else if( result>= 51 && result <= 80){
        return `Olá ${name}! Seu nível é de Ouro `;
    }else if( result >= 21 && result <= 50){
        return `Olá ${name}! Seu nível é de Prata`;
    }else if( result >= 11 && result <=20){
        return `Olá ${name}! Seu nível é de Bronze`;
    }else{
        return `Olá ${name}! Seu nível é de Ferro`;
    }
}

console.log(getRank("Rubens", 200, 101));
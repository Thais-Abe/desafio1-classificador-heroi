function classifyLevelHeroes(name,xpQuantity){
  
    if(xpQuantity >= 100001){
        return `Olá ${name}! Seu nível é Radiante`;
    }else if(xpQuantity >= 9001 && xpQuantity <= 10000){
        return `Olá ${name}! Seu nível é Imortal`;
    }else if( xpQuantity >= 8001 && xpQuantity <= 9000){
        return `Olá ${name}! Seu nível é de Ascendente`;
    }else if( xpQuantity >= 7001 && xpQuantity <= 8000){
        return `Olá ${name}! Seu nível é de Platina `;
    }else if( xpQuantity >= 6000 && xpQuantity <= 7000){
        return `Olá ${name}! Seu nível é de Ouro`;
    }else if( xpQuantity >= 2001 && xpQuantity <=5999){
        return `Olá ${name}! Seu nível é de Prata`;
    }else if(xpQuantity >= 1001 && xpQuantity <= 2000 ){
        return `Olá ${name}! Seu nível é de Bronze`;
    }else {
        return `Olá ${name}! Seu nível é de Ferro`;
    }
}

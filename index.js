function calcularNivel(vitorias, derrotas){
      //Calcula o saldo de vitorias
    let saldoVitorias = vitorias - derrotas;

    // determina o nivel do jogador com base no número de vitórias
    let nivel;

    if (vitorias < 10){
        return "Ferro";
    } else if(vitorias <= 20){
        return "Bronze";
    } else if(vitorias <= 50){
        return "Prata";
    } else if(vitorias <= 80){
        return "Ouro";
    } else if(vitorias <= 90){
        return "Diamante";
    } else if(vitorias <= 100){
        return "Lendario";
    } else{
        nivel = "imortal";
    }
    // Retorna o saldo de vitórias e o nível do jogador
    return{ saldoVitorias, nivel };
}

let vitorias = 101;
let derrotas = 2;

let resultado = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
function soma(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
  }
  
  // Usando a função soma para calcular o saldo de vitórias
  let vitorias = soma(88, 4); 
  
  let nivel = "";
  
  // Atribuindo o nível com base na quantidade de vitórias
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias > 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias > 20 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias > 50 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias > 80 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias > 90 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  
  // Exibe a mensagem final com o saldo e nível do jogador
  console.log("O Herói tem um saldo de " + vitorias + " Vitórias e está no Nível " + nivel);

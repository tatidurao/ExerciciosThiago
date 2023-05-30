/**A prefeitura contratou um novo professor para ensinar as crianças do bairro a jogar tênis na quadra de tênis do parque municipal. O professor convidou todas as crianças do bairro interessadas em aprender a jogar tênis. Ao final do primeiro mês de aulas e treinamentos foi organizado um torneio em que cada participante disputou exatamente seis jogos. O professor vai usar o desempenho no torneio para separar as crianças em três grupos, de forma a ter grupos de treino em que os participantes tenham habilidades mais ou menos iguais, usando o seguinte critério:

participantes que venceram 5 ou 6 jogos serão colocados no Grupo 1;
participantes que venceram 3 ou 4 jogos serão colocados no Grupo 2;
participantes que venceram 1 ou 2 jogos serão colocados no Grupo 3;
participantes que não venceram nenhum jogo não serão convidados a continuar com os treinamentos.
Dada uma lista com o resultado dos jogos de um participante, escreva um programa para determinar em qual grupo ele será colocado.
Entrada
A entrada consiste de seis linhas, cada linha indicando o resultado de um jogo do participante. Cada linha contém um único caractere: V se o participante venceu o jogo, ou P se o jogador perdeu o jogo. Não há empates nos jogos.
Saída
Seu programa deve produzir uma única linha na saída, contendo um único inteiro, identificando o grupo em que o participante será colocado. Se o participante não for colocado em nenhum dos três grupos seu programa deve imprimir o valor -1.
Exemplos
Entrada
V
V
P
P
P
V
Saída
2
	
 

Entrada
P
P
P
P
P
P
Saída
-1
	
  */



//configuração
function setup() {
  var grupoV = 0
  var nomegrupo =""
  var resultado = ['V','V','V','V','V','P']
  
  for(var i = 0; i<resultado.length; i++){
    if(resultado[i] == 'V'){
      grupoV += 1
      console.log(grupoV)
    }
    console.log(grupoV)
    
  }

  if(grupoV>=5){
    nomegrupo = 1
    console.log(nomegrupo)
  }
  else if(grupoV <5 && grupoV >2){
    nomegrupo = 2
    console.log(nomegrupo)
  }
  else if(grupoV <3 && grupoV >0){
    nomegrupo = 3
    console.log(nomegrupo)
  }
  else if(grupoV == 0){
    nomegrupo = -1
    console.log(nomegrupo)
  }

 
 
}

function draw() 
{
  background("green");

  
  



}





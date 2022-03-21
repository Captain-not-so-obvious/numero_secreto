var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Parabéns! Você concluiu meu desafio! Recarregue a página pra jogar de novo!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Só é permitido palpites de 1 a 10! Tente de novo!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Se esforce mais! O número secreto é menor que esse!";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Pense melhor! O número secreto é maior que esse!";
  }
}

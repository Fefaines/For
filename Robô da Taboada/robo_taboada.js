let denominador = prompt(
  "Olá, seja bem-vindo(a) ao Robô da Taboada!" +
    "\n\nDigite o número que deseja multiplicar"
);
let resultado = "";

for (let multiplicador = 1; multiplicador <= 20; multiplicador++) {
  resultado +=
    denominador +
    "x" +
    multiplicador +
    "=" +
    denominador * multiplicador +
    "\n";
}
alert("Confira abaixo os resultados:\n" + resultado);

const palavra = prompt(
  "Olá, seja bem vindo(a) ao pesquisador de palíndromo!\n\n" +
    "Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para frente." +
    "\n\nQual palavra deseja consultar?"
);

let palavraInvertida = "";

// palavra.length - 1 significa que ele está pegando a última letra da palavra.
// i-- significa que ele está pegando a letra anterior até chegar na primeira (0)

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]; // Para concatenar as letras, já que irá se repetir até zero, ele pegará todas as letras de trás para frente.
}
if (palavra.toLowerCase() === palavraInvertida.toLocaleLowerCase()) {
  alert("A palavra " + palavra + " é um palíndromo!");
} else {
  alert(
    "A palavra " +
      palavra +
      " não é um palíndromo!\n" +
      palavra +
      " !== " +
      palavraInvertida
  );
}

// 2. Implementar um programa que:

// - imprima a média aritmética dos números 8,9 e 7.
// - A média dos números 4, 5 e 6.
// - A soma das duas médias.
// - A média das médias.

async function ProgramaDois() {
  // A média aritmética simples é a soma de todos os elementos dividida pela quantidade deles;
  const mediaAritmetica = 8 + 9 + 7 / 3;
  console.log(`Média aritimética de 8, 9, 7: ${mediaAritmetica.toFixed(2)}`);

  // A média (Me) é calculada somando-se todos os valores de um conjunto de dados e dividindo-se pelo número de elementos deste conjunto.
  const media = 4 + 5 + 6 / 3;
  console.log(`Média de 4, 5, 6: ${media.toFixed(2)}`);

  // const somaTudoEDividePor6 = 4 + 5 + 6 + 8 + 9 + 7 / 6;
  // console.log('somaTudoEDividePor6', somaTudoEDividePor6);

  const somaDasDuasMedias = mediaAritmetica + media;
  console.log('Soma das duas médias: ', somaDasDuasMedias.toFixed(2));

  const mediaDasMedias = mediaAritmetica + media / 2;
  console.log('Média das médias: ', mediaDasMedias.toFixed(2));
}

ProgramaDois();

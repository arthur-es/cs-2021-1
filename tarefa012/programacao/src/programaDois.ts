import * as prompts from 'prompts';

const ARRAY_LENGHT = 10;

class ArrayIndexOutOfBoundsException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, ArrayIndexOutOfBoundsException.prototype);
  }
}

class InputMismatchException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, InputMismatchException.prototype);
  }
}

async function programaDois() {
  let numerosDigitados = [];
  let ultimoNumeroDigitado = -1;

  while (ultimoNumeroDigitado !== 0) {
    const { numero } = await prompts({
      type: 'number',
      name: 'numero',
      message: 'Entre com um numero: ',
      validate: (value: number) => {
        return typeof value === 'number';
      },
    });

    if (numero !== undefined) {
      if (typeof numero === 'string') {
        throw new InputMismatchException('Deve ser number!');
      }

      ultimoNumeroDigitado = numero;

      if (numerosDigitados.length > ARRAY_LENGHT) {
        console.log('Tamanho do array: ', numerosDigitados.length);

        throw new ArrayIndexOutOfBoundsException(
          `O vetor so aceita ${ARRAY_LENGHT} posicoes.`,
        );
      }
      numerosDigitados.push(ultimoNumeroDigitado);

      console.log('Numero digitado: ', ultimoNumeroDigitado);
    }
  }
}

programaDois().catch((err: any) => {
  console.error(err);
});

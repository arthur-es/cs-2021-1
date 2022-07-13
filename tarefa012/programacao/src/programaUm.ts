// 1. Crie uma classe que aceite a digitação de dois números e faça a divisão entre eles exibindo seu resultado. Sua classe deve tratar as seguintes exceções:
//   * _ArithmeticException_ quando ocorrer uma divisão por zero.
//   * _InputMismatchException_ quando o valor informado não é numérico.

import * as prompts from 'prompts';

class ArithmeticException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, ArithmeticException.prototype);
  }
}

class InputMismatchException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, InputMismatchException.prototype);
  }
}

async function divideDoisNumeros() {
  const { numeroUm } = await prompts({
    type: 'number',
    name: 'numeroUm',
    message: 'Entre com um numero: ',
    validate: (value: number) => {
      return typeof value === 'number';
    },
  });

  const { numeroDois } = await prompts({
    type: 'number',
    name: 'numeroDois',
    message: 'Entre com um outro numero: ',
    validate: (value: number) => {
      return typeof value === 'number';
    },
  });

  if (typeof numeroUm === 'string' || typeof numeroDois === 'string') {
    throw new InputMismatchException('Deve ser number!');
  }

  if (numeroDois === 0) {
    throw new ArithmeticException('Nao pode divisao por zero!');
  }

  const resultadoDivisao = numeroUm / numeroDois;

  return resultadoDivisao;
}

divideDoisNumeros().then((value) => {
  console.log(value);
});

// 4. Implementar um algoritmo que lê:

// - a porcentagem do IPI a ser acrescido no valor das peças;
// - o código da peça 1,
// - valor unitário da peça 1,
// - quantidade de peças 1
// - o código da peça 2,
// - valor unitário da peça 2,
// - quantidade de peças 2

// O programa deve calcular o valor total a ser pago e apresentar o resultado.

// Fórmula : _(valor1*quant1 + valor2*quant2)_\*_(IPI/100 + 1)_

import * as prompts from 'prompts';

async function ProgramaTres() {
  const { porcentagemIPI } = await prompts({
    type: 'number',
    name: 'porcentagemIPI',
    message: 'Porcentagem do IPI a ser aplicado: ',
    validate: (porcentagemIPI: number) => {
      return porcentagemIPI > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { codigoPeca1 } = await prompts({
    type: 'number',
    name: 'codigoPeca1',
    message: 'Codigo peca 1:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { valorPeca1 } = await prompts({
    type: 'number',
    name: 'valorPeca1',
    message: 'Valor peca 1:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { qtdPeca1 } = await prompts({
    type: 'number',
    name: 'qtdPeca1',
    message: 'Quantidade peca 1:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { codigoPeca2 } = await prompts({
    type: 'number',
    name: 'codigoPeca2',
    message: 'Codigo peca 2:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { valorPeca2 } = await prompts({
    type: 'number',
    name: 'valorPeca2',
    message: 'Valor peca 2:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const { qtdPeca2 } = await prompts({
    type: 'number',
    name: 'qtdPeca2',
    message: 'Quantidade peca 2:',
    validate: (value: number) => {
      return value > 0 ? true : 'Deve ser maior do que 0';
    },
  });

  const IPIASerCobrado =
    (valorPeca1 * qtdPeca1 + valorPeca2 * qtdPeca2) *
    (porcentagemIPI / 100 + 1);

  console.log(`IPI a ser cobrado: ${IPIASerCobrado}`);
}

ProgramaTres();

// 5. Implementar um
//    programa que:

// - leia o valor do salário mínimo e o valor do salário de um usuário,
// - calcule a quantidade de salários mínimos esse usuário ganha e imprima o
//   resultado. (1SM=R$1.045,00).

import * as prompts from 'prompts';

async function ProgramaTres() {
  const { valorSalarioMinimo } = await prompts({
    type: 'number',
    name: 'valorSalarioMinimo',
    message: 'Entre com o valor do salario minimo:',
    validate: (valorSalarioMinimo: number) => {
      return typeof valorSalarioMinimo === 'number'
        ? true
        : 'Deve ser do tipo number';
    },
  });

  const { valorSalarioRecebe } = await prompts({
    type: 'number',
    name: 'valorSalarioRecebe',
    message: 'Entre com o valor do seu salario:',
    validate: (valorSalarioRecebe: number) => {
      return typeof valorSalarioRecebe === 'number'
        ? true
        : 'Deve ser do tipo number';
    },
  });

  console.log('Valor do salario minimo: ', valorSalarioMinimo);
  console.log('Valor do salario que recebe: ', valorSalarioRecebe);
  const qtdSalarioQueRecebe = valorSalarioRecebe / valorSalarioMinimo;
  console.log(`Voce ganha: ${qtdSalarioQueRecebe.toFixed(2)} salarios minimos`);
}

ProgramaTres();

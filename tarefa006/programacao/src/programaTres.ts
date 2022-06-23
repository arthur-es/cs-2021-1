// 3. Implementar um programa que:

// - Leia o valor de um saldo e imprima-o com reajuste de 15%.

import * as prompts from 'prompts';

async function ProgramaTres() {
  const { saldo } = await prompts({
    type: 'number',
    name: 'saldo',
    message: 'Qual é o valor do saldo? ',
    validate: (saldo: number) => {
      return typeof saldo === 'number' ? true : 'Deve ser do tipo number';
    },
  });

  const saldoComReajuste15 = saldo * 1.15;

  console.log(`Saldo com reajuste de 15%: ${saldoComReajuste15.toFixed(2)}`);
}

ProgramaTres();

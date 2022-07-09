// 6. Implementar um programa que:

// - leia um número inteiro
// - e imprima o seu antecessor e seu sucessor.

import * as prompts from 'prompts';

async function ProgramaTres() {
  const { givenNumber } = await prompts({
    type: 'number',
    name: 'givenNumber',
    message: 'Entre com um numero:',
    validate: (givenNumber: number) => {
      return typeof givenNumber === 'number' ? true : 'Deve ser do tipo number';
    },
  });

  const antecessor = givenNumber - 1;
  const sucessor = givenNumber + 1;

  console.log(`Antecessor: ${antecessor}`);
  console.log(`Sucessor: ${sucessor}`);
}

ProgramaTres();

// 1. Implementar um programa que:

// - leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa
//   em dias.
// - Leve em consideração o ano com 365 dias e o mês com 30.
// - Exemplo: 3 anos, 2 meses e 15 dias = 1170 dias.

import * as prompts from 'prompts';

const DIAS_EM_UM_ANO = 365;
const DIAS_EM_UM_MES = 30;

async function ProgramaUm() {
  const { idadeEmAnosMesesEDias } = await prompts({
    type: 'text',
    name: 'idadeEmAnosMesesEDias',
    message:
      'Me fale a sua idade em anos meses e dias no formato anos, meses, dias (exemplo: 22,1,5)',
    validate: (idadeEmAnosMesesEDias: string) => {
      return idadeEmAnosMesesEDias.includes(',')
        ? true
        : 'Deve existir a separação por ,';
    },
  });

  const [anos, meses, dias] = idadeEmAnosMesesEDias.split(',');

  const qtdDeDiasVividos =
    Number(anos) * DIAS_EM_UM_ANO +
    Number(meses) * DIAS_EM_UM_MES +
    Number(dias);

  // Output solicitado na atividade:
  console.log(`${qtdDeDiasVividos} dias`);

  // Output melhor formatado:
  // console.log(`Você já viveu ${qtdDeDiasVividos} dias!`);
}

ProgramaUm();

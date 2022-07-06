interface ICreateContact {
  nome: string;
  email: string;
}

export default class Contato {
  nome: string;
  email: string;

  constructor({ nome, email }: ICreateContact) {
    this.nome = nome;
    this.email = email;
  }
}

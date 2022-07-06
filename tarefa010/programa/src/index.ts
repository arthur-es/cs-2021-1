import Contato from './Contato';

class Agenda {
  contacts: Contato[] = [];

  adicionarNovoConato(nome: string, email: string): boolean {
    const newContact = new Contato({ nome, email });

    this.contacts.push(newContact);

    return true;
  }

  buscarContatoPorNome(nome: string) {
    const index = this.contacts.findIndex((contact) => {
      return contact.nome === nome;
    });

    return {
      error: index === -1 ? true : false,
      index,
      contact: index === -1 ? undefined : this.contacts[index],
    };
  }

  buscarContatoPorEmail(email: string) {
    const index = this.contacts.findIndex((contact) => {
      return contact.email === email;
    });

    return {
      error: index === -1 ? true : false,
      index,
      contact: index === -1 ? undefined : this.contacts[index],
    };
  }

  excluirContatoPorNome(nome: string) {
    const index = this.contacts.findIndex((contact) => {
      return contact.nome === nome;
    });

    if (index) {
      this.contacts.splice(index, 1);
    }
  }

  listarTodosContatos(): Contato[] {
    console.log(this.contacts);
    return this.contacts;
  }
}

const agenda = new Agenda();

agenda.adicionarNovoConato('Arthur', 'arthur@hyerdev.com');
agenda.adicionarNovoConato('Gabriela', 'gabriela@hyerdev.com');
agenda.listarTodosContatos();

agenda.excluirContatoPorNome('Gabriela');

agenda.listarTodosContatos();

agenda.adicionarNovoConato('Sarah', 'sarah@hyerdev.com');

console.log(`Existe um Arthur? `, agenda.buscarContatoPorNome('Arthur'));
console.log(`Existe uma Sarah? `, agenda.buscarContatoPorNome('Sarah'));
console.log(`Existe uma Gabriela? `, agenda.buscarContatoPorNome('Gabriela'));
console.log(
  `Existe um usuario com email arthur@hyerdev.com? `,
  agenda.buscarContatoPorEmail('arthur@hyerdev.com'),
);

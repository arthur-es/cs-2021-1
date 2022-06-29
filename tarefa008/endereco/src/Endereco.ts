enum TipoLogradouro {
  Alameda,
  Avenida,
  Marginal,
  Rua,
  Rodovia,
  Via,
  Viela,
  Travessa
}

interface ILogradouro {
  nome: string;
  logradouro: TipoLogradouro

}

class Logradouro {
  nome: string;
  logradouro: TipoLogradouro;

  constructor({nome, logradouro}: ILogradouro) {
    this.nome = nome;
    this.logradouro = logradouro;
  }
}

enum TipoEndereco {
  Comercial,
  Residencial
}

class PessoaFisica {
  nome: string;
  sexo: string;
  dataNascimento: string;

  constructor({nome, sexo, dataNascimento}: {nome: string; sexo: string; dataNascimento: string;}) {
    this.nome = nome;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
  }
}

class Bairro {
  nome: string;
  cidade: Cidade;

  constructor({nome, cidade}: {nome: string; cidade: Cidade; }) {
    this.nome = nome;
    this.cidade = cidade;
  }
}

class Cidade {
  nome: string;
  estado: Estado;

  constructor({nome, estado}: {nome: string; estado: Estado; }) {
    this.nome = nome;
    this.estado = estado;
  }
}

class Estado {
  nome: string;
  pais: Pais;

  constructor({nome, pais}: {nome: string; pais: Pais; }) {
    this.nome = nome;
    this.pais = pais;
  }
}

class Pais {
  nome: string;

  constructor(nome: string){
    this.nome = nome
  }
}

interface IEndereco {
  consultaPorCEP(cep: string): string
}

interface IEnderecoData {
  numero: number;
  complemento: string;
  cep: number;
  logradouro: Logradouro;
  tipoEndereco: TipoEndereco;
  pessoa: PessoaFisica;
  bairro: Bairro;
}

export default class Endereco implements IEndereco {
  numero: number;
  complemento: string;
  cep: number;
  logradouro: Logradouro;
  tipoEndereco: TipoEndereco;
  pessoa: PessoaFisica;
  bairro: Bairro;


  constructor({ numero, complemento, cep, bairro, logradouro, pessoa, tipoEndereco }: IEnderecoData) {
    this.numero = numero;
    this.complemento = complemento;
    this.cep = cep;
    this.bairro = bairro;
    this.logradouro = logradouro;
    this.pessoa = pessoa;
    this.tipoEndereco = tipoEndereco;
  }

  consultaPorCEP(cep: string): string {
    return `O CEP ${cep} foi consultado!`
  }
}

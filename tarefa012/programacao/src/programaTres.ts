// 3. Crie uma classe chamada _Login_, que possua os atributos _usuario_ e _senha_ (do tipo String) e
// um método chamado fazer_login(usuario, senha), que retorna uma _boolean_. Uma exceção do tipo _LoginInvalidoException_ deve ser
// lançada quando o usuário ou a senha não estiverem corretos. Esta classe de exceção deve ser criada por você.
// O Tratamento da exceção deverá ser feito em uma classe de teste (executável).

class LoginInvalidoException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, LoginInvalidoException.prototype);
  }
}

class Login {
  usuario = 'arthur';
  senha = 'senha';

  async fazerLogin(usuario: string, senha: string) {
    if (usuario !== this.usuario || senha !== this.senha) {
      throw new LoginInvalidoException('Dados incorretos!');
    }

    return true;
  }
}

class ArithmeticException extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, ArithmeticException.prototype);
  }
}

async function programaTres() {
  const login = new Login();

  console.log(await login.fazerLogin('arthur', 'senha'));
  console.log(await login.fazerLogin('arthur', 'senhaerrada'));
}

programaTres().catch((err) => {
  console.log(err);
});

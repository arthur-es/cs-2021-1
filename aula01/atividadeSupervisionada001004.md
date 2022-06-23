### Semana 1 - Dia 25/05/2022 - Aulas 001a004 - Atividade Supervisionada

1. Elaborar uma pesquisa sobre o tema "_Rest API_".
2. Elaborar um texto de pelo menos uma página, descrito com suas próprias
   palavras, destacando:

- As definições dos conceitos envolvidos;
- As principais características deste conceito (pelo menos umas cinco).

# REST API

## O que é?

Antes de falar sobre APIs REST precisamos estabelecer o que é, afinal, uma API?
API significa Application Programming Interface (Interface de programação de
aplicações).

## Para que é utilizada?

O propósito é facilitar a comunicação entre aplicações (softwares ou componentes
de software).

## Tipos

Existem vários tipos de API...de acordo com várias visões. Vou falar e separar
por: políticas de uso, protocolos e casos de uso.

#### Políticas de uso

![1. APIs públicas ou abertas
2. APIs privadas ou internas
3. APIs de parceiros de negócio
4. APIs web"](./tipos-de-api.png)

#### Protocolos

E também é importante ressaltar que existem vários tipos de PROTOCOLOS.

1. Remote Procedure Call (RPC)
2. Service Object Access Protocol (SOAP)
3. Representational State Transfer (REST)
4. GraphQL

#### Casos de uso

E existem APIs de acordo com cada caso de uso:

1. API de dados
2. API de sistemas operacionais
3. APIs remotas
4. APIs web

# REST?

A origem do termo REST Os conceitos do REST foram submetidos à tese de doutorado
de Roy Fielding nos anos 2000, onde o princípio fundamental é usar o protocolo
HTTP para comunicação de dados.

A arquitetura REST é simples e fornece acesso aos recursos para que o cliente
REST acesse e renderize os recursos no lado do cliente. No estilo REST, URI ou
IDs globais ajudam a identificar cada recurso.

## REST API MODEL

O padrão do mundinho web atualmente são APIS REST. A maior parte dos serviços
web que você for utilizar vai estar nesse protocolo.

![Modelo das API REST](./api-rest-model.png)

Existe no REST um princípio chamado STATELESSNESS (sem estado), onde o servidor
não precisa saber em qual estado o cliente está e vice-versa. Mas o que é um
servidor e um cliente?

**Cliente**: é o componente solicitante de um serviço e envia solicitações para
vários tipos de serviços ao servidor.

**Servidor**: É o componente que é o provedor de serviços e fornece
continuamente serviços ao cliente conforme as solicitações

Nesta arquitetura ou modelo, cliente-servidor ajuda na separação de
responsabilidades entre a interface do usuário e o armazenamento de dados. Ou
seja, quando uma solicitação REST é realizada, o servidor envia uma
representação dos estados que foram requeridos.

Não há limite superior no número de clientes que podem ser atendidos por um
único servidor. Também não é obrigatório que o cliente e o servidor residam em
sistemas separados.

A comunicação entre cliente e servidor ocorre através da troca de mensagens
usando um padrão de solicitação-resposta. O cliente basicamente envia uma
solicitação de serviço e o servidor retorna uma resposta.

## Métodos HTTP

Em aplicação REST, os métodos **mais** utilizados são:

- O método **GET** é o método mais comum, geralmente é usado para solicitar que
  um servidor envie um recurso;
- O método **POST** foi projetado para enviar dados de entrada para o servidor.
  Na prática, é frequentemente usado para suportar formulários HTML;
- O método **PUT** edita e atualiza documentos em um servidor;
- O método **DELETE** que como o próprio nome já diz, deleta certo dado ou
  coleção do servidor.

# Quer se aprofundar?

Estude os conceitos para criar uma API RESTFul!

**Como ser RESTful?**

Os principais critérios para uma API ser RESTful são:

- Uniform Interface;
- Stateless;
- Cacheable;
- Client-Server;
- Layered system.

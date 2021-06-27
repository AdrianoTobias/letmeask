# Letmeask

![Homne light do projeto](/.github/letmeask-home-light.png)
![Homne dark do projeto](/.github/letmeask-home-dark.png)

<br>

## 💻 Projeto

**[Letmeask](https://letmeask-f64ea.web.app/)** é uma aplicação voltada a streamers, de modo que estes possam criar salas de perguntas e, assim, proporcionar de forma organizada, prática e democrática, a resposta a cada um de seus telespectadores. Esse projeto foi desenvolvido durante o evento de número 6 da **[Next Level Week](https://nextlevelweek.com/)**, provido pela **[Rocketseat](https://rocketseat.com.br/)**, durante os dias 20 a 27 de junho de 2021.


## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)


##  Próximo nível do projeto

Funcionalidades adicionadas ao projeto original:

- Sign in a partir da página de sala;
- Sign out;
- Redirecionamento admin após criação de sala;
- Restrição para que somente usuário logado possa interagir com as perguntas,
- Mudança de tema com localstorage e dark mode simples e
- Disposição do layout.


## 🚀 Como executar

Clonar o projeto e acessar a pasta do mesmo:

```bash
$ git clone https://github.com/AdrianoTobias/letmeask 
$ cd letmeask
```

Para iniciá-lo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O app estará disponível no browser pelo endereço http://localhost:3000.

**Atenção**: é necessário criar uma conta no [Firebase](https://firebase.google.com/), de modo a criar um projeto e, assim, disponibilizar um Realtime Database (as regras desse Database podem ser copiadas do arquivo [database.rules.json](/database.rules.json)). Ativar a autenticação pelo Google nesse projeto do Firebase. Também é preciso criar as variáveis de ambiente (arquivo ".env") com as configurações desse projeto do Firebase ou, ainda, incluir tal configuração diretamente no arquivo [firebase.ts](/src/services/firebase.ts).


## 🔖 Layout

O layout original do projeto pode ser visualizado no [Figma](http://figma.com/) através do link abaixo:

- [Layout Web](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate) 



[Adriano Tobias](https://github.com/AdrianoTobias)
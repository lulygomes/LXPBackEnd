## Requesitos para o projeto
- NodeJs
- MySQL
---
---

## Iniciando o porjeto
Clonar o projeto do  [GitHub](https://github.com/lulygomes/LXPBackEnd.git)

Entrar na pasta do projeto, e realize a instalação das dependências

```bash
yarn
```

Adicione a string de conexão com o banco de dados no arquivo ./.env, verificar o modelo de string no aquivo ./.env.example


Agora crie o banco de dados com o PrismaIo
```bash
yarn prisma migrate dev
```
Inicie o projeto
```bash
yarn dev
```

### Opicional
Dentro da pasta ./doc possui backup do Insominia e do DataBase, já com populado,
com os seguintes User: 

```json
{
  {
    "email": "lucas-adm@mail.com",
    "password": "123456"
  },

  {
    "email": "ana-teacher@mail.com",
    "password": "123456"
  },

  {
    "email": "luiz-student@mail.com",
    "password": "123456"
  },

  {
    "email": "joao-teacher@mail.com",
    "password": "123456"
  },
}
```

# ProwayComputers

 Projeto Final do treinamento de Angular do programa Start By Capgemini com a ProWay.<br>

 A atividade consiste na elaboração de uma aplicação web utilizando a abordagem SPA para a criação de um eCommerce (ProWay Computers).

## Estrutura do projeto
.
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── barra-pesquisa
│   │   ├── barra-pesquisa.component.css
│   │   ├── barra-pesquisa.component.html
│   │   ├── barra-pesquisa.component.spec.ts
│   │   └── barra-pesquisa.component.ts
│   ├── carrinho
│   │   ├── carrinho.component.css
│   │   ├── carrinho.component.html
│   │   ├── carrinho.component.spec.ts
│   │   ├── carrinho.component.ts
│   │   ├── carrinho.module.ts
│   │   └── carrinho-routing.module.ts
│   ├── carrinho.service.spec.ts
│   ├── carrinho.service.ts
│   ├── contato
│   │   ├── contato.component.css
│   │   ├── contato.component.html
│   │   ├── contato.component.spec.ts
│   │   ├── contato.component.ts
│   │   ├── contato.module.ts
│   │   └── contato-routing.module.ts
│   ├── footer
│   │   ├── footer.component.css
│   │   ├── footer.component.html
│   │   ├── footer.component.spec.ts
│   │   └── footer.component.ts
│   ├── header
│   │   ├── header.component.css
│   │   ├── header.component.html
│   │   ├── header.component.spec.ts
│   │   └── header.component.ts
│   ├── nao-encontrada
│   │   ├── nao-encontrada.component.css
│   │   ├── nao-encontrada.component.html
│   │   ├── nao-encontrada.component.spec.ts
│   │   └── nao-encontrada.component.ts
│   ├── notificacao.service.spec.ts
│   ├── notificacao.service.ts
│   ├── produtos
│   │   ├── detalhes-produto
│   │   │   ├── detalhes-produto.component.css
│   │   │   ├── detalhes-produto.component.html
│   │   │   ├── detalhes-produto.component.spec.ts
│   │   │   └── detalhes-produto.component.ts
│   │   ├── produtos.component.css
│   │   ├── produtos.component.html
│   │   ├── produtos.component.spec.ts
│   │   ├── produtos.component.ts
│   │   ├── produtos.module.ts
│   │   └── produtos-routing.module.ts
│   ├── produtos.service.spec.ts
│   ├── produtos.service.ts
│   └── produtos.ts
├── assets
├── favicon.ico
├── index.html
├── main.ts
└── styles.css


## Informações e funcionalidades do projeto

- **Cabeçalho** - O cabeçalho contem:
- [x] `Logo da ProWay`
- [x] `Menu de navegação entre as páginas da aplicação (Produtos, Carrinho e Contato)`
- [x] `Barra de pesquisa`

- **Página produtos** - Página principal da aplicação, contendo informações sobre os produtos, a partir dela é possível:
- [x] `Visualizar os detalhes dos produtos`
- [x] `Especificar a quantidade de itens`
- [x] `Adicionar produtos ao carrinho`
- [x] `Adicionar produtos ao carrinho`

- **Página carrinho**
- [x] `Visualizar os produtos adicionados ao carrinho`
- [x] `Diminuir ou amentar a quantidade do item`
- [x] `Remover o item do carrinho`
- [x] `Visualizar o valor total dos produtos adicionados ao carrinho`
- [x] `finalizar a compra`

- **Página contato**
- [x] `Formulário reativo, validando os campos e trazendo mensagens de erro caso não atinja os requerimentos do campo`

## Tecnologias utilizadas
* [Angular CLI](https://github.com/angular/angular-cli) 15.0.1.
* Node.js 18.12.1
* NPM 9.1.2

## Como instalar
* Baixe ou clone este repositório usando git clone `https://github.com/conceicao-peres/proway-computers.git`
* Dentro do diretório, instale as dependências usando `npm install`.

## Como excecutar e compilar
* Excecute `npm start`
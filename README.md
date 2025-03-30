# Marvel Legends

## Descrição
**Marvel Legends** é um projeto frontend desenvolvido com Vite e React que consome a API da Marvel para renderizar personagens da Marcel Comics. O objetivo do projeto é fornecer uma interface interativa onde os usuários podem visualizar os principais personagens da Marvel e obter informações detalhadas sobre cada um deles.

<video width="600" controls>
  <source src="src/assets/marvel-legends.mp4" type="video/mp4">
</video>

## Funcionalidades

- Listagem dos 100 principais personagens da Marvel.
- Exibição de detalhes do personagem ao clicar no nome.
- Interface amigável e responsiva.

## Tecnologias Utilizadas

- Vite
- React
- Axios
- CryptoJS
- Marvel API

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- Node.js
- npm

## Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/marvel-legends.git
```
2. Navegue até o diretório do projeto:
```bash
cd marvel-legends
```
3. Instale as dependências:
```bash
npm install
```
4. Faça uma conta em **https://developer.marvel.com/**
5. Crie as suas prórpias API_KEYS
6. Insira o IP ou Localhost para chamada das requisições em **https://developer.marvel.com/**
7. Crie um arquivo .env na raiz do projeto e adicione suas chaves da API da Marvel:
```bash
VITE_PUBLIC_API_KEY=your_public_key
VITE_PRIVATE_API_KEY=your_private_key
```

## Uso 
1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
2. Abra o navegador
```bash
http://localhost:3000
``` 

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licensa
Este projeto está licenciado sob a licença MIT.

## Autor
Projeto desenvolvido por Augusto Dantas

# Teste Técnico - Estágio em Desenvolvimento

Este repositório apresenta a minha resolução para o teste técnico proposto pela Even3.

O desafio era composto por uma parte de lógica, uma de comunicação e uma parte prática opcional. Para demonstrar minhas habilidades nas tecnologias que tenho estudado, escolhi as seguintes abordagens para as soluções:

  * **Parte 1 (Lógica):** O problema "Números Únicos" foi resolvido com um programa em **Java**.
  * **Parte 2 (Comunicação Técnica):** https://youtu.be/g945x2AlwAA?si=XLkZP1XyITx3Qdya
  * **Parte 3 (Desenvolvimento Prático):** A aplicação de "Inscrição em Evento" foi desenvolvida com a biblioteca **React**.

## Visão Geral

O objetivo deste projeto é demonstrar minhas habilidades em resolução de problemas, desenvolvimento de interfaces e boas práticas de organização de código e documentação.

## Estrutura do Repositório

  * `/NumeroUnico.java`: Contém o código da aplicação Java.
  * `/inscricao-evento`: Contém o código da aplicação React.

-----

## Aplicação Java (NumeroUnico)

Este programa Java, contido no arquivo `NumeroUnico.java`, lê uma lista de números inteiros separados por espaço e retorna apenas os números que aparecem uma única vez na lista.

### Pré-requisitos

  * Java Development Kit (JDK) instalado.

### Como Rodar

1.  **Compile o arquivo Java:**

    ```bash
    javac NumeroUnico.java
    ```

2.  **Execute a aplicação:**

    ```bash
    java NumeroUnico
    ```

3.  **Use a aplicação:**

      * O programa solicitará que você digite os números separados por espaço.
      * Após inserir os números e pressionar Enter, a aplicação exibirá a lista de números únicos.

-----

## Aplicação React (inscricao-evento)

Esta é uma aplicação simples em React para gerenciar inscrições em um evento. A aplicação permite que os usuários insiram nome e e-mail para se inscreverem, e exibe uma lista com todos os inscritos. O código principal da aplicação está em `inscricao-evento/src/App.js`.

### Pré-requisitos

  * Node.js e npm (ou Yarn) instalados.

### Como Rodar

1.  **Navegue até o diretório da aplicação:**

    ```bash
    cd inscricao-evento
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

    ou, se estiver usando Yarn:

    ```bash
    yarn install
    ```

3.  **Inicie a aplicação em modo de desenvolvimento:**

    ```bash
    npm start
    ```

    ou, se estiver usando Yarn:

    ```bash
    yarn start
    ```

4.  **Acesse a aplicação:**

      * Abra seu navegador e acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para ver a aplicação em funcionamento.

### Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts definidos no arquivo `package.json`:

  * `npm start` ou `yarn start`: Roda a aplicação em modo de desenvolvimento.
  * `npm test` ou `yarn test`: Inicia o executor de testes no modo interativo.
  * `npm run build` ou `yarn build`: Compila a aplicação para produção na pasta `build`.
  * `npm run eject` ou `yarn eject`: Remove a dependência de `react-scripts` e copia os arquivos de configuração para o seu projeto, permitindo maior customização. **Atenção: esta é uma operação irreversível.**

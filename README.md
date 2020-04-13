# desafio-cielo
O Objetivo do projeto é realizar a exposição de uma API construída com Java e Spring Boot e o consumo de seus recursos utilizando Angular, assim como a construção do template da página.

Não houve necessidade de utilizar a camada de persistência, pois, os dados foram mockados em um arquivo estático disponível no diretório de recursos estáticos `src/main/resources/static`, ao qual os dados foram requisitados com Rest Template, visto que a premissa era simular a conversão da massa de dados de um sistema legado para uma API Restful.

## Tecnologias utilizadas:
- Java 8
- Spring Boot 2.2.x
- Lombok
- Angular 9
- Angular Material
- Angular Flex Layout

## Instalação do Projeto
A aplicação Java deve ser inicializada primeiro, pois, ela é responsável pela disponibilização da API.
Como o projeto back-end foi criado com Maven, importe o projeto na IDE de sua preferência e construa para resolver as dependências. Ao inicializar o projeto, a API será disponibilizada na porta 8080.

O projeto front-end preisa ser aberto na IDE de sua preferência, será necessário rodar o comando `npm i` para instalar as dependências do projeto na máquina. Após isso, ao rodar o comando `ng serve --o` a aplicação consumidora será inicializada no navegador padrão da máquina a partir da porta 4200.

## Como usar a API
A API do back-end possui apenas dois endpoints e não possui contexto de aplicação, ou seja, para acessar os endpoints basta inserir o caminho do path diretamente após o endereço http://localhost:8080.

## Estrutura REST
A estrutura REST desenvolvida para a API pode ser conferida abaixo:

    Listar todos os recursos
    GET /resource
    
    Detalhar recurso por id
    GET /resource/{id}
    
## Oservações finais
Foram criados endpoints apenas para o consumo dos dados estáticos no back-end, porém, no front-end os dados foram cacheados no `Local Storage` para criar uma experiência mais completa, sendo possível realizar todas as operações do CRUD. Para efetuar novas requisições ao servidor back-end será necessário remover o objeto `lancamentos` do Local Storage do navegador e recarregar a página.
    

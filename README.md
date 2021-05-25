# README INMETRICS
## (api-quality-gate) Guia de configuracao do workspace de desenvolvimento


### 01. Configure o ambiente de desenvolvimento: 
api-quality-gate em NodeJS

1.1. Baixar e instalar o NodeJS 12+
>__download__: https://nodejs.org/en/download/

1.2. Faca um clone do repositorio do Bitbucket
* bitbucket
https://bitbucket.bradesco.com.br:8443/scm/ticket/api-quality-gate.git
* Recomendo que você separe um Workspace do VisualCode para esta configuração

> Execute comando: Terminal (CMD)
```
  git clone https://bitbucket.bradesco.com.br:8443/scm/ticket/api-quality-gate.git
  cd api-quality-gate
  npm install
  npm start
```

> 1.3. Referencias e Bibliotecas
  * mssql: https://tediousjs.github.io/node-mssql/ 
    
### 02.2 URIs Info
a) URIs /info
  * __healthcheck__: http://localhost:3000/api/quality-gate/info/healthcheck
  * __rdm-properties__: http://localhost:3000/api/quality-gate/info/rdm-properties
  * __domains-properties__: http://localhost:3000/api/quality-gate/info/domains


TODO:
https://imasters.com.br/back-end/api-http-rest-conceito-e-exemplo-em-node-js
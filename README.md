# Teste tecnico - Ellos Design

Landing page desenvolvida para o teste tecnico da Ellos Design, com foco principal em experiencia visual, responsividade e qualidade da interface.

Como complemento a entrega, o projeto conta com uma estrutura minima de backend em PHP e MySQL apenas para viabilizar o envio e o registro dos dados do formulario.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL

## Estrutura do projeto

- `index.html`: pagina principal da landing page
- `assets/css/styles.css`: estilos, layout e responsividade
- `assets/js/app.js`: animacoes, interacoes e envio do formulario
- `api/submit.php`: endpoint responsavel por validar e salvar os dados
- `database.sql`: script SQL para criar a estrutura do banco
- `config.example.php`: exemplo de configuracao local
- `config.php`: arquivo de configuracao com os dados do banco

## O que foi desenvolvido

- Landing page responsiva
- Hero principal com destaque visual e formulario
- Secoes de acolhimento, beneficios, depoimentos e chamada final
- Identidade visual personalizada
- Validacao basica dos campos no frontend e backend
- Integracao minima com MySQL para gravar os leads enviados

## Diferenciais

- Interface com proposta visual mais elaborada do que um wireframe basico
- Estrutura enxuta e organizada para facilitar manutencao e apresentacao
- Experiencia pensada para transmitir acolhimento, clareza e confianca
- Foco principal na camada de front-end, com backend mantido apenas como apoio funcional

## Abordagem do projeto

O foco principal desta entrega foi o front-end, com maior atencao para identidade visual, composicao da landing page, responsividade e experiencia do usuario.

A parte de backend foi mantida propositalmente enxuta, somente para permitir o recebimento do formulario e o registro das informacoes no banco de dados.

## Como executar

### Visualizar apenas o frontend

Se a ideia for apenas visualizar a interface, basta abrir o arquivo `index.html` no navegador.

### Executar com backend e banco de dados

Para testar o formulario com salvamento no banco, e necessario ter PHP e MySQL configurados localmente.

#### Requisitos

- PHP 8+ recomendado
- MySQL
- Navegador web

#### Passo a passo

1. Copie `config.example.php` para `config.php`.
2. Edite o arquivo `config.php` com host, nome do banco, usuario e senha.
3. Crie um banco de dados MySQL no seu ambiente local.
4. Execute o script `database.sql` para criar a tabela utilizada pelo projeto.
5. Inicie um servidor local com PHP na raiz do projeto.

Exemplo com o servidor embutido do PHP:

```bash
php -S localhost:8000
```

Depois, acesse:

```txt
http://localhost:8000
```

## Como testar o formulario

1. Abra a pagina no navegador.
2. Preencha os campos nome, e-mail, telefone e objetivo.
3. Envie o formulario.
4. Confira se a mensagem de sucesso aparece na interface.
5. Verifique no banco se o registro foi inserido na tabela `leads`.

## Observacoes

- O projeto foi mantido simples e direto, pensando em clareza de codigo e facilidade de avaliacao.
- A prioridade da entrega foi a qualidade da interface e da experiencia no front-end.
- O backend utiliza `PDO` e `prepared statements` para realizar a insercao dos dados no MySQL.
- Caso a configuracao do banco esteja incorreta, o endpoint retornara erro ao tentar salvar o formulario.

## Possiveis melhorias futuras

- Migrar os estilos para Sass
- Adicionar mascaras e validacoes extras no formulario
- Otimizar imagens e assets para producao
- Publicar o projeto em ambiente online
- Expandir a landing page com novas secoes

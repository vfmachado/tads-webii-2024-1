## Entendendo EJS: Uma Ferramenta para Templates Dinâmicos em JavaScript

**Introdução**

No desenvolvimento web, a separação entre a lógica do servidor e a apresentação no cliente é fundamental para criar aplicações eficientes e de fácil manutenção. Aqui entra o EJS (Embedded JavaScript templates), uma ferramenta poderosa que permite a incorporação de JavaScript diretamente em templates HTML.

**O Que é EJS?**

EJS é uma linguagem de templating que permite gerar marcação HTML com JavaScript simples. Não é uma linguagem de programação per se, mas uma forma de usar código JavaScript para produzir HTML dinâmico. A ideia é que você possa escrever JavaScript em seu HTML, permitindo a geração de páginas de maneira dinâmica e interativa.

**Como o EJS Funciona?**

O EJS usa 'tags' especiais que permitem a execução de JavaScript dentro do HTML. Estas tags são `<% %>` para comandos JavaScript e `<%= %>` para inserir valores que serão renderizados na página. Por exemplo, você pode usar um loop em EJS para exibir uma lista de itens, ou usar uma condição para decidir quais elementos mostrar.

**Vantagens do EJS**

1. **Simplicidade**: EJS usa JavaScript puro, o que significa que não há necessidade de aprender uma nova sintaxe se você já conhece JavaScript.

2. **Flexibilidade**: Pode ser integrado com várias frameworks JavaScript, como Express.js, permitindo criar aplicações web completas e robustas.

3. **Eficiência**: Facilita a renderização de páginas do lado do servidor, o que pode melhorar o tempo de carregamento da página e a experiência do usuário.

**Desvantagens do EJS**

1. **Manutenção**: Em projetos grandes, a manutenção pode ser desafiadora, pois mistura código HTML e JavaScript.

2. **Performance**: Embora seja eficiente, o EJS pode não ser a melhor escolha para aplicações extremamente grandes ou complexas, onde frameworks mais avançados seriam mais apropriados.

Claro, posso te fornecer um tutorial básico sobre como utilizar o EJS, incluindo como trabalhar com includes, condições e loops. Este tutorial pressupõe que você já tem um conhecimento básico de Node.js e Express, pois são comumente usados com EJS.

---

# Tutorial de EJS: Includes, Condições e Loops

## Configuração Inicial

Primeiro, você precisa configurar um projeto Node.js com Express e EJS. Se ainda não tiver feito isso, siga estes passos:

1. **Crie um novo projeto Node.js:**
   ```bash
   mkdir meuProjetoEJS
   cd meuProjetoEJS
   npm init -y
   ```

2. **Instale o Express e o EJS:**
   ```bash
   npm install express ejs
   ```

3. **Configure o Express para usar EJS:**
   Em seu arquivo principal (geralmente `app.js` ou `index.js`), adicione:
   ```javascript
   const express = require('express');
   const app = express();

   app.set('view engine', 'ejs');

   app.get('/', (req, res) => {
     res.render('index');
   });

   app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
   ```

## Estrutura de Diretórios

Crie uma pasta chamada `views` na raiz do seu projeto. Dentro dela, você vai colocar seus arquivos EJS. Por exemplo, `index.ejs`.

## Trabalhando com Includes

O EJS permite que você inclua arquivos, o que é útil para componentes reutilizáveis, como cabeçalhos e rodapés.

1. **Crie um arquivo de cabeçalho:**
   Em `views`, crie `header.ejs` e adicione algum conteúdo HTML:

   ```html
   <!-- views/header.ejs -->
   <header>
     <h1>Meu Site Incrível</h1>
   </header>
   ```

2. **Inclua o cabeçalho em seu arquivo principal:**
   No `index.ejs`, use `<%- include('header') %>` para incluir o cabeçalho:

   ```html
   <!-- views/index.ejs -->
   <%- include('header') %>
   <p>Conteúdo da página principal.</p>
   ```

## Usando Condições

EJS permite que você use instruções condicionais em seus templates.

1. **Exemplo de uma condição simples:**
   Vamos passar uma variável `user` do servidor e exibi-la condicionalmente:

   ```javascript
   // No seu arquivo de rotas (app.js ou similar)
   app.get('/', (req, res) => {
     res.render('index', { user: 'João' });
   });
   ```

   ```html
   <!-- views/index.ejs -->
   <%- include('header') %>
   <% if (user) { %>
     <p>Bem-vindo, <%= user %>!</p>
   <% } else { %>
     <p>Bem-vindo, visitante!</p>
   <% } %>
   ```

## Implementando Loops

Loops podem ser usados para renderizar listas de itens.

1. **Exemplo de um loop:**
   Suponha que você queira exibir uma lista de tarefas:

   ```javascript
   // No seu arquivo de rotas
   app.get('/', (req, res) => {
     res.render('index', { tasks: ['Comprar pão', 'Estudar EJS', 'Jogar videogame'] });
   });
   ```

   ```html
   <!-- views/index.ejs -->
   <%- include('header') %>
   <ul>
     <% tasks.forEach(task => { %>
       <li><%= task %></li>
     <% }); %>
   </ul>
   ```


**Conclusão**

O EJS é uma ferramenta excelente para desenvolvedores que desejam criar aplicações web dinâmicas utilizando JavaScript e HTML. Sua simplicidade e eficiência o tornam ideal para projetos pequenos a médios, embora possa apresentar desafios em projetos de maior escala. Como qualquer ferramenta, sua eficácia depende do contexto em que é utilizada.


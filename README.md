<h1 align="center">Projeto de Gestão de Funcionários (Full-stack springboot + react.js)</h1>

<p align="center">Este é um projeto experimental para gestão de funcionários, com foco no back-end, e integração com o front-end utilizando React.</p>

<h2>Iniciando o Projeto</h2>

<h3>1. Clone o Projeto</h3>

<p>Primeiro, você precisa clonar este repositório:</p>

<pre><code>git clone &lt;https://github.com/EduardoMeloDeOliveira/JAVA-SPRINGBOOT-FULLSTACK-EMPLOYERS.git&gt;</code></pre>

<h3>2. Inicie o Back-End</h3>

<p>Agora, vá para a pasta do back-end:</p>

<pre><code>cd ems-backend</code></pre>

<p>Certifique-se de que está na pasta <code>ems-backend</code>.</p>

<p>Com o Docker instalado e configurado, inicie o banco de dados utilizando o seguinte comando:</p>

<pre><code>docker-compose up -d</code></pre>

<p>Perfeito! Agora seu banco de dados está rodando.</p>

<p>Logo após, inicie sua aplicação back-end diretamente no IntelliJ clicando no botão de <b>play</b> ou rodando a aplicação pela IDE.</p>

<p><strong>Pronto!</strong> Seu back-end já está de pé e conectado ao banco de dados.</p>

<h3>3. Inicie o Front-End</h3>

<p>Agora, vá para a pasta do front-end:</p>

<pre><code>cd ems-frontend</code></pre>

<p>Em seguida, instale as dependências do projeto:</p>

<pre><code>npm i</code></pre>

<p>Depois de instalar as dependências, você pode iniciar o front-end com o comando:</p>

<pre><code>npm run dev</code></pre>

<p><strong>Pronto!</strong> Agora toda a nossa aplicação fullstack já está rodando com o front conectado ao back e o back conectado ao banco.</p>

<h2>Importante</h2>

<p><strong>Lembre-se:</strong> Não derrube o container do banco de dados nem a aplicação back-end enquanto estiver utilizando o sistema.</p>

<p>Este é apenas um projeto experimental e, como o foco maior foi o back-end, <strong>não houve implementação de proteção de rotas</strong> no front-end.</p>

<h2>Nota Pessoal</h2>

<p>Este projeto foi mais voltado para eu me aprofundar no uso de <strong>React</strong> e aprimorar minha experiência com a integração entre back-end e front-end.</p>

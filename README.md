<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMS - Employee Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2 {
            color: #2c3e50;
        }
        p {
            margin-bottom: 20px;
        }
        code {
            background-color: #f4f4f4;
            padding: 4px;
            border-radius: 4px;
            font-size: 16px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            font-size: 16px;
            overflow: auto;
        }
        .highlight {
            color: #e74c3c;
        }
        .step {
            margin-bottom: 20px;
        }
        .note {
            color: #e67e22;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Projeto de Gestão de Funcionários (Back-End)</h1>
    <p>Este é um projeto experimental para gestão de funcionários, construído com um foco maior no back-end e integração com o front-end utilizando React.</p>

    <h2>Iniciando o Projeto</h2>

    <div class="step">
        <h3>1. Clone o Projeto</h3>
        <p>Primeiro, você precisa clonar este repositório:</p>
        <pre><code>git clone &lt;URL_DO_REPOSITORIO&gt;</code></pre>
    </div>

    <div class="step">
        <h3>2. Inicie o Back-End</h3>
        <p>Agora, vá para a pasta do back-end:</p>
        <pre><code>cd ems-backend</code></pre>
        <p>Certifique-se de que está na pasta <span class="highlight">ems-backend</span>.</p>
        <p>Com o Docker instalado e configurado, inicie o banco de dados utilizando o seguinte comando:</p>
        <pre><code>docker-compose up -d</code></pre>
        <p>Perfeito, agora seu banco de dados está de pé.</p>
        <p>Logo após, inicie sua aplicação back-end diretamente no IntelliJ clicando no botão de <span class="highlight">play</span> ou rodando a aplicação pela IDE.</p>
        <p><strong>Pronto!</strong> Seu back-end já está rodando e conectado ao banco de dados.</p>
    </div>

    <div class="step">
        <h3>3. Inicie o Front-End</h3>
        <p>Agora, vá para a pasta do front-end:</p>
        <pre><code>cd ems-frontend</code></pre>
        <p>Em seguida, instale as dependências do projeto executando o seguinte comando:</p>
        <pre><code>npm i</code></pre>
        <p>Depois de instalar as dependências, você pode iniciar o front-end com o comando:</p>
        <pre><code>npm run dev</code></pre>
        <p><strong>Pronto!</strong> Agora toda a nossa aplicação fullstack já está de pé com o front conectado ao back e o back conectado ao banco.</p>
    </div>

    <h2>Importante</h2>
    <p class="note">Lembre-se de não derrubar o container do banco de dados nem a aplicação back-end enquanto estiver utilizando o sistema.</p>
    <p class="note">Este é apenas um projeto experimental, e como foco maior foi o back-end, não houve implementação de proteção de rotas no front-end.</p>

    <h2>Nota Pessoal</h2>
    <p>Este projeto foi mais voltado para eu me aprofundar no uso de <strong>React</strong> e aprimorar minha experiência com a integração entre back-end e front-end.</p>
</body>
</html>

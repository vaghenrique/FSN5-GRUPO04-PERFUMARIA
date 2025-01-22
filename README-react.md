# Getting Started with Create React App
Certifique-se de ter o Node.js e o npm (ou Yarn) instalados no seu sistema

-npx create-react-app minha-aplicacao
-cd minha-aplicacao
-npm start

Se aparecer algum erro
-npm install --save-dev web-vitals

npm install react-router-dom redux react-redux
npm install react-router-dom redux react-redux styled-components

### `npm start`

Reinstalar Pacotes do Node
Às vezes, problemas podem ocorrer devido a pacotes corrompidos. Tente remover a pasta node_modules e o arquivo package-lock.json, e depois reinstale os pacotes:

bash
rm -rf node_modules package-lock.json
npm install

npm audit fix
npm audit fix --force
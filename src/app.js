const express = require('express');

// ...
const routerAuth = require('./router/authRouter');
const routerUser = require('./router/userRouter');

const app = express();

app.use(express.json());

// ...
app.use('/', routerAuth);
app.use('/', routerUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

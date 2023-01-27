const express = require('express');

// ...
const routerAuth = require('./router/authRouter');
const routerUser = require('./router/userRouter');
const routerCategory = require('./router/categoryRouter');

const app = express();

app.use(express.json());

// ...
app.use('/', routerAuth);   
app.use('/', routerUser);
app.use('/', routerCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = 'Je suis serv1';
});

app.listen(3071);

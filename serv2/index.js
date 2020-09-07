const Koa = require('koa');
const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = 'Je suis serv2';
});

app.listen(3072);

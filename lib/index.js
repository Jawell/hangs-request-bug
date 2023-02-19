const path = require("path");
const fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

const app = fastify({ logger: true });

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "static"),
  index: "foo.html",
});

app.register(require('@fastify/multipart'))

app.post('/foo', async function (req, reply) {
  await req.file()

  reply.send({})
})

app.listen({
  port: 8888,
});

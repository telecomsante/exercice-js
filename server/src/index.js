const process = require('node:process');
const fastify = require('fastify')({
  logger: true,
});
const fastifyMongo = require('@fastify/mongodb');
const helloworldRoutes = require('./controllers/helloworld.controller');

const start = async () => {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: 'mongodb://localhost/hoppen'
  });

  await fastify.register(helloworldRoutes);

  try {
    await fastify.listen({port: 3000});
  } catch (error) {
    fastify.logger.error(error);
    process.exit(1);
  }
};

start();


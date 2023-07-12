const helloWorldService = require('../services/helloworld.service');

module.exports = async function (fastify) {
  fastify.get(
    '/helloworld',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              hello: {type: 'string'},
            },
          },
        },
      },
    },
    async (request, reply) => {
      await reply.status(200).send({hello: helloWorldService.helloWorld()});
    },
  );
};

const { config, reply, response } = require('@firstandthird/arc-rapptor');
exports.handler = response(async (req) => {
  return reply.json(config);
});

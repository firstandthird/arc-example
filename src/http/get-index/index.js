const { reply, response } = require('@firstandthird/arc-rapptor');
exports.handler = response(async (req) => {
  return reply.html('<h1>hi</h1>');
});

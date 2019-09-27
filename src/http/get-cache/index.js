const { log, response, reply } = require('@firstandthird/arc-rapptor');
const { cacheReply } = require('@firstandthird/arc-cache');
const wait = require('util').promisify(setTimeout);
const cacheSettings = {
  log
};
exports.handler = response(cacheReply(async (req) => {
  await wait(3000);
  return reply.text(new Date());
}, cacheSettings));


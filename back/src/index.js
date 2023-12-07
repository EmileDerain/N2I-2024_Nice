import { fastify } from "./api/rest/fastify.js";
import { startWebSocket } from "./api/websocket/websocket.js";

try {
    startWebSocket(3007);  // Setting up Websocket
    await fastify.listen({ port: 3008 })  // Setting up REST API
} 

catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
  
  
import { fastify } from "./rest/fastify.js";
import { startWebSocket } from "./websocket/websocket.js";

try {
    startWebSocket();  // Setting up Websocket
    await fastify.listen({ port: 3008 })  // Setting up REST API
} 

catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
  
  
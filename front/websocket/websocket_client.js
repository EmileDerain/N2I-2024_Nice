import { onMessage } from "./ws_helpers/ws_event_helper.js";

export function startWebSocket() {
    const socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener("open", (event) => console.log("WebSocket connected!"));
    socket.addEventListener("message", (event) => onMessage(socket, event.data));
    socket.addEventListener("close", (event) => console.log("Client is disconnected."));
}
 

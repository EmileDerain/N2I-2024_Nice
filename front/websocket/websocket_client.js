import { onMessage } from "./ws_helpers/ws_event_helper.js";

export let userId;
export function setUserId(id){
    console.log("userId is now " + id);
    userId = id;
}

export let socket;
export function startWebSocket() {
    socket = new WebSocket("ws://puissancecraft.connect4.academy:3007");

    socket.addEventListener("open", (event) => console.log("WebSocket connected!"));
    socket.addEventListener("message", (event) => onMessage(event.data));
    socket.addEventListener("close", (event) => console.log("Client is disconnected."));
}
 

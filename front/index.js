import { onScore } from "./game/on_score.js";
import { startWebSocket } from "./websocket/websocket_client.js";

window.addEventListener('load', startWebSocket);

export function updateBar(Year) {
    let progress =  (Year - 1882) / (2100 - 1882) * 100;
    document.getElementById("time-bar-inside").style.width = `${progress}%`;

}
import { onScore } from "./game/on_score.js";
import { startWebSocket } from "./websocket/websocket_client.js";

window.addEventListener('load', startWebSocket);

export function updateBar(Year) {
    let progress =  (Year - 1882) / (2100 - 1882) * 100;
    // console.log("progress", progress);
    document.getElementById("progress-bar").style.width = `${progress}%`;
    updatePlanet(Year)
}

function updatePlanet(year){
    if(year == 2000){
        document.getElementById("terre").src = "ressources/terre_2.png"
    }
    else if(year == 2100){
        document.getElementById("terre").src = "ressources/terre_3.png"
    }
}

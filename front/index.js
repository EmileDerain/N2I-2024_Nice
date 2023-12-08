import { startWebSocket } from "./websocket/websocket_client.js";

window.addEventListener('load', startWebSocket);

document.addEventListener('keydown', function(event) {
    console.log("event", event.key);
    if (event.key === ' ' || event.code === 'Space') {
        document.location.href="./egg.html"; 
    }
});    

export function updateBar(Year) {
    let progress =  (Year - 1882) / (2100 - 1882) * 100;
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


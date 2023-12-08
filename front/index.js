import { startWebSocket } from "./websocket/websocket_client.js";

window.addEventListener('load', init);

function init(){
    startWebSocket()
    notifManagement()
    notifCreator("Introduction", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat dui, fringilla nec ullamcorper in, ultricies ac lorem. Integer maximus ac ipsum ut tristique. Fusce fringilla imperdiet ex, a pharetra mauris vestibulum at. Suspendisse feugiat sem non metus vulputate, sed pretium erat sollicitudin. Nulla sed orci eu ante rutrum rutrum ac non neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque quis metus neque. Sed pharetra arcu non venenatis lacinia. Nullam suscipit imperdiet dictum. Vivamus sed laoreet dolor")
}

document.addEventListener('keydown', function(event) {
    console.log("event", event.key);
    if (event.key === ' ' || event.code === 'Space') {
        document.location.href="./egg.html";
    }
});

export function updateBar(Year) {
    let progress =  (Year - 1882) / (2100 - 1882) * 100;
    // console.log("progress", progress);
    document.getElementById("progress-bar").style.width = `${progress}%`;
    updatePlanet(Year)
}

function updatePlanet(year){
    if(year == 2000){
        document.getElementById("terre").src = "ressources/terre_2.png"
        launchNotif()
    }
    else if(year == 2100){
        document.getElementById("terre").src = "ressources/terre_3.png"
    }
}

function notifManagement(){
    let croix = document.getElementById("notif-croix");
    croix.addEventListener("click", ()=>{document.getElementById("notif").classList.add("hide")})
}


function notifCreator(titre, texte){
    document.getElementById("notif-titre").innerText=titre;
    document.getElementById("notif-texte").innerText=texte;
    document.getElementById("notif").classList.remove("hide")
}

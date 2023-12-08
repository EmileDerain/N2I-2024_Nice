import { startWebSocket } from "./websocket/websocket_client.js";

window.addEventListener('load', init);

function init(){
    startWebSocket()
    notifManagement()
    let intro = "Bienvenue dans 'Green Of Earth', le jeu où votre mission est d'atteindre l'année 2100 en évitant les crises climatiques et financières. Pour y parvenir, explorez le menu de droite pour acheter des améliorations stratégiques. Chaque amélioration génère des revenus, mais attention, elles ont aussi un coût écologique. Équilibrez habilement vos investissements pour prospérer sans compromettre l'avenir de la planète. Serez-vous capable de guider votre civilisation vers un avenir prospère et durable avant d'atteindre le tournant crucial de l'an 2100 ? Bonne chance !"
    notifCreator("Introduction", intro)
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
    document.getElementById("notif-text").innerText=texte;
    document.getElementById("notif").classList.remove("hide")
}

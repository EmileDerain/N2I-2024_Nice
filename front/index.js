import { startWebSocket } from "./websocket/websocket_client.js";
let firstAge = false
let secondAge = false

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

export function updatePlanet(year){
    if(year == 2000 && firstAge == false){
        firstAge = true
        document.getElementById("terre").src = "ressources/terre_2.png"
        let text = "Bienvenue dans la nouvelle ère industrielle, où l'homme amorce une ère de prospérité financière grâce au capitalisme effréné. Cependant, ce progrès économique s'accompagne malheureusement du début de problèmes environnementaux, symbolisés par l'émergence de la pollution. Alors que les gains financiers abondent, il devient impératif de trouver un équilibre entre la croissance économique et la préservation de notre environnement pour assurer un avenir durable. Nous entrons dans une période cruciale où les choix que nous faisons aujourd'hui auront un impact significatif sur le monde de demain."
        notifCreator("Nouvelle ère", text)
    }
    else if(year == 2100 && secondAge == false){
        secondAge = true
        document.getElementById("terre").src = "ressources/terre_3.png"
        let text = "Bienvenue dans la nouvelle ère, l'ère cyberpunk, où les excès de l'exploitation des ressources naturelles ont atteint des niveaux critiques. Face à cette situation dangereuse, le temps est venu de prendre des décisions cruciales pour sauver notre planète. Les choix que nous faisons aujourd'hui détermineront le sort de notre avenir. Engagez-vous dans des actions significatives et responsables pour restaurer l'équilibre entre la technologie et la nature, et façonnez un avenir durable dans cette ère où la survie de la planète dépend de vos choix. La quête pour préserver notre monde commence maintenant. À vous de jouer !"
        notifCreator("Nouvelle ère", text)
    }
}

function notifManagement(){
    let croix = document.getElementById("notif-croix");
    croix.addEventListener("click", ()=>{document.getElementById("notif").classList.add("hide")})
}


export function notifCreator(titre, texte){
    document.getElementById("notif-titre").innerText=titre;
    document.getElementById("notif-text").innerText=texte;
    document.getElementById("notif").classList.remove("hide")
}

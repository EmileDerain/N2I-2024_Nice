import { tickInterval } from "./on_init.js";
import { notifCreator } from "../index.js";


export function onEnd(endData) {
    const endType = endData.type;
    clearInterval(tickInterval);
    switch(endType) {
        case 0:
            console.log("Lose $");
            let text = "C'est avec regret que nous vous informons de votre défaite. Votre entreprise a malheureusement subi les affres d'une crise financière dévastatrice, la conduisant irrémédiablement vers une chute inévitable. Nous compatissons face à cette épreuve et espérons que vous pourrez rebondir malgré ces circonstances difficiles. Courage pour de futurs défis et restez déterminé dans vos projets à venir."
            notifCreator("Perdu", text);
            document.getElementById("terre").src = "ressources/terre_defaite.png"    
            break;
        
        case 1:
            console.log("Lose T°");
            let texte = "Regrettant de vous informer que votre parcours s'achève ici. Votre entreprise a subi les ravages d'une crise climatique, alors que les tentatives pour retarder le réchauffement planétaire se sont avérées infructueuses. Les conséquences sont inévitables, et votre société doit maintenant faire face aux défis résultant de cette situation. Un rappel poignant de l'importance cruciale de prendre des mesures efficaces pour préserver notre planète et assurer un avenir durable."
            notifCreator("Perdu", texte);
            document.getElementById("terre").src = "ressources/terre_defaite.png"    
            break;
        
        case 2:
            console.log("Win");
            let win_text = "Félicitations ! Grâce à votre utilisation judicieuse de techniques écologiques, vous avez réussi à sauver la planète. Vos efforts ont contribué à maintenir une température acceptable, limitant ainsi les dégâts du réchauffement climatique. Votre engagement en faveur de pratiques respectueuses de l'environnement a fait toute la différence, préservant notre belle planète pour les générations futures. Merci pour votre contribution exceptionnelle à la sauvegarde de notre foyer commun."
            notifCreator("Victoire", win_text);
            document.getElementById("terre").src = "ressources/terre_victoire.png"    
            break;
    }
    
}

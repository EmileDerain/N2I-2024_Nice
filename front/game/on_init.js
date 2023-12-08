export let tickInterval;
import {sendUpgrade, sendTick} from "../websocket/ws_helpers/event_sender.js";
import {onScore, setHeader} from "./on_score.js";

export function onInit(game) {
    console.log("game", game);
    // document.getElementById("c1").innerText = game.upgrades[0].name;

    var newDivVert = document.getElementById("list-carte")
    tickInterval = setInterval(sendTick, 1000)

    for (let i = 0; i < game.upgrades.length; i++) {
        var newDivGlobal = document.createElement("div");
        newDivGlobal.classList.add("carte");
        newDivGlobal.id = "carte_id_" + game.upgrades[i].id

        var newButtonGlobal = document.createElement("button")
        newButtonGlobal.classList.add("carte-button")

        newButtonGlobal.addEventListener('click', function () {
            console.log("game.upgrades[i].id", game.upgrades[i].id),
                sendUpgrade(game.upgrades[i].id)
        });



        var newDivTotIma1 = document.createElement("div");
        var newDivIma1 = document.createElement("div");
        var newImageIma1 = document.createElement("img")

        newDivTotIma1.classList.add("carte-button_colum")
        newDivIma1.classList.add("carte-button-image-left")

        newImageIma1.src = "ressources/" + game.upgrades[i].path
        newImageIma1.classList.add("carte-img")

        newDivIma1.appendChild(newImageIma1)

        newDivTotIma1.appendChild(newDivIma1)



        var newDiv02 = document.createElement("div");
        var newDiv03 = document.createElement("div");
        var newDiv04 = document.createElement("div");

        newDiv02.classList.add("carte-button-text-left");
        newDiv03.classList.add("carte-button-text-left-name");
        newDiv04.classList.add("carte-button-text-left-price");

        newDiv03.innerText = game.upgrades[i].name
        newDiv04.innerText = "Prix : " + game.upgrades[i].cost
        newDiv04.id = "prix_id_" + game.upgrades[i].id


        newDiv02.appendChild(newDiv03)
        newDiv02.appendChild(newDiv04)

        newDivTotIma1.appendChild(newDiv02)

        newButtonGlobal.appendChild(newDivTotIma1)

        var newDivGlobBis = document.createElement("div");
        newDivGlobBis.classList.add("carte-button-image-right");


        var newDiv12 = document.createElement("div");
        var newDiv13 = document.createElement("div");
        var newDiv14 = document.createElement("div");

        var newImage11 = document.createElement("img")

        newDiv12.classList.add("carte-button-image-right-argent");
        newDiv13.classList.add("carte-button-image-right-argent-left");

        newImage11.src = "ressources/dollar.png"
        newImage11.classList.add("argent-left")

        newDiv14.innerText = game.upgrades[i].money_generated

        newDiv13.appendChild(newImage11)

        newDiv12.appendChild(newDiv13)
        newDiv12.appendChild(newDiv14)

        newDivGlobBis.appendChild(newDiv12)


        var newDiv22 = document.createElement("div");
        var newDiv23 = document.createElement("div");
        var newDiv24 = document.createElement("div");

        var newImage21 = document.createElement("img")

        newDiv22.classList.add("carte-button-image-right-argent");
        newDiv23.classList.add("carte-button-image-right-argent-left");

        newImage21.src = "ressources/temp.png"
        newImage21.classList.add("argent-left")

        newDiv24.innerText = game.upgrades[i].temperature_generated
        newDiv24.id = "temperature_generated_id_" + game.upgrades[i].id


        newDiv23.appendChild(newImage21)

        newDiv22.appendChild(newDiv23)
        newDiv22.appendChild(newDiv24)

        newDivGlobBis.appendChild(newDiv22)

        var newDiv32 = document.createElement("div");
        var newDiv33 = document.createElement("div");
        var newDiv34 = document.createElement("div");

        var newImage31 = document.createElement("img")

        newDiv32.classList.add("carte-button-image-right-argent");
        newDiv33.classList.add("carte-button-image-right-argent-left");
        newDiv34.id = "upgrade_id_" + game.upgrades[i].id

        newImage31.src = "ressources/compt.png"
        newImage31.classList.add("argent-left")

        newDiv34.innerText = 0

        newDiv33.appendChild(newImage31)

        newDiv32.appendChild(newDiv33)
        newDiv32.appendChild(newDiv34)

        newDivGlobBis.appendChild(newDiv32)

        newButtonGlobal.appendChild(newDivGlobBis)

        newDivGlobal.appendChild(newButtonGlobal)

        // if (!game.upgrades[i].isUnlock)
        //     newDivGlobal.style.display = "none"

        newDivVert.appendChild(newDivGlobal)

        setHeader(game.money,game.temperature)
    }
}

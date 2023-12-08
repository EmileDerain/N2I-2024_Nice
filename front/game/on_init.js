export function onInit(game) {
    console.log("game", game);
    // document.getElementById("c1").innerText = game.upgrades[0].name;

    var newDivVert = document.getElementById("list-carte")

    for (let i = 0; i < game.upgrades.length; i++) {
        var newDivGlobal = document.createElement("div");
        newDivGlobal.classList.add("carte");

        var newButtonGlobal = document.createElement("button")
        newButtonGlobal.classList.add("carte-button")

        var newDivIma1 = document.createElement("div");
        var newImageIma1 = document.createElement("img")

        newDivIma1.classList.add("carte-button-image-left")

        newImageIma1.src = game.upgrades[i].image_path
        // console.log("game.upgrades[i].image_path", game.upgrades[i])
        newImageIma1.classList.add("carte-button-image-left")

        newDivIma1.appendChild(newImageIma1)
        newButtonGlobal.appendChild(newDivIma1)

        var newDivGlobBis = document.createElement("div");
        newDivGlobBis.classList.add("carte-button-image-right");


        var newDiv12 = document.createElement("div");
        var newDiv13 = document.createElement("div");

        var newImage11 = document.createElement("img")

        newDiv12.classList.add("carte-button-image-right-argent");
        newDiv13.classList.add("carte-button-image-right-argent-left");

        newImage11.src = "ressources/dollar.png"
        newImage11.classList.add("argent-left")

        newDiv13.appendChild(newImage11)
        newDiv12.appendChild(newDiv13)

        newDivGlobBis.appendChild(newDiv12)


        var newDiv22 = document.createElement("div");
        var newDiv23 = document.createElement("div");

        var newImage21 = document.createElement("img")

        newDiv22.classList.add("carte-button-image-right-argent");
        newDiv23.classList.add("carte-button-image-right-argent-left");

        newImage21.src = "ressources/temp.png"
        newImage21.classList.add("argent-left")

        newDiv23.appendChild(newImage21)
        newDiv22.appendChild(newDiv23)

        newDivGlobBis.appendChild(newDiv22)

        var newDiv32 = document.createElement("div");
        var newDiv33 = document.createElement("div");

        var newImage31 = document.createElement("img")

        newDiv32.classList.add("carte-button-image-right-argent");
        newDiv33.classList.add("carte-button-image-right-argent-left");

        newImage31.src = "ressources/compt.png"
        newImage31.classList.add("argent-left")

        newDiv33.appendChild(newImage31)
        newDiv32.appendChild(newDiv33)

        newDivGlobBis.appendChild(newDiv32)

        newButtonGlobal.appendChild(newDivGlobBis)

        newDivGlobal.appendChild(newButtonGlobal)

        newDivVert.appendChild(newDivGlobal)
    }
}

export function onInit(game) {
    console.log(game);
    document.getElementById("c1").innerText = game.upgrades[0].name;
}
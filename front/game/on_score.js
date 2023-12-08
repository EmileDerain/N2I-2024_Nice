import { updateBar } from "../index.js";

export function onScore(scores) {
    // console.log(scores);
    setHeader(scores.money, scores.temperature);
    updateBar(scores.year);

}


export function setHeader(money,temperature){
    document.getElementById("globalMoney").innerText = traduceMoney(money);
    document.getElementById("globalTemperature").innerText = "+" + temperature;

    // Calculate the color based on the gradient
    var red = Math.min(255, Math.floor(255 * (temperature / 4)));
    var green = Math.min(255, Math.floor(255 * ((4 - temperature) / 4)));
    var blue = 0;

    // Set the color
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("globalTemperature").style.color = color;
}

export function traduceMoney(money) {
    var moneyTraduced = money;
    if (money >= 1000000000) {
        moneyTraduced = (money / 1000000000).toFixed(2) + "B";
    } else if (money >= 1000000) {
        moneyTraduced = (money / 1000000).toFixed(2) + "M";
    } else if (money >= 1000) {
        moneyTraduced = (money / 1000).toFixed(2) + "K";
    }
    else{
        moneyTraduced = money.toFixed(2);
    }
    return moneyTraduced;
}

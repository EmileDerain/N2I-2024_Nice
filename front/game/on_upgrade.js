export function onUpgrade(upgrade) {
    console.log(upgrade);
    // console.log("upgrade_id_" + upgrade.upgradeId);
    // console.log(document.getElementById("upgrade_id_" + upgrade.upgradeId));
    document.getElementById("upgrade_id_" + upgrade.upgradeId).innerText = upgrade.quantity;
    document.getElementById("temperature_generated_id_" + upgrade.upgradeId).innerText = upgrade.temperature_generated.toFixed(6);
    document.getElementById("prix_id_" + upgrade.upgradeId).innerText = "Prix : " + Math.ceil(upgrade.cost);

}

export function onUpgrade(upgrade) {
    console.log(upgrade);
    // console.log("upgrade_id_" + upgrade.upgradeId);
    // console.log(document.getElementById("upgrade_id_" + upgrade.upgradeId));
    document.getElementById("upgrade_id_" + upgrade.upgradeId).innerText = upgrade.quantity;
}

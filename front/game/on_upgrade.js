export function onUpgrade(upgrade) {
    console.log(upgrade);
    document.getElementById("upgrade_id_" + upgrade.id).innerText = upgrade.quantity
}

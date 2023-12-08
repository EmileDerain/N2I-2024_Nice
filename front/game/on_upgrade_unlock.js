export function onUpgradeUnlock(upgrade) {
    console.log(upgrade)
    document.getElementById("carte_id_" + upgrade.upgradeId).style.display = block;
}

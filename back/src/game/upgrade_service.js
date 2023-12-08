import upgrades_data from "./data/upgrades.json" assert {type: "json"};
import {sendUpgradeUnlockEvent} from "../api/websocket/ws_helpers/event_handler/upgrade_unlock_event_handler.js";

export function initUpgrades(startYear) {
    const upgrades = {};
    upgrades_data.forEach(upgrade_data => {
        upgrades[upgrade_data.id] = {
            id: upgrade_data.id,
            name: upgrade_data.name,
            cost: upgrade_data.cost,
            money_generated: upgrade_data.money_generated,
            temperature_generated: upgrade_data.temperature_generated,
            unlock_year: upgrade_data.unlock_year,
            path: upgrade_data.image_path,
            isUnlock: startYear >= upgrade_data.unlock_year,
            quantity: 0,
        }
    });
    return upgrades;
}

export function buyUpgrade(upgrades, upgrade_id) {
    upgrades[upgrade_id].quantity += 1;
    upgrades[upgrade_id].temperature_generated *= 1.1;
    upgrades[upgrade_id].cost *= 1.01;
}

export function calculateTotalGeneratedPerTick(upgrades) {
    let total_generated = {
        money: 0,
        temperature: 0,
    };
    Object.values(upgrades).forEach(upgrade => {
        total_generated.money += upgrade.quantity * upgrade.money_generated;
        total_generated.temperature += upgrade.quantity * upgrade.temperature_generated;
    });
    return total_generated;
}

export function checkUpgradeUnlock(upgrades, current_year, user) {
    Object.values(upgrades).forEach(upgrade => {
        if (!upgrade.isUnlock && upgrade.unlock_year <= current_year) {
            upgrade.isUnlock = true;
            sendUpgradeUnlockEvent(user, upgrade.id);
        }
    });
}


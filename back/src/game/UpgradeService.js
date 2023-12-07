import { readJSONFile } from '../utilities/JsonHelper.js';

export function init_upgrades() {
    const upgrades = {};
    const upgrades_data = readJSONFile('./src/game/upgrades.json');
    upgrades_data.forEach(upgrade_data => {
        upgrades[upgrade_data.id] = {
            name: upgrade_data.name,
            cost: upgrade_data.cost,
            money_generated: upgrade_data.money_generated,
            temperature_generated: upgrade_data.temperature_generated,
            quantity: 0,
        }
    });
    return upgrades;
}

export function buy_upgrade(upgrades, upgrade_id) {
    upgrades[upgrade_id].quantity += 1;
}

export function calculate_total_generated_per_tick(upgrades) {
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


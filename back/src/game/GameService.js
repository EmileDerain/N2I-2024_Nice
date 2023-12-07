import { init_upgrades } from "./UpgradeService.js";

export function createGame() {
    return {
        money: 0,
        total_money: 0,
        temperature: 0,
        current_year: 0,
        start_year: 0,
        end_year: 0,
        upgardes: init_upgrades(),
    }
}
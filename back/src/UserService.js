import { createGame } from './game/GameService';
import { generateRandomString } from "./utilities/Utils.js";

let users = [];

export function createUser(ws) {
    let user = {
        id: generateRandomString(16),
        game: createGame()
    }
    users.push(user);
    return user;
}
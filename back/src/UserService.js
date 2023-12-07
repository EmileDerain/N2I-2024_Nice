import { createGame } from './game/GameService';

let users = [];

function createUser(id) {
    let user = {
        id: id,
        game: createGame()
    }
    users.push(user);
    return user;
}
const fs = require('fs');

export function readJSONFile(fileName) {
    return fs.readFile(fileName, 'utf8')
        .then(data => JSON.parse(data))
        .catch(error => {
            throw error;
        });
}
import { tickInterval } from "./on_init";


export function onEnd(endData) {
    const endType = endData.type;
    clearInterval(tickInterval);
    switch(endType) {
        case 0:
            console.log("Lose $");
            break;
        
        case 1:
            console.log("Lose T°");
            break;
        
        case 2:
            console.log("Win");
            break;
    }
}
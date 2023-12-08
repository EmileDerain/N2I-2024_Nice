export function onScore(scores) {
    updateBar(JSON.parse(scores).d.year);
    return scores;
}

function filtrerLongsMots(mots) {
    let array = [];
    for (let i = 0; i < mots.length; i++) {
        if (mots[i].length > 5) {
            array.push(mots[i])
        }
    }
    return array
}

console.log(filtrerLongsMots(["chat", "éléphant", "chien", "lion"])); // Résultat attendu : ["éléphant"]
console.log(filtrerLongsMots(["counter-strike", "valorant", "overwatch", "diablo"])); // Résultat attendu : ["counter-strike", "valorant", "overwatch", "diablo"]

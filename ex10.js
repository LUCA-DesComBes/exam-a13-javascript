function longueursMots(mots) {
    let array = [];
    for (let i = 0; i < mots.length; i++) {
        array.push(mots[i].length)
    }
    return array
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
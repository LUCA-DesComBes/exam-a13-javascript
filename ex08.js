function multiplierParDeux(tab) {
	let array = [];
    for (let i = 0; i < tab.length; i++) {
        array.push(tab[i] * 2)
    }
    return array;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
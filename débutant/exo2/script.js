// Exercice : Calcul de la somme d'une série de nombres

// Description :

// Ecrire un programme JavaScript qui demande à l'utilisateur de saisir une série de nombres séparés par des virgules (par exemple, "1, 2, 3, 4"). 
// Ensuite, le programme doit calculer et afficher la somme de tous ces nombres.

let numbers = "1, 2, 3, 4";
let somme = 0;

let numbersArray = numbers.split(",");

for (i = 0; i < numbersArray.length; i++){
   somme += parseInt(numbersArray[i])
}

console.log(`La somme totale des nombres est de ${somme}`);
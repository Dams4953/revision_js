// Exercice : Recherche d'un élément dans un tableau

// Description :

// Écrivez un programme JavaScript qui demande à l'utilisateur de saisir un nombre entier. 
// Ensuite, le programme devrait vérifier si ce nombre existe dans un tableau prédéfini.

const nombreEntier = 50;

const tab = [10, 40, 30, 80, 120];

if(tab.includes(50)){
   console.log("le nombre existe");
}else{
   console.log("le nomnbre n'existe pas");
}
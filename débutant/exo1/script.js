// Exercice : Calculateur de pourboire

// Description :

// Ecrire un programme JavaScript qui demande à l'utilisateur de saisir le montant total d'une facture et le pourcentage de pourboire qu'il souhaite laisser. 
// Ensuite, le programme doit calculer le montant du pourboire et l'ajouter au montant total de la facture. Enfin, afficher le montant total de la facture avec le pourboire inclus.

const invoice = 50;
const tip = 5;

const calculationTip = invoice * tip / 100;

const totalInvoice = invoice + calculationTip;

console.log(`le montant total de la facture est de ${totalInvoice}`);
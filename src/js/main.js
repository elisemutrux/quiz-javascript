// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
//Une variable est comme une sorte de box qui permet de stocker des imformations comme des class ou des id pour le javascript, pour ne pas avoir a les réecrire plein de fois et si il y a un changement on change que a un endroits.
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Elise";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 17;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML:
// - Classe(s):
// - Attribut(s):
//La balise HTML est la balise <input>
//Les classes sont ".card-input"
//L'attribut est "text"
// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE:
// Une class peut-être utiliser plusieurs fois alors qu'un id est utilisé qu'une seule fois
// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:
//Elle sert à sélectionner un élément dans l'HTML.
// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
const cardContent = document.querySelector(".card-content");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
const placeholderAttribut = (document.getElementById("#card-2").placeholder =
  "Créer votre mot de passe");
console.log(placeholderAttribut);
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:
// Un écouteur d'évènement est utilisé pour lorsque q'ûn évènement ce produit comme le clique, le scroll, il écoute cette évènement et peut ensuite faire qqch avec.
// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const secondCardContent = document.querySelector("#card-btn");

secondCardContent.addEventListener("click", function () {
  const textSecondCardContent = document.querySelector("#toggle-text");

  textSecondCardContent.classList.toggle("hide");
});

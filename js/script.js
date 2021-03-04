// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet new Date()
function demarrerLaMontre() {

 let date = new Date();
 console.log(date);

//Stocker l'heure , minute , seconde  dans des varaiables
// Avec ma variable qui contient la date + getHours() getMinutes() getSeconds()

let heure = (date.getHours());
let minute = (date.getMinutes());
let secondes = (date.getSeconds());


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Je recupere les elements de mon html J'applique style.transform pour modifier CSS en fonction du degres
// J'apelle ma variable avec une backtic et je calcule le degres dedans.
// J'utilise la fonction rotate pour la rotation des aiguilles et deg pour degrès
// Mes aiguilles recupérer se déplace en fonction de l'heure et se déplace en fonction du degrès calculer

AIGUILLEHR.style.transform =`rotate(${heure * 360 /12}deg)`
AIGUILLEMIN.style.transform =`rotate(${minute * 360 /60 + secondes * 6/60}deg)`
AIGUILLESEC.style.transform = `rotate(${secondes * 360 / 60}deg)`




}
// Exercuter la fonction chaque second
setInterval(demarrerLaMontre, 1000);
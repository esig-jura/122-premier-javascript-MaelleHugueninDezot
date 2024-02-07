/**
 * Démo mon premier JavaScript
 * @author  Maelle Huguenin-Dezot
 * @version 2.0
 * @since   2024-02-07 (date de création)
 */

'use strict'; // Active le mode strict du JavaScript

let age = 22;
console.log(age);

const premierP = document.querySelector('p');
const premierUl = document.querySelector('ul');
const tousLesStrong = document.querySelectorAll('strong');

console.log(premierP, premierUl, tousLesStrong);

premierP.innerText='Bonjour le monde';
premierUl.style.backgroundColor = 'yellow';

//Parcours le tableau des tousLesStrongs
for(let i =0; i<tousLesStrong.length; i++){
    tousLesStrong[i].style.color = 'red';
    tousLesStrong[i].innerText = 'Toto';
}

//Même chose avec for... of
for(let element of tousLesStrong){
    element.style.textDecoration = 'underline';
}

//Gestion de la liste des courses

const txtArticle = document.querySelector('#article');
const btAjouter = document.querySelector('.ajouter');
const ulListe = document.querySelector('ul.liste');

console.log(txtArticle, btAjouter, ulListe);

//fonction ajouter
//function ajouter (){
    //Affiche le texte saisi
    //alert(txtArticle.value);
    /* Nouvelle méthode : ulListe.innerHTML +='<li>' + txtArticle.value +'<li>';*/
   ///* Ancienne méthode :*/ ulListe.innerHTML +=`<li> ${txtArticle.value}</li>`;
//}
// au clic de bouton appelle la fonction ajouter
//on peut l'affecter a une seule fonction
//btAjouter.onclick = ajouter;

//On peut l'ajouter à plusieurs fonctions
//btAjouter.addEventListener('mouseover', ajouter);
//btAjouter.addEventListener('click', ajouter);

// () => Fonction
btAjouter.addEventListener('click', function ajouter (){
    if (txtArticle.value.length < 1){
        alert('Entrez un article !');
        return; //Sort de la fonction
    }
    ulListe.innerHTML +=`<li> ${txtArticle.value}</li>`;
    txtArticle.value = '';
    txtArticle.focus();
});





// ( Je reprends les mêmes nom que lui)

// let total = 0;

// function addition (x) {
//     total += x;
//     return total;
//     }

// function soustraction (x){
//     total -= x;
//     return total; }

// function division(x) {
//     if (total === 0) {
//         return total = x
//     }
//     else {
//     total /= x;
//     return total;
//     }
// } 

// function multiplication(x) {
//     if (total === 0) {
//         return total = x
//     }
//     else {
//     total *= x;
//     return total;
//     }
// }

// function reset () {
//     total = 0;
// }

// alert("ceci marche")

// ------------------ creer un element

// avec .createElement('h1'), j'ai crée dans ma variable un h1

// para.classList.add("bleu")
// // Ici je lui donne la class bleu
// para.textContent = 'Bleu'
// // je rajoute le text bleu a h1


// // document.body.prepend(para)
// // document.body.append(para)

// // // ici j'insert le h1 dans le body (en premier position dans ce cas (devant l'autre div)
// //  je l'integre en dernier position


//  SELECTOR (ICI JE VAIS PARLER DES SELECTEURS )


// document.querySelector('body') 

// Ici je demande à ce que js me selectionne tout ma partie "body "

// document.querySelector('.box')
// document.querySelector('#btn-1')

// Ca marche comme la selection des éléments CSS on peut selectionner les élements par class(.), id (#), etc... 
// Faire un console.log de docu pour le voir apparaitre sur la console 

//  LES METHODES = FONCTIONS QUI SONT DEJA DANS LE JAVASCRIPT EX = CONSOLE LOG

// const h4 = document.querySelector('h4')

//  Ici j'ai crée une variable et j'ai incrémenter du coup l'élément h4
// On sait que le h4 contient la question " qu'elle est la capital de la suisse"
//  Une fois que le doc query select est fait pas besoin de le refaire 

//  ---------------------------------CLICKS EVENTS

// const questionContainer = document.querySelector('.click-event');

//  Ici j'ai crée une variable qui va contenir la div ayant pour class 
// click-event, FAIRE TOUJOUR CONSOLE.LOG après chaque création de variable
// console.log(questionContainer)

// questionContainer.style.borderRadius="150px";

// ||                   REGARDER EN HAUT                ||


// Ici j'ai rajouté du style => border-radius
// Pour rajouter un élément n'oubliez pas de mettre un (.)
// Exemple : Pour rajoutez du style (comme CSS), j'ai fait .style 
// Par la suite, j'ai rajouté (.)borderRadius pour mettre le style que je veux
// LES TIRET DE BORDER RADIUS sont remplacés par un R a radius

// questionContainer.addEventListener('evenement', function)

//  C'est une méthode qui te permet selon une action de crée une réaction
// Ex = si je clic sur un élément, il se passera quelque chose
// Elle se compose d'un évènement et d'une fonction 

// questionContainer.addEventListener("click", function click () {
//     console.log("click")
// })

//  Ici l'évènement c'est le click 
// La ligne du code du dessus exprime la manip suivante du coup : 
// A chaque fois qu'il y aura un sur l'élément ciblé, il y aura
// Un console.log qui affichera un clic 
// L'élément selectionné est la variable questionContainer qui contient
// la classe click-event
//  TOUTE COMME LA VARIABLE VERIFIE SA FONCTIONNALITE AVEC UN CONSOLE.LOG

// questionContainer.addEventListener("click", function click(){
//     questionContainer.style.background="grey"
//     questionContainer.style.border="3px solid teal"
// }) 

// Si on observe le html (DOM)
// On constate qu'un style="background: grey" s'est rajouté à la balise div

// questionContainer.addEventListener("click", function click(){
//     // questionContainer.classList.add('question-click')
//     // questionContainer.classList.remove('box')
//         questionContainer.classList.toggle('question-click')
// }) 

// LIGNE 121

//  Pour éviter de faire trop de feuille de style dans le Javascript
// On peut insérer des class en provenance de CSS (ce n'est pas obligatoire)
// le classList.add permet de faire cette manip 
// Ici on a ajouter la class question-click lorsque du coup il aura un clic 
// Et par conséquent elle aura les priorité qu'on lui a défini en css
// On ne met pas le point (.) car le classList sait que nous allons saisir une cls

// LIGNE 122

// Tout comme classList.add on peut aussi enlever des classes 
// Ici on a enlever du coup la class box 

// LIGNE 123

// Ici on a rajouté toggle
// Le toggle veut dire que si un element (la class pour le coup) n'est pas présent
// Tu le rajoute et si à l'inverse la class est présent, tu l'enlèves

// const questionContainer = document.querySelector('.click-event');

// questionContainer.addEventListener("click", ()=> {
//     questionContainer.classList.toggle("question-clicked");
// })

// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.getElementById('btn-2');
// //  get Element permet de grappe l'élément direct par l'id
// // pas besoin de mettre le # ducoup

// const reponse = document.querySelector('p')

// btn1.addEventListener('click', ()=> {
//     reponse.classList.add('show-reponse')
//     reponse.style.background="green"

// })

// btn2.addEventListener('click', ()=> {
//     reponse.classList.add('show-reponse')
//     reponse.style.background="red"
// })

//  NE PAS OUBLIER LES ORDRES DE PRIORITE ID CLASS












// const keypressContainer = document.querySelector ('.keypress');
// const key = document.getElementById('key');



// document.addEventListener('keypress', (e)=> {
//     key.textContent = e.key

//     if (e.key==="y") {
//         key.style.background="cyan"
//     }
//     else if (e.key === "a") {
//         key.style.backgroundColor="blue"
        
//     }
//     else {
//         key.style.backgroundColor="pink"
//     }


// })

// console.log(e.key) 
// le (e.key) permet d'afficher dans la console la touche sur laquelle j'appuie ()

//key.textContent ="Je viens d'écrire "
// Ici le texte je viens d'écrire se rajoutera si j'appuie du coup sur une touche de mon claver

// key.textContent = e.key
// si je met un e.key a textContent, Une touche du clavier sera afficher a chaque fois que je tappe sur mon clavier

// COULEUR DE FOND DE LA TOUCHE

// if (e.key==="y") {
//     key.style.backgroundColor="cyan"
// }
//  Si je rajoute cette condition à l'interieur de l'évent, le background color de mon span va changer si je tappe sur la touche y

// else if (e.key === "a") {
//     key.style.backgroundColor="blue"
    
// }
//  Ici j'ai rajouté du coup la condi si je touche la touche a, le fond changera en bleu

// INSERSION D'UN SONS EN JAVASCRIPT

// const ring = ()=> {              Ici je crée la fonction
//     const audio = new Audio();   Ici je crée la variable qui va contenir le Son
//     audio.src = "./flcP.mp3"     J'insère le son dans la variable
//     audio.play()                 j'insere la methode play
// 

// ring()                           J'appelle ma fonction
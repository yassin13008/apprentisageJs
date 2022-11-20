// ( Je reprends les mêmes nom que lui)
//  J'ai crée une div avec  class mouse-move
// const mousemove = document.querySelector(".mousemove")
//  J'ai incrémenter la div en question dans une variable

// window.addEventListener('mousemove', ()=> {
//     console.log("ça bouge")
// })
// Ici j'ai rajouté l'event mousemove 
// cette element je l'ai ciblé sur tout le windows ( bouton actualisé barre de recherche)
// Puis j'ai contrôler si cela marchais ( OUI )

// window.addEventListener('mousemove', (e)=> {
//     console.log(e) })
    // le (e) permet de récupérer toute les données d'un évenement
    // Lors que je passe la souris, console.log va afficher la data de l'endroit 
    // ou se trouve la souris 
    // on met le (e) en général dans les déclarations d'event

    // window.addEventListener('mousemove', (e)=> {
    //     console.log(e.target) })
// Pour se déplacer dans la data du coup mettre un (.) après le e
// Ici chaque déplacement affichera la data via .target

// window.addEventListener('mousemove', (e)=> {
// mousemove.style.left= e.pageX })

// Ici des lors, on se deplace dans la data pageX, la div va suivre le mouvement de la souris
// (Correspond à la place de la souris en absciss en pixel )
// Toutefois la donnée px n'apparait pas seulement le nombre
// On veux a chaque deplacement de la gauche, la div se déplace
// Cela ne marche pas ici car pageX n'est pas une valeur px 

// window.addEventListener('mousemove', (e)=> {
//     mousemove.style.left= e.pageX + "px" })

//  Ici on a concaténer la valeur px a pageX et des lors l'event fonctionne 

// window.addEventListener('mousemove', (e)=> {
//     mousemove.style.left= e.pageX + "px" 
//     mousemove.style.top= e.pageY + "px" })

    // Des lors on peut faire la même chose en ce qui concerne l'axe des ordonnée
    // Toutefois il reste le probleme de centrage
    // En effet, c'est le position absolute qui place de base 
    // la souris en haut et a gauche du cercle
    // Pour ce problème on passe en CSS transform (voir modif css)
    // J'ai mis un z-index pour que l'élément passe en dessous de l'autre div

    // mousemove.addEventListener("mousedown",()=> {
    //     console.log("test")
    // })

    // Ici l'event ne marche pas car le z-index -1 fais passer l'event derrier le body

    // window.addEventListener("mousedown",()=> {
    //     console.log("test")
    // })

    // Ne pas confondre avec un click-event = quand on clique sur un élément
    // mousedown c'est quand on click sur le bouton de la souris
    // Ici celà marche

    // window.addEventListener("mousedown",()=> {
    //     mousemove.style.transform="scale(2) translate(-25%,-25%)"
    // })

    // Le centrage du cercle aura un probleme ici, translate sera écrasé
    // On ne peut pas mettre deux fois la meme prio css sinon elle se supprime
    // des lors on rajoute une deuxieme fois translate  translate(-50%,-50%)
    // Comme y a un scale de 2 des lors il faut mettre 25% (l'élément grandis)

    // window.addEventListener("mousedown",()=> {
    //     mousemove.style.transform="scale(2) translate(-25%,-25%)"
    // })

    // window.addEventListener("mouseup",()=> {
    //     mousemove.style.transform="scale(1) translate(-50%,-50%)"
    //     mousemove.style.border = "2px solid red"
    // })

    // // Mouse up correspont à quand on relache la touche de la souris

// questionContainer.addEventListener("mouseenter", () => {
//     questionContainer.style.background = "rgba(0,0,0,0.6)";
//   });
//  Ici l'effet demandée est qu'a chaque fois que l'on survole avec la souris 
//  La div question, une opacité va se mettre en place
// le mouseenter se fait au survole

// questionContainer.addEventListener("mousout", ()=> {})
// C'est lorsque la souris sort de la zone de survolage

// response.addEventListener("mouseover", () => {
//     response.style.transform = "rotate(2deg)";
//   });
// Ici on donne un petit effet a response
// lors que la souris passera sur p ( qui contier la réponse) le petit carré s'incline 
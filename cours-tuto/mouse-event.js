//  J'ai crée une div avec  class mouse-move
const mousemove = document.querySelector(".mousemove")
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
    // Lors que je passe la souris, console.log va afficher la date de l'endroit 
    // ou se trouve la souris 
    // on met le (e) en général dans les déclarations d'event

    // window.addEventListener('mousemove', (e)=> {
    //     console.log(e.target) })
// Pour se déplacer dans la data du coup mettre un (.) après le e
// Ici on se déplace dans la data target

// window.addEventListener('mousemove', (e)=> {
// mousemove.style.left= e.pageX })

// Ici des lors, on se deplace dans la data pageX
// (Correspond à la place de la souris en absciss en pixel )
// Toutefois la donnée px n'apparait pas seulement le nombre
// On veux a chaque deplacement de la gauche, la div se déplace
// Cela ne marche pas ici car pageX n'est pas une valeur px 

// window.addEventListener('mousemove', (e)=> {
//     mousemove.style.left= e.pageX + "px" })

//  Ici on a concaténer la valeur px a pageX et des lors l'event fonctionne 

window.addEventListener('mousemove', (e)=> {
    mousemove.style.left= e.pageX + "px" 
    mousemove.style.top= e.pageY + "px" })

    // Des lors on peut faire la même chose en ce qui concerne l'axe des ordonnée
    // Toutefois il reste le probleme de centrage
    // En effet, c'est le position absolute qui place de base 
    // la souris en haut et a gauche du cercle
    // Pour ce problème on passe en CSS transform (voir modif css)
    // J'ai mis un z-index pour que l'élément passe en dessous de l'autre div
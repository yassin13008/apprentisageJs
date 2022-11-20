// Au début la nav barre n'est pas visible, prédéfinis en CSS

// const nav = document.querySelector('nav')

// window.addEventListener('scroll',()=> {
//     console.log("test")

// }) ici on a tester si l'event marche

// window.addEventListener('scroll',()=> {
//     console.log(e.scrollY)
//  Ici grasse à e.scrollY, on a récupérer la donnée de Y lors du scroll
//  L'idée est de faire apparaitre la nav bar selon ou se situe le scroll en Y
// })

// window.addEventListener('scroll',()=> {
//     if (scrollY >200) {
//     nav.style.top="0px"
//     }
//     else if (scrollY<200) {
//         nav.style.top="-50px"
//     }
// })

// Ici on a posée la condition selon laquel lorsque le scrollY est sup à 200
// On fait apparaitre la nav barre (souvenez vous elle etait a -50px)
// Et lorsque le scroll est a - de 200 px, nous la remettons à sa place 
// On a rajouter une petite transition pour de l'effet 

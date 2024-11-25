import DOMPurify from 'dompurify';
const cleanHtml = DOMPurify.sanitize('Votre HTML non sécurisé ici');
let laBar = document.querySelector('.bar');

window.addEventListener("scroll", ()=>{

    console.log(window.scrollHeight);
    console.log(window.innerHeight);
    console.log(window.scrollY);
    let scrollMax = document.body.scrollHeight- window.innerHeight;   
    let onEstOu =  Math.trunc((window.scrollY/scrollMax) *100);
    laBar.style.width = onEstOu + "%";
    laBar.innerHTML = onEstOu + '%';
   
    console.log(laBar);
    
});

let message = document.getElementById('message');
let bouton = document.getElementById('send');
let box = document.getElementById('box');

const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("send");
// Dès qu'on arrive sur la page,
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
zoneTxt.value = localStorage.getItem('monSuperTexte');
//Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(zoneTxt.value){
//    zoneRender.innerText = localStorage.getItem('monSuperTexte');
   zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
};
//On détecte ce que tape l'utilisateur dans le textarea
zoneTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',zoneTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
//    zoneRender.innerHTML =marked(zoneTxt.value);
   box.innerHTML =DOMPurify.sanitize(marked(zoneTxt.value));
//    zoneRender.innerHTML =marked(zoneTxt.value);
});




  


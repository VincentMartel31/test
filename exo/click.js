/**
 * Selectionne le premier élément h1
 * @type {HTMLElement}
 */
//let lesTxt = document.querySelector("h1");

/**
 * Stocke la valeur du h1 dans une variable 
 * @type {string}
 */
//  let valeurInitiale = lesTxt.innerText   ;

/**
 * Ajoute un event listener sur le click de l'element h1
 *Puis il switche de valeur lors du click 
 */

lesTxt.addEventListener('click', () => {
  lesTxt.innerText === "--😀--" ? lesTxt.innerText = valeurInitiale : lesTxt.innerText = "--😀--";
});


let leH1 = document.querySelector('#mainTitle');
let selectTitle = false;    //! Un booléen pour savoir si le titre a été cliqué ou non

leH1.addEventListener('click',()=>{
    console.log('ok ca click');
    leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
    selectTitle = !selectTitle; // ? à chaque click le booléen passe à son inverse (pour faire le re click)
});




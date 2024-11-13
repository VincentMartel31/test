/**
 * Selectionne le premier élément h1
 * @type {HTMLElement}
 */
let lesTxt = document.querySelector("h1");

/**
 * Stocke la valeur du h1 dans une variable 
 * @type {string}
 */
let valeurInitiale = lesTxt.innerText;

/**
 * Ajoute un event listener sur le click de l'element h1
 *Puis il switche de valeur lors du click 
 */
lesTxt.addEventListener('click', () => {
  if (lesTxt.innerText === "--😀--") {
    lesTxt.innerText = valeurInitiale;
  } else {
    lesTxt.innerText = "--😀--";
  }
});
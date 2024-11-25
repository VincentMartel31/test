/**
 * Ajoute un écouteur d'événement "clic" à l'élément body.
 * Lorsque l'élément body est cliqué :
 *  - Si la cible du clic possède la classe 'dynamic-image', elle est supprimée.
 *  - Sinon, une nouvelle image est créée et ajoutée au body :
 *      - La source de l'image est définie sur "https://picsum.photos/200/300".
 *      - La classe 'dynamic-image' est ajoutée à l'image.
 *      - La position de l'image est définie comme absolue en fonction des coordonnées du clic (x, y).
 *      - Les coordonnées du clic (x, y) sont affichées dans la console.
 *
 * @param {MouseEvent} clic - L'objet événement de clic.
 */
import collection from 'easter-egg-collection';
let body =document.body;
body.addEventListener("click", (clic) => {
    if (clic.target.classList.contains('dynamic-image')) {
      clic.target.remove(); // Supprime l'image
    } else {
      let x = clic.x;
      let y = clic.y;
  
      // Créer un élément image
      let image = document.createElement('img');
      image.src = "https://picsum.photos/200/300";
      image.classList.add('dynamic-image');
      image.style.position = 'absolute';
      image.style.left = x + 'px';
      image.style.top = y + 'px';
      image.style.transform = "translate(-50%,-50%)";   
      document.body.appendChild(image);
      console.log(x, y);
    }
  })



  

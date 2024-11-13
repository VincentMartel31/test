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



  document.addEventListener('click', function(eventClick){
    console.log(eventClick);
    console.log('Les coord : ',eventClick.x, eventClick.y);
    // On Créer une image
    const monImg = document.createElement('img');
    const tailleImg = 300;
    // On rajoute une src à l'image
    // monImg.setAttribute('src', `https://www.stevensegallery.com/${tailleImg}/${tailleImg}`);
    monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
    // On modifie le type de position de l'image
    monImg.style.position = 'absolute';
    // On modifie la position top de l'image
    monImg.style.top = eventClick.y - tailleImg /2 +'px';
    // On modifie la position left de l'image
    monImg.style.left = eventClick.x -tailleImg /2 +'px';
    //On place l'image fraichement créee dans le body de la page
    document.body.append(monImg);
});

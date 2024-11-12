let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// ? On va choisir une variable temporaire pour parcourir les elements du tableau
listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

for(let unElementTablo of listeFilm){
    console.log('boucle FOR...OF : ',unElementTablo);
};

const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// on définit une variable temporaire pour parcourir le objet :)
for(let cleObjet in userData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
};

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((uneCase) => uneCase * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
/**
 * Classe représentant une personne et permettant de calculer son IMC.
 */
class Imc {
    /**
     * Constructeur de la classe Imc.
     *
     * @param {string} paramName - Le nom de la personne.
     * @param {number} paramPoids - Le poids de la personne en kilogrammes.
     * @param {number} paramTaille - La taille de la personne en mètres.
     */
    constructor(paramName, paramPoids, paramTaille) {
      // Attributs de l'objet Imc
      this.name = paramName;
      this.poids = paramPoids;
      this.taille = paramTaille;
    }
  
    /**
     * Calcule l'indice de masse corporelle (IMC).
     *
     * @returns {number} L'IMC calculé.
     */
    getImc() {
      return this.poids / (this.taille ** 2);
    }
  
    /**
     * Affiche les informations de la personne et son IMC dans la console.
     */
    display() {
      console.log(`${this.name} (${this.poids} kg, ${this.taille} m) a un IMC de : `, this.getImc().toFixed(2));
    }
  }
  
  // Création d'un tableau de personnes
  let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO",300, 2),
    new Imc("Gntrand",90, 1.75),
    new Imc("Colonel Clock",200, 1.75),
    new Imc("Josianne de la Vega",99, 1.55),
    new Imc("Moi",66,1.75),
    // ... autres personnes
  ];
  
  // Affichage des informations pour chaque personne
  for (let i = 0; i < list.length; i++) {
    list[i].display();
  }





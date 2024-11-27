// // import { contactAPI } from "./exo/welcomeService.js";
// // import { hi } from "./exo/welcomeService.js";
// // contactAPI();
// // hi();

// // Définir une classe pour le custom element
// class HelloWorld extends HTMLElement {
//     constructor() {
//         super(); // Appelle le constructeur de la classe parent

//         // Ajoute du contenu directement dans l'élément
//         this.textContent = "Hello, World!";
//     }
// }

// // Enregistrer le custom element
// customElements.define("hello-world", HelloWorld);

// class PhraseBox extends HTMLElement {
//     constructor() {
//         super(); // Appelle le constructeur de la classe parent

//         const phrase = this.getAttribute("phrase");

//         //créer un element pour afficher la phrase

//         const textElement = document.createElement("p");
//         textElement.textContent = phrase;

//         // un peu de style bootstrap
//         textElement.classList.add("bg-primary-subtle");

//         //Ajouter l'element texte dans le Custom Element
//         this.appendChild(textElement);
//     }
// }

// customElements.define("phrase-box", PhraseBox);

console.log("test");

class UserBox extends HTMLElement {
    constructor() {
        super(); // Appelle le constructeur de la classe parent

        const nom = this.getAttribute("nameUser");
        const age = this.getAttribute("ageUser");
        const image = this.getAttribute("imageUser");

        const nomElement = document.createElement("p");
        nomElement.textContent = nom;

        const ageElement = document.createElement("p");
        ageElement.textContent = age;
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", image);

        this.appendChild(nomElement);
        this.appendChild(ageElement);
        this.appendChild(imageElement);
    }
}

customElements.define("user-box", UserBox);

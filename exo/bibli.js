import { moduleHello } from "./scripts/hello";

moduleHello("jojo");

/**
 * Représente un livre.
 * @class
 */
class Livre {
    /**
     * Crée une instance de la classe Livre.
     * @param {string} titre - Le titre du livre.
     * @param {string} auteur - L'auteur du livre.
     */
    constructor(titre, auteur) {
        /** @type {string} Le titre du livre */
        this.titre = titre;
        /** @type {string} L'auteur du livre */
        this.auteur = auteur;
        /** @type {boolean} Indique si le livre est disponible */
        this.dispo = true;
    }

    /**
     * Emprunte le livre si disponible. Si le livre est déjà emprunté, affiche un message d'erreur.
     */
    emprunter() {
        if (this.dispo) {
            this.dispo = false;
        } else {
            console.log("le livre est indisponible");
        }
    }

    /**
     * Retourne le livre, le rend disponible pour emprunt.
     */
    retourner() {
        this.dispo = true;
    }
}

/**
 * Représente une bibliothèque.
 * @class
 */
class Bibli {
    /**
     * Crée une instance de la bibliothèque.
     * @param {string} nom - Le nom de la bibliothèque.
     */
    constructor(nom) {
        /** @type {string} Le nom de la bibliothèque */
        this.nom = nom;
        /** @type {Livre[]} La liste des livres de la bibliothèque */
        this.livres = [];
    }

    /**
     * Ajoute un livre à la bibliothèque.
     * @param {Livre} livre - Le livre à ajouter.
     */
    ajouterLivre(livre) {
        this.livres.push(livre);
        console.log("le livre  a été ajouté à la bibliothèques");
    }

    /**
     * Emprunte un livre de la bibliothèque.
     * @param {string} titre - Le titre du livre à emprunter.
     */
    emprunterLivre(titre) {
        const livre = this.livres.find((l) => l.titre === titre);
        try {
            livre.emprunter();
            console.log(`le livre ${titre} a été emprunté`);
        } catch (error) {
            console.log("Ce livre n'existe pas ");
        }
    }

    /**
     * Retourne un livre à la bibliothèque.
     * @param {string} titre - Le titre du livre à retourner.
     * @throws {Error} Si le livre n'existe pas dans la bibliothèque.
     */
    retournerLivre(titre) {
        const livre = this.livres.find((l) => l.titre === titre);
        if (livre) {
            livre.retourner();
            console.log(`Le livre "${titre}" a été retourné.`);
        } else {
            throw new Error("Ce livre n'existe pas dans la bibliothèque.");
        }
    }
}

// Exemple d'utilisation scénario
// Tests
try {
    const utilisateur1 = new Utilisateur("Alice");
    const utilisateur2 = new Utilisateur("Bob");

    const groupePublic = new Groupe("Voyageurs", false);
    const groupePrivé = new Groupe("Investisseurs", true);

    utilisateur1.rejoindreGroupe(groupePublic);
    utilisateur2.rejoindreGroupe(groupePrivé);

    const publication = utilisateur1.publier(
        "Bienvenue  dans mon réseau social !"
    );
    const publicationInvalide = utilisateur2.publier(
        "Bienvenue  dans mon réseau social fcked!"
    );
    if (publication) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }
    if (publicationInvalide) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }

    const commentaireValide = new Commentaire(
        utilisateur2,
        "Super publication !"
    );
    if (publication) publication.ajouterCommentaire(commentaireValide);

    const commentaireInsultant = new Commentaire(
        utilisateur2,
        "C'est stupide !"
    );
    if (publication) publication.ajouterCommentaire(commentaireInsultant);
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}

let regex =
    /\b(?:(?:ass+(?:\s+)?|i+(?:\s+)?|butt+(?:\s+)?|mo(?:(?:m|t|d)h?(?:e|a)?r?)(?:\s+)?)?f(?:(?:\s+)?u+)?(?:(?:\s+)?c+)?(?:(?:\s+)?k+)?(?:(?:e|a)(?:r+)?|i(?:n(?:g)?)?)?(?:s+)?(?:\s+)?(?:hole|head|(?:yo?)?u?)?)+\b/gim;

function estContenuValide(contenu) {
    return !regex.test(contenu);
}

class User {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(nom) {
        this.nom = nom;
        this.publications = [];
        this.groupe = [];
    }
    publier(contenu) {
        if (estContenuValide(contenu)) {
            const publication = new Publication(this.nom, contenu);
            this.publications.push(publication);
            return publication;
        } else {
            console.error("Contenu invalide:", contenu);
            return null;
        }
    }

    displayInfo() {
        console.log(`infos de l'utilisateur : 
            son nom : ${this.nom}`);
        if (this.publications.length > 0) {
            console.log("ses publications :");
            this.publications.forEach((publication) => {
                console.log(publication.contenu);
            });
        } else {
            console.log("Cet utilisateur n'a pas de publications.");
        }
    }

    rejoindreGroupe(groupe) {
        if (!groupe) {
            throw new Error("Groupe inconnu!");
        }

        if (!groupe.membres.some((membre) => membre === this)) {
            groupe.membres.push(this);
            // Mettre à jour les groupes de l'utilisateur (si nécessaire)
            this.groupe.push(groupe);
        } else {
            console.error("Vous êtes déjà membre de ce groupe");
        }
    }
}

class Publication {
    constructor(auteur, contenu) {
        this.auteur = auteur;
        this.contenu = contenu;
        this.commentaires = [];
    }

    ajouterCommentaire(commentaire) {
        if (estContenuValide(commentaire.contenu)) {
            this.commentaires.push(commentaire);
        } else {
            console.error("Commentaire invalide: contient des mots offensants");
        }
    }
}

class Commentaire {
    constructor(auteur, contenu) {
        this.auteur = auteur;
        this.contenu = contenu;
    }
}

class Groupe {
    constructor(nom, estPrivé) {
        this.nom = nom;
        this.membres = [];
        this.estPrivé = estPrivé;
    }

    ajouterMembre(user) {
        if (this.membres.some((membre) => membre.nom === user.nom)) {
            throw new Error("Déjà membre !!!!!");
        }

        this.membres.push(user);
    }

    afficherContenu(user) {
        if (this.membres.some((membre) => membre.nom === user.nom)) {
            console.log("Membres du groupe", this.nom);
            this.membres.forEach((membre) => {
                console.log(membre.nom);
            });
        }

        throw new Error("Vous n'avez pas accès a ce groupe !!!!!");
    }

    displayInfo() {
        console.log(this.nom, this.estPrivé);
    }
}

Tests;

const user1 = new User("Alice");
const user2 = new User("BOb");

user1.publier("blablabla");
user1.publier("test");

const groupePublic = new Groupe("Voyageurs", false);
const groupePrivé = new Groupe("Investisseurs", true);

user1.publier("fuck");
const publication = user1.publier("Bienvenue  dans mon réseau social !");

const publicationInvalide = user2.publier(
    "Bienvenue  dans mon réseau social copain!"
);
user2.publier("oui second post ! ");
user2.displayInfo();

const amandine38 = new User("Amandine du 38");
groupePrivé.ajouterMembre(amandine38);

const justiceLeague = new Groupe("La Justice League", true);
const charlie = new User("Charlie");
justiceLeague.afficherContenu(charlie); // Cela devrait déclencher l'erreur on affiche pas le contenu privé à charlie

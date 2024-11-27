class Employe {
    constructor(paramName, paramPrenom, paramAge, paramSalaire) {
        this.name = paramName;
        this.prenom = paramPrenom;
        this.age = paramAge;
        this.salaire = paramSalaire;
    }

    getsalaireAnnuel(mois, charges) {
        return this.salaire * mois * charges;
    }
}

class Pme {
    constructor(paramName, paramEquipe, R, FF, FA) {
        this.name = paramName;
        this.equipe = paramEquipe;
        this.vente = R;
        this.fraisFixes = FF;
        this.fraisAchat = FA;
    }

    getCoutInitial() {
        return this.fraisAchat + this.fraisFixes;
    }

    getTotalEquipe() {
        let cost = 0;
        for (let i = 0; i < this.equipe.length; i++) {
            cost += this.equipe[i].getsalaireAnnuel(12, 1.9);
        }
        return cost;
    }

    bilan() {
        const coutTotal = this.getCoutInitial() + this.getTotalEquipe();
        const benefice = this.vente - coutTotal;
        console.log(`                                      ----------MA PME-----------
                               
                               Ma Petite Entreprise - : Coût Initial : ${this.getCoutInitial()}
                               Ma Petite Entreprise - : Coût Total Equipe : ${this.getTotalEquipe()}
                               Ma Petite Entreprise - : VENTES : ${this.vente}  
                               Ma Petite Entreprise - : BILAN :  ${benefice}
        )`);
    }
}
    
const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [
        new Employe("Duval", "Paul", 30, 2000),
        new Employe("Durand", "Alain", 40, 3000),
        new Employe("Dois", "Sylvia", 50, 4000),
    ],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000
);
pme.bilan();

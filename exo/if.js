/**
 * Tableau d'exemples de notes.
 * @type {number[]}
 */
let array = [10, 15, 16, 20];

/**
 * Calcule la moyenne d'un tableau de nombres et affiche une appréciation en fonction du résultat.
 *
 * @param {number[]} arr - Le tableau de nombres dont on veut calculer la moyenne.
 */





function  moyenne(arr){
    let moyenne=0;
    let cpt=0
    for (let i=0;i<array.length;i++){
        moyenne += array[i];
        
        cpt++;
    }
    moyenne = moyenne/cpt;

    if(moyenne>= 15){
        console.log("très bien");
    }else if (moyenne >=10){
        console.log("bien");
    }else{
        console.log("refus");
    }
}

moyenne(array);
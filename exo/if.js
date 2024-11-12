/**
 * Tableau d'exemples de notes.
 * @type {number[]}
 */
let array = [10, 15, 6, 0];

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
        return "très bien";
    }else if (moyenne >=10){
        return "bien";
        }else{
        return "refus";
            }
}

console.log(moyenne(array));
console.log('-------SCOPE-------');
let testScope1 = 99;
function maFonctionTestScope(){
    let testScope1 = 12;
    console.log('scope de la fonction :',testScope1);
};
maFonctionTestScope();
console.log('scope hors de la fonction :',testScope1);


//! EXO 5.1 : Quizz Function
//TODO : Pourquoi ca beug ?
let wtf=9;
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf); 
// quiz 1 : bug car wtf n'est pas défini en dehors de la fonction il faut donc définir  la variable wtf en dehors de la fonction ou supprimer le console.log(wtf)
// mieux nommer les variables




//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews);

    function functionBugEnfant() {
        let lesNews = `il est 99h67`;
    }
};
functionBugParent();
console.log(something);
// quizz2 lesNewz est défini uniquement dans la fonction functionBugEnfant qui elle meme est incluse dans la fonction functionBugParent


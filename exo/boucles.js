






let texteTab = Array.from(lesTxt);
console.log(texteTab);
let couleurs = ["red", "green", "blue", "yellow", "orange"];
let indexCouleur = 0;
texteTab.map((temp) => {
    temp.innerText= " remplacement";
    temp.style= "color:red;cursor:pointer;";
    temp.addEventListener("click",()=>{
        temp.style.color = couleurs[indexCouleur];
        indexCouleur = (indexCouleur + 1) % couleurs.length;
    
        console.log("balise cliquée")
    });
    
})


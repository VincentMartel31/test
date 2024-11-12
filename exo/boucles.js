let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);
let texteTab = Array.from(lesTxt);
console.log(texteTab);

texteTab.map((temp) => {
    temp.innerText= " remplacement";
    temp.style= "color:red;cursor:pointer;";
    temp.addEventListener("click",()=>{
        temp.style="color:blue";
        console.log("balise cliquée")
    });
    
})
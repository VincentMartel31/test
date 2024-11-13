
let monh1 = document.getElementById('maintitle');
let lien1 = document.getElementById('lien1');
let lien2 = document.getElementById('lien2');
let lien3 = document.getElementById('lien3');

lien1.addEventListener("click",()=>{
    monh1.classList.add('color');
})
lien2.addEventListener("click",()=>{
    monh1.classList.remove('color');
})
lien3.addEventListener("click",()=>{
    monh1.classList.toggle('color');
})
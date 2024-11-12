let array =[10,15,16,20]




function  moyenne(arr){
    let moyenne=0;
    let cpt=0
    for (let i=0;i<array.length;i++){
        moyenne += array[i];
        console.log(moyenne);
        cpt++;
    }
    moyenne = moyenne/cpt;
    console.log(moyenne);
    if(moyenne>= 15){
        console.log("très bien");
    }else if (moyenne >=10){
        console.log("bien");
    }else{
        console.log("refus");
    }
}

moyenne(array);
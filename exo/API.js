const apiDiv = document.querySelector('#pokelist');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/1');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    
    
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    console.log(dataTransformed[0]);   
    
    
    for (let i=0;i <dataTransformed.length;i++){
        // apiDiv.innerHTML += ` ${dataTransformed.results[i].name} ` ;
        
        // CONSTRUCTION des cards
        let card = document.createElement('div');
        card.style='width:300px; height:300px;display:flex;flex-direction:column;align-items:center;background: rgba(255, 255, 180, 0.2);border-radius: 16px;box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(5px);border: 1px solid rgba(255, 255, 255, 0.3); margin:8px'
        apiDiv.appendChild(card)


        // nom du pokemon
        let elemListe = document.createElement('p')
        elemListe.textContent =  dataTransformed[i].name.fr;
        console.log(elemListe);
        card.appendChild(elemListe);
        elemListe.style ="width : 150 px ; text-align:center" ;

        


        // image du pokemon 
        let imgListe = document.createElement('img');
        imgListe.src = dataTransformed[i].sprites.shiny;
        imgListe.style ="width = 150px ; height: 150px;";
        
                
        card.appendChild(imgListe);
        
        // type du pokemon 
        let  typeListe = document.createElement('p');
        typeListe.innerText = dataTransformed[i].types[0].name;
        card.appendChild(typeListe);
        typeListe.style ="width : 150 px ; text-align:center" ;

        // poids du pokemon 
        let poidsPoke = document.createElement('p');
        poidsPoke.innerText = dataTransformed[i].weight;
        
        card.appendChild(poidsPoke);

        
    }
    
};
contactApi();
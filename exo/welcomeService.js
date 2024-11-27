export async function contactAPI() {
    //Data va récup Toutes les données de l'api
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    console.log(response);
    console.log(response.ok);
    console.log(response.status);

    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS
    const dataTransformed = await response.json();
    console.log(dataTransformed.value);
    console.log("ca marche !");
    let titre = document.getElementById("titre");
    titre.textContent = dataTransformed.value;
}

export function hi() {
    console.log("hello depuis welcomeservice");
}

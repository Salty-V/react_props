import { useState } from "react"

function CocktailsPage () {

    const [drinks, setDrinks] = useState()

    if(!drinks) {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") // via fetch on envoie une requête à l'API 
    .then((response) => { // on utilise .then pour gérer la réponse de l'API 
        return response.json() // on convertit la data retournée en json
    })
    .then((json) => { // .then gère la data en json et la rend accessible
        setDrinks(json) // on affiche en console la data récupérée
    })
    } 

    return <div>
        {drinks ? 
        <p>Drinks r ready</p>
        : 
        <p>Loading</p>
        }
    </div>
}

export default CocktailsPage; 
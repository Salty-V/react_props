function CocktailsPage () {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=") // via fetch on envoie une requête à l'API 
    .then((response) => { // on utilise .then pour gérer la réponse de l'API 
        return response.json() // on convertit la data retournée en json
    })
    .then((json) => { // .then gère la data en json et la rend accessible
        return console.log(json) // on affiche en console la data récupérée
    })

    return <p>hi</p>
}

export default CocktailsPage; 
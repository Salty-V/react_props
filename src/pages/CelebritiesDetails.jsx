import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import { useParams } from "react-router-dom";

function CelebritiesDetails({shittyStars}) {
    const { id } = useParams() // créer la variable et récupérer l'id 
    const starId = parseInt(id) // convertir l'id (chaine de caractères) en nombre via parseInt
    const starDetails = shittyStars.find(star => star.id === starId) // filtrer les données en fonction de l'id à l'aide de find 

    return (
        <>
            <Header />
            <h3>{starDetails.name}</h3>
            <p>{starDetails.bio}</p>
            <img src={starDetails.img} alt={starDetails.name} />
            <Footer />
        </>
    );
}

export default CelebritiesDetails;

// Deux erreurs au choix: 

// Cannot read properties of undefined (reading 'name')
// TypeError: Cannot read properties of undefined (reading 'name')

// Cannot read properties of undefined (reading 'find')
// TypeError: Cannot read properties of undefined (reading 'find')


// Le problème : via find je n'arrive pas à accéder aux propriétés du tableau. Maybe il ne fait pas le lettrage entre l'id en dur du tableau et l'integrer mais j'en doute. 
// Plus probable que l'utilisation de props soit mauvaise 

// Quoi qu'il ça fonctionne pas ça me gonfle... (:
// Moralité va falloir bosser les props 
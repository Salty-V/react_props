import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import { useParams } from "react-router-dom";
import CelebrityCard from "../components/CelebrityCard";

function CelebrityDetails () {
    const {starId} = useParams() // créer la variable qui permet de créer id integrer avec useParams()
    const starDetails = shittyStars.find(star => { return star.id === starId }).value; // créer une nouvelle variable qui va parcourir (find) le tableau (shittyStars) pour matcher (===) l'id généré par l'integrer (idInt) avec l'id récupéré dans le tableau (star.id)

    console.log(starId)

    return (
        <>
            <Header />
            {<CelebrityCard star={starDetails}/>}
            <Footer />
        </>
    )
};

export default CelebrityDetails;

// One problem left 
// TypeError: Cannot read properties of undefined (reading 'id')

// .id n'est pas lu comme élément du tableau ? ou star comme paramètre ? 

// Vérifs
// star (déclaré comme paramètre après find) est bien identique à celui appelé dans star.id
// réécrit si erreur de syntaxe 
// IA pas hyper pertinente 





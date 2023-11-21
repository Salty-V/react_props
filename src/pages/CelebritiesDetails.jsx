import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import { useParams } from "react-router-dom";
import CelebrityCard from "../components/CelebrityCard";

function CelebrityDetails () {
    const {idInt} = useParams() // créer la variable qui permet de créer id integrer avec useParams()
    const starDetails = shittyStars.find(star => { // créer une nouvelle variable qui va parcourir (find) le tableau (shittyStars) pour matcher (==) l'id généré par l'integrer (idInt) avec l'id récupéré dans le tableau (star.id)

        return idInt === star.id // essayer avec === to check if its working 
    })

    return (
        <>
            <Header />
            {<CelebrityCard star={starDetails}/>}
            <Footer />
        </>
    )
};

export default CelebrityDetails;
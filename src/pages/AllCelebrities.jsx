import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/product-utils";

function AllCelebrities () {

    return (
        <>
        <Header />

            <h1>Bienvenue au zoo</h1>
           {shittyStars.map(star => (
                <>
                    <h3>{star.name}</h3>
                    <p>{star.bio}</p>
                    <img src={star.img} alt={star.name}/>
                </>
           ))}
        
        <Footer />
        </>
    )
}

export default AllCelebrities;
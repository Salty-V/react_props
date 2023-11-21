import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import CelebrityCard from "../components/CelebrityCard";


function RandomStar () {

    const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

    const randomCelebrity = shittyStars[randomIndex];

    return (
        <>
        <Header />

         <h1>Random</h1>
            <CelebrityCard star={randomCelebrity} />
                
        <Footer />
        </>
    )
}

export default RandomStar;
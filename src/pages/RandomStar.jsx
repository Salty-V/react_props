import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";


function RandomStar () {

    const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

    const randomCelebrity = shittyStars[randomIndex];

    return (
        <>
        <Header />
         <h1>Random spécimen</h1>
        
            <h3>{randomCelebrity.name}</h3>
            <p>{randomCelebrity.bio}</p>
            <img src={randomCelebrity.img} alt={randomCelebrity.name}/>
                
        <Footer />
        </>
    )
}

export default RandomStar;
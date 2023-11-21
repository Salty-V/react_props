import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";


function HomePage() {

    const {id} = useParams();

    const allShittyStarsSortedByDate = shittyStars.sort((star1, star2) =>
    new Date (star1.publishedAt) - new Date (star2.publishedAt))

    const mostRecentPublishedSS = allShittyStarsSortedByDate.slice(0, 5)

    const pickedByTeam = shittyStars.filter(star => star.isPickedByTeam)

    return (
        <>
        <Header />
            <h1>Du people éclaté</h1>
                {mostRecentPublishedSS.map(star => (
                    <>
                    <h3>{star.name}</h3>
                    <p>{star.bio}</p>
                    <img src={star.img} alt={star.name}/>
                    </>

                ))}

            <h1>Choix de la rédac</h1>
                {pickedByTeam.map(star => (
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

export default HomePage; 
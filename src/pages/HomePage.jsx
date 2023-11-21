import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import CelebrityCard from "../components/CelebrityCard";


function HomePage() {

    const allShittyStarsSortedByDate = shittyStars.sort((star1, star2) =>
    new Date (star1.publishedAt) - new Date (star2.publishedAt))

    const mostRecentPublishedSS = allShittyStarsSortedByDate.slice(0, 5) // tester -5

    const pickedByTeam = shittyStars.filter(star => star.isPickedByTeam)

    return (
        <>
        <Header />
            <h1>People</h1>
                {mostRecentPublishedSS.map(star => {return <CelebrityCard star={star}/>
                })}

            <h1>Choosen ones</h1>
                {pickedByTeam.map(star => { return <CelebrityCard star={star}/>
                })}

        <Footer />
        </>
    )
}

export default HomePage; 
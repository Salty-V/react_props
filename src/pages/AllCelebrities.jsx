import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/product-utils";
import CelebrityCard from "../components/CelebrityCard";

function AllCelebrities () {

    return (
        <>
        <Header />

            <h1>Welcome</h1>
           {shittyStars.map(star => { 
            return <CelebrityCard star={star}/>
    })}
        
        <Footer />
        </>
    )
}

export default AllCelebrities;
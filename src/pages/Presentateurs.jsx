import PresentateurCard from "../components/PresentateurCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Presentateurs () {

    const presentateursList = ["AAA", "BBB", "CCC", "DDD", "EEE"]
    console.log(presentateursList)

    return (
        <>
        <Header />
        {presentateursList.map((pres) =>{
            return <PresentateurCard presName={pres}/>
        })}
        <Footer />
        </>
    )
}

export default Presentateurs;


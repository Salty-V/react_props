import { Link } from "react-router-dom";

function CelebrityCard(star) {
    return (
        <article>
            <Link to= {`/all/${star.id}/detail`}>
                <img src={star.img} alt={star.name}/>
            </Link>  
            <h3>{star.name}</h3>
            <p>{star.bio}</p>

        </article>
    )
}

console.log(CelebrityCard)

export default CelebrityCard;
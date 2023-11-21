import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <h3>Le ZOO</h3>
            <nav>
                <ul>
                    <Link to="/touslesdingos"><li>Tous les déchets</li></Link>
                    <Link to="/randomstar"><li>Déchet aléatoire</li></Link>
                    <Link to="/dingosdetails"><li>Déchet détaillé</li></Link>
                    <Link to ="/"><li>Go back Home</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header;
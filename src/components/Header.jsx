import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/touslesdingos"><li>All</li></Link>
                    <Link to="/randomstar"><li>Random</li></Link>
                    <Link to="/dingosdetails"><li>Details</li></Link>
                    <Link to ="/"><li>Home</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header;
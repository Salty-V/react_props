import { Link } from "react-router-dom";

function Header ({currentPage}) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    {currentPage === "all" ? ( 
                    <strong>
                        <Link to="/all">All</Link>
                    </strong>
                    ) : (
                        <Link to="/all">All</Link>
                    )}
                    </li>
                   
                    <li>
                   {currentPage === "random" ? ( 
                    <strong>
                        <Link to="/random">Random</Link>
                    </strong>
                    ) : (
                        <Link to="/random">Random</Link>
                    )}
                    </li>

                    <li>
                   {currentPage === "details" ? ( 
                    <strong>
                        <Link to="/all/:id">Details</Link>
                    </strong>
                    ) : (
                        <Link to="/all:id">Details</Link>
                    )}
                    </li>
                    
                    <li>
                    {currentPage === "home" ? ( 
                    <strong>
                        <Link to="/">Home</Link>
                    </strong>
                    ) : (
                        <Link to="/">Home</Link>
                    )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// // // 

export default Header;
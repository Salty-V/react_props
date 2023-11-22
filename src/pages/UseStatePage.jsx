import { useState } from "react";

function UseStatePage () {

    const [displayTxt, setDisplayTxt] = useState(true)

    const buttonClick = () => {
        setDisplayTxt(false)
    }

    return (
        <>
        {displayTxt && <p>Display or not display</p>}
    
        <button onClick={buttonClick}>Hide text</button>
        </>
    )
}

export default UseStatePage;
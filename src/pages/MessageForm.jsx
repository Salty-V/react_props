import { useState } from "react";

function MessageForm () {

    const [message, setMessage] = useState("")
    const txtChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <form>
            <label>
                Message : 
                <input onChange={txtChange} type="text" name="message" />
            </label>
            <p>Duplicate : {message}</p>
        </form>
    )
}

export default MessageForm;
import { useState } from "react";

function LikesPage () {

    const [likesCount, setLikesCount] = useState (0)

    const onButtonClick = () => {
        setLikesCount(likesCount + 1)
    }

    return (
        <main>
            <button onClick={onButtonClick}>Like</button>
            <p>Vous avez liké {likesCount} fois</p>
        </main>
    )
}

export default LikesPage; 

// 1. Je déclare à l'aide de useState() une variable à deux paramètres : 
//      - likesCount qui à pour valeur 0 (valeur de départ)
//      - setLikesCount qui garde en mémoire la valeur MàJ de likesCount au rechargement du composant

// 2. Je déclare la fonction onButtonClick() qui permet d'assigner une nouvelle valeur (likesCount +1) 
//    à setLikesCount à chaque éxécution de ma fonction 

// 3. Au sein du composant : 
//      - J'ajoute un event au button (onCLick) qui va appeler et exécuter ma fonction (onButtonClick)
//        à chaque click de l'utilisateur 
//      - J'ajoute la variable {likesCount} qui rendra la valeur du nombre de click (géré par la fonction)

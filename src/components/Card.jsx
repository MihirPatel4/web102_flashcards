import { useState } from 'react'

const Card = (props) => {
    const [flipped, setFlipped] = useState(false);
    
    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div id="Card" onClick={handleFlip} className={flipped ? "flipped" : ""}>
            <div className={`card-face front ${props.result}`}>
                <h4>Question:</h4>
                <p>{props.question}</p>
            </div>
            <div className={`card-face back ${props.result}`}>
                <h4>Answer:</h4>
                <p>{props.answer}</p>
            </div>
        </div>
    );
}

export default Card;
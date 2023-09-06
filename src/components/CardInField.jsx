import { useState } from "react";

const CardInField = (props) => {
    const { health, setHealth } = useState(props.initialHealth);

    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < health; i++) {
            hearts.push(<span key={i}>♥</span>);
        }
        return hearts;
    };

    return (
        <div>
            <img width="80rem" src={props.card.imgPath} />
            <p>{renderHearts()}</p>
        </div>
    );
};

export default CardInField;

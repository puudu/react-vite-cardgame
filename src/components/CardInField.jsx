import { useState } from "react";
import cardBack from "../assets/images/cards/cardBack_pink.png";

const CardInField = ({ card, initialHealth, onClick, selected }) => {
    const { health, setHealth } = useState(initialHealth);
    const { isActive, setIsActive } = useState(card.isActive);

    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < health; i++) {
            hearts.push(<span key={i}>♥</span>);
        }
        return hearts;
    };

    return (
        <div
            className={`border-2 border-black hover:border-2 hover:border-white ${
                selected ? "border-2 border-pink-500" : ""
            }`}
            onClick={onClick}
        >
            <img width="80rem" src={!isActive ? card.imgPath : cardBack} />
            <p>{renderHearts()}</p>
        </div>
    );
};

export default CardInField;

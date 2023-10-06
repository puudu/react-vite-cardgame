import cardBack from "../assets/images/cards/cardBack_pink.png";

const CardInField = ({ card, onClick, selected }) => {
    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < card.health; i++) {
            hearts.push(<span key={i}>♥</span>);
        }
        return hearts;
    };

    return (
        <div
            className={`rounded border-2 hover:border-2 hover:border-white ${
                selected
                    ? "rounded border-2 border-pink-400 "
                    : "border-zinc-900 "
            }`}
            onClick={onClick}
        >
            <img width="80rem" src={card.isActive ? card.imgPath : cardBack} />
            <p className="text-center">{renderHearts()}</p>
        </div>
    );
};

export default CardInField;

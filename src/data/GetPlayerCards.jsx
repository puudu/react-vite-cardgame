import cardHeartsQ from "../assets/images/cards/cardHeartsQ.png";
import cardDiamondsQ from "../assets/images/cards/cardDiamondsQ.png";
import cardCluesQ from "../assets/images/cards/cardClubsQ.png";
import cardSpadesQ from "../assets/images/cards/cardSpadesQ.png";
import cardJoker from "../assets/images/cards/cardJoker.png";

const GetPlayerCards = () => {
    const cardList = [
        {
            name: "Queen Aurora",
            type: "fire",
            imgPath: cardHeartsQ,
        },
        {
            name: "Queen Blanca",
            type: "water",
            imgPath: cardDiamondsQ,
        },
        {
            name: "Queen Miel",
            type: "leaf",
            imgPath: cardCluesQ,
        },
        {
            name: "Queen Unknown",
            type: "thunder",
            imgPath: cardSpadesQ,
        },
        {
            name: "Joker",
            type: "joker",
            imgPath: cardJoker,
        },
    ];
    return cardList;
};

export default GetPlayerCards;

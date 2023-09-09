import cardHeartsQ from "../assets/images/cards/cardHeartsQ.png";
import cardDiamondsQ from "../assets/images/cards/cardDiamondsQ.png";
import cardCluesQ from "../assets/images/cards/cardClubsQ.png";
import cardSpadesQ from "../assets/images/cards/cardSpadesQ.png";
import cardJoker from "../assets/images/cards/cardJoker.png";

const GetPlayerCards = () => {
    const cardList = [
        {
            id: 501,
            name: "Queen Aurora",
            type: "fire",
            imgPath: cardHeartsQ,
            isActive: true,
        },
        {
            id: 502,
            name: "Queen Blanca",
            type: "water",
            imgPath: cardDiamondsQ,
            isActive: true,
        },
        {
            id: 503,
            name: "Queen Miel",
            type: "leaf",
            imgPath: cardCluesQ,
            isActive: true,
        },
        {
            id: 504,
            name: "Queen Unknown",
            type: "thunder",
            imgPath: cardSpadesQ,
            isActive: true,
        },
        {
            id: 505,
            name: "Joker",
            type: "joker",
            imgPath: cardJoker,
            isActive: true,
        },
    ];
    return cardList;
};

export default GetPlayerCards;

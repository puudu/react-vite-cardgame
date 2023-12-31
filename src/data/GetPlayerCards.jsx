import cardHeartsQ from "../assets/images/cards/cardHeartsQ.png";
import cardDiamondsQ from "../assets/images/cards/cardDiamondsQ.png";
import cardCluesQ from "../assets/images/cards/cardClubsQ.png";
import cardSpadesQ from "../assets/images/cards/cardSpadesQ.png";
import cardJoker from "../assets/images/cards/cardJoker.png";

const GetPlayerCards = () => {
    const cardList = [
        {
            id: 501,
            name: "Fire Queen",
            type: "fire",
            imgPath: cardHeartsQ,
            isActive: true,
            health: 3,
        },
        {
            id: 502,
            name: "Water Queen",
            type: "water",
            imgPath: cardDiamondsQ,
            isActive: true,
            health: 3,
        },
        {
            id: 503,
            name: "Leaf Queen",
            type: "leaf",
            imgPath: cardCluesQ,
            isActive: true,
            health: 3,
        },
        {
            id: 504,
            name: "Electro Queen",
            type: "electro",
            imgPath: cardSpadesQ,
            isActive: true,
            health: 3,
        },
        {
            id: 505,
            name: "Joker",
            type: "joker",
            imgPath: cardJoker,
            isActive: true,
            health: 3,
        },
    ];
    return cardList;
};

export default GetPlayerCards;

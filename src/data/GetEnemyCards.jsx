import cardHeartsA from "../assets/images/cards/cardHeartsA.png";
import cardHearts2 from "../assets/images/cards/cardHearts2.png";
import cardHearts3 from "../assets/images/cards/cardHearts3.png";
import cardHearts4 from "../assets/images/cards/cardHearts4.png";
import cardHearts5 from "../assets/images/cards/cardHearts5.png";
import cardHearts6 from "../assets/images/cards/cardHearts6.png";
import cardHearts7 from "../assets/images/cards/cardHearts7.png";
import cardHearts8 from "../assets/images/cards/cardHearts8.png";
import cardHearts9 from "../assets/images/cards/cardHearts9.png";
import cardHearts10 from "../assets/images/cards/cardHearts10.png";

import cardDiamondsA from "../assets/images/cards/cardDiamondsA.png";
import cardDiamonds2 from "../assets/images/cards/cardDiamonds2.png";
import cardDiamonds3 from "../assets/images/cards/cardDiamonds3.png";
import cardDiamonds4 from "../assets/images/cards/cardDiamonds4.png";
import cardDiamonds5 from "../assets/images/cards/cardDiamonds5.png";
import cardDiamonds6 from "../assets/images/cards/cardDiamonds6.png";
import cardDiamonds7 from "../assets/images/cards/cardDiamonds7.png";
import cardDiamonds8 from "../assets/images/cards/cardDiamonds8.png";
import cardDiamonds9 from "../assets/images/cards/cardDiamonds9.png";
import cardDiamonds10 from "../assets/images/cards/cardDiamonds10.png";

import cardClubsA from "../assets/images/cards/cardClubsA.png";
import cardClubs2 from "../assets/images/cards/cardClubs2.png";
import cardClubs3 from "../assets/images/cards/cardClubs3.png";
import cardClubs4 from "../assets/images/cards/cardClubs4.png";
import cardClubs5 from "../assets/images/cards/cardClubs5.png";
import cardClubs6 from "../assets/images/cards/cardClubs6.png";
import cardClubs7 from "../assets/images/cards/cardClubs7.png";
import cardClubs8 from "../assets/images/cards/cardClubs8.png";
import cardClubs9 from "../assets/images/cards/cardClubs9.png";
import cardClubs10 from "../assets/images/cards/cardClubs10.png";

import cardSpadesA from "../assets/images/cards/cardSpadesA.png";
import cardSpades2 from "../assets/images/cards/cardSpades2.png";
import cardSpades3 from "../assets/images/cards/cardSpades3.png";
import cardSpades4 from "../assets/images/cards/cardSpades4.png";
import cardSpades5 from "../assets/images/cards/cardSpades5.png";
import cardSpades6 from "../assets/images/cards/cardSpades6.png";
import cardSpades7 from "../assets/images/cards/cardSpades7.png";
import cardSpades8 from "../assets/images/cards/cardSpades8.png";
import cardSpades9 from "../assets/images/cards/cardSpades9.png";
import cardSpades10 from "../assets/images/cards/cardSpades10.png";

const GetEnemyCards = () => {
    const cardList = [
        {
            id: 101,
            name: "Fire A",
            type: "fire",
            imgPath: cardHeartsA,
        },
        {
            id: 102,
            name: "Fire 2",
            type: "fire",
            imgPath: cardHearts2,
        },
        {
            id: 103,
            name: "Fire 3",
            type: "fire",
            imgPath: cardHearts3,
        },
        {
            id: 104,
            name: "Fire 4",
            type: "fire",
            imgPath: cardHearts4,
        },
        {
            id: 105,
            name: "Fire 5",
            type: "fire",
            imgPath: cardHearts5,
        },
        {
            id: 106,
            name: "Fire 6",
            type: "fire",
            imgPath: cardHearts6,
        },
        {
            id: 107,
            name: "Fire 7",
            type: "fire",
            imgPath: cardHearts7,
        },
        {
            id: 108,
            name: "Fire 8",
            type: "fire",
            imgPath: cardHearts8,
        },
        {
            id: 109,
            name: "Fire 9",
            type: "fire",
            imgPath: cardHearts9,
        },
        {
            id: 110,
            name: "Fire 10",
            type: "fire",
            imgPath: cardHearts10,
        },
        {
            id: 201,
            name: "Water A",
            type: "water",
            imgPath: cardDiamondsA,
        },
        {
            id: 202,
            name: "Water 2",
            type: "water",
            imgPath: cardDiamonds2,
        },
        {
            id: 203,
            name: "Water 3",
            type: "water",
            imgPath: cardDiamonds3,
        },
        {
            id: 204,
            name: "Water 4",
            type: "water",
            imgPath: cardDiamonds4,
        },
        {
            id: 205,
            name: "Water 5",
            type: "water",
            imgPath: cardDiamonds5,
        },
        {
            id: 206,
            name: "Water 6",
            type: "water",
            imgPath: cardDiamonds6,
        },
        {
            id: 207,
            name: "Water 7",
            type: "water",
            imgPath: cardDiamonds7,
        },
        {
            id: 208,
            name: "Water 8",
            type: "water",
            imgPath: cardDiamonds8,
        },
        {
            id: 209,
            name: "Water 9",
            type: "water",
            imgPath: cardDiamonds9,
        },
        {
            id: 210,
            name: "Water 10",
            type: "water",
            imgPath: cardDiamonds10,
        },
        {
            id: 301,
            name: "Leaf A",
            type: "leaf",
            imgPath: cardClubsA,
        },
        {
            id: 302,
            name: "Leaf 2",
            type: "leaf",
            imgPath: cardClubs2,
        },
        {
            id: 303,
            name: "Leaf 3",
            type: "leaf",
            imgPath: cardClubs3,
        },
        {
            id: 304,
            name: "Leaf 4",
            type: "leaf",
            imgPath: cardClubs4,
        },
        {
            id: 305,
            name: "Leaf 5",
            type: "leaf",
            imgPath: cardClubs5,
        },
        {
            id: 306,
            name: "Leaf 6",
            type: "leaf",
            imgPath: cardClubs6,
        },
        {
            id: 307,
            name: "Leaf 7",
            type: "leaf",
            imgPath: cardClubs7,
        },
        {
            id: 308,
            name: "Leaf 8",
            type: "leaf",
            imgPath: cardClubs8,
        },
        {
            id: 309,
            name: "Leaf 9",
            type: "leaf",
            imgPath: cardClubs9,
        },
        {
            id: 310,
            name: "Leaf 10",
            type: "leaf",
            imgPath: cardClubs10,
        },
        {
            id: 401,
            name: "Electro A",
            type: "electro",
            imgPath: cardSpadesA,
        },
        {
            id: 402,
            name: "Electro 2",
            type: "electro",
            imgPath: cardSpades2,
        },
        {
            id: 403,
            name: "Electro 3",
            type: "electro",
            imgPath: cardSpades3,
        },
        {
            id: 404,
            name: "Electro 4",
            type: "electro",
            imgPath: cardSpades4,
        },
        {
            id: 405,
            name: "Electro 5",
            type: "electro",
            imgPath: cardSpades5,
        },
        {
            id: 406,
            name: "Electro 6",
            type: "electro",
            imgPath: cardSpades6,
        },
        {
            id: 407,
            name: "Electro 7",
            type: "electro",
            imgPath: cardSpades7,
        },
        {
            id: 408,
            name: "Electro 8",
            type: "electro",
            imgPath: cardSpades8,
        },
        {
            id: 409,
            name: "Electro 9",
            type: "electro",
            imgPath: cardSpades9,
        },
        {
            id: 410,
            name: "Electro 10",
            type: "electro",
            imgPath: cardSpades10,
        },
    ];
    return cardList;
};

export default GetEnemyCards;

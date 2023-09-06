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
            name: "Fire A",
            type: "fire",
            imgPath: cardHeartsA,
        },
        {
            name: "Fire 2",
            type: "fire",
            imgPath: cardHearts2,
        },
        {
            name: "Fire 3",
            type: "fire",
            imgPath: cardHearts3,
        },
        {
            name: "Fire 4",
            type: "fire",
            imgPath: cardHearts4,
        },
        {
            name: "Fire 5",
            type: "fire",
            imgPath: cardHearts5,
        },
        {
            name: "Fire 6",
            type: "fire",
            imgPath: cardHearts6,
        },
        {
            name: "Fire 7",
            type: "fire",
            imgPath: cardHearts7,
        },
        {
            name: "Fire 8",
            type: "fire",
            imgPath: cardHearts8,
        },
        {
            name: "Fire 9",
            type: "fire",
            imgPath: cardHearts9,
        },
        {
            name: "Fire 10",
            type: "fire",
            imgPath: cardHearts10,
        },
        {
            name: "Water A",
            type: "water",
            imgPath: cardDiamondsA,
        },
        {
            name: "Water 2",
            type: "water",
            imgPath: cardDiamonds2,
        },
        {
            name: "Water 3",
            type: "water",
            imgPath: cardDiamonds3,
        },
        {
            name: "Water 4",
            type: "water",
            imgPath: cardDiamonds4,
        },
        {
            name: "Water 5",
            type: "water",
            imgPath: cardDiamonds5,
        },
        {
            name: "Water 6",
            type: "water",
            imgPath: cardDiamonds6,
        },
        {
            name: "Water 7",
            type: "water",
            imgPath: cardDiamonds7,
        },
        {
            name: "Water 8",
            type: "water",
            imgPath: cardDiamonds8,
        },
        {
            name: "Water 9",
            type: "water",
            imgPath: cardDiamonds9,
        },
        {
            name: "Water 10",
            type: "water",
            imgPath: cardDiamonds10,
        },
        {
            name: "Leaf A",
            type: "leaf",
            imgPath: cardClubsA,
        },
        {
            name: "Leaf 2",
            type: "leaf",
            imgPath: cardClubs2,
        },
        {
            name: "Leaf 3",
            type: "leaf",
            imgPath: cardClubs3,
        },
        {
            name: "Leaf 4",
            type: "leaf",
            imgPath: cardClubs4,
        },
        {
            name: "Leaf 5",
            type: "leaf",
            imgPath: cardClubs5,
        },
        {
            name: "Leaf 6",
            type: "leaf",
            imgPath: cardClubs6,
        },
        {
            name: "Leaf 7",
            type: "leaf",
            imgPath: cardClubs7,
        },
        {
            name: "Leaf 8",
            type: "leaf",
            imgPath: cardClubs8,
        },
        {
            name: "Leaf 9",
            type: "leaf",
            imgPath: cardClubs9,
        },
        {
            name: "Leaf 10",
            type: "leaf",
            imgPath: cardClubs10,
        },
        {
            name: "Electro A",
            type: "electro",
            imgPath: cardSpadesA,
        },
        {
            name: "Electro 2",
            type: "electro",
            imgPath: cardSpades2,
        },
        {
            name: "Electro 3",
            type: "electro",
            imgPath: cardSpades3,
        },
        {
            name: "Electro 4",
            type: "electro",
            imgPath: cardSpades4,
        },
        {
            name: "Electro 5",
            type: "electro",
            imgPath: cardSpades5,
        },
        {
            name: "Electro 6",
            type: "electro",
            imgPath: cardSpades6,
        },
        {
            name: "Electro 7",
            type: "electro",
            imgPath: cardSpades7,
        },
        {
            name: "Electro 8",
            type: "electro",
            imgPath: cardSpades8,
        },
        {
            name: "Electro 9",
            type: "electro",
            imgPath: cardSpades9,
        },
        {
            name: "Electro 10",
            type: "electro",
            imgPath: cardSpades10,
        },
    ];
    return cardList;
};

export default GetEnemyCards;

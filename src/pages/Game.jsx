import { useEffect, useState } from "react";
import CardInField from "../components/CardInField";
import GetEnemyCards from "../data/GetEnemyCards";
import GetPlayerCards from "../data/GetPlayerCards";
import ButtonArrow from "../components/ButtonArrow";

const Game = () => {
    const [playerCards, setPlayerCards] = useState(GetPlayerCards());
    const [enemyCards, setEnemyCards] = useState(GetEnemyCards());

    const initialEnemyCardField = [
        [enemyCards[0], enemyCards[0], enemyCards[0]],
        [enemyCards[1], enemyCards[1], enemyCards[1]],
        [enemyCards[22], enemyCards[2], enemyCards[2]],
    ];
    const initialPlayerCardField = [
        playerCards[1],
        playerCards[2],
        playerCards[3],
    ];

    const [currentEnemyCards, setCurrentEnemyCards] = useState(
        initialEnemyCardField
    );

    const [currentPlayerCards, setCurrentPlayerCards] = useState(
        initialPlayerCardField
    );

    return (
        <>
            <div className="mx-4 py-2">
                <h1 className="text-center text-gray-200">SCORE</h1>
                <div className="flex justify-center py-2">
                    <div className="grid grid-flow-row grid-cols-5 gap-x-5 gap-y-2">
                        <ButtonArrow left={true} />
                        {currentEnemyCards[0].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                            />
                        ))}
                        <ButtonArrow left={false} />
                        <ButtonArrow left={true} />
                        {currentEnemyCards[1].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                            />
                        ))}{" "}
                        <ButtonArrow left={false} />
                        <ButtonArrow left={true} />
                        {currentEnemyCards[2].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                            />
                        ))}
                        <ButtonArrow left={false} />
                    </div>
                </div>
            </div>
            <div className="bg-zinc-900 text-gray-200">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloremque, qui! Incidunt, voluptatem a sunt voluptates nisi
                    officiis voluptate! Sit reiciendis rerum doloremque eos
                    accusamus quaerat inventore perferendis possimus esse nihil!
                </p>
            </div>
        </>
    );
};

export default Game;

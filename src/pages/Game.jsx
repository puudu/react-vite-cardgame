import { useEffect, useState } from "react";
import CardInField from "../components/CardInField";
import GetEnemyCards from "../data/GetEnemyCards";
import GetPlayerCards from "../data/GetPlayerCards";

const Game = () => {
    const [playerCards, setPlayerCards] = useState(GetPlayerCards());
    const [enemyCards, setEnemyCards] = useState(GetEnemyCards());

    const [currentEnemyCards, setCurrentEnemyCards] = useState([
        enemyCards[0],
        enemyCards[1],
        enemyCards[2],
        enemyCards[3],
        enemyCards[4],
        enemyCards[5],
        enemyCards[6],
        enemyCards[7],
        enemyCards[8],
    ]);

    console.log(enemyCards);

    return (
        <>
            <div className="py-2">
                <h1 className="text-center">SCORE</h1>
                <div className="flex justify-center py-2">
                    <div className="grid grid-flow-row grid-cols-3 gap-1">
                        {currentEnemyCards.map((enemyCard, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={enemyCard}
                            />
                        ))}
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

import { useEffect, useState } from "react";
import CardInField from "../components/CardInField";
import GetEnemyCards from "../data/GetEnemyCards";
import GetPlayerCards from "../data/GetPlayerCards";
import ButtonArrow from "../components/ButtonArrow";

const Game = () => {
    const [playerInput, setPlayerInput] = useState(true);

    const randomCards = () => {
        const cards = [...currentEnemyCards];
        console.log(cards);
        for (let i = 0; i < 3; i++) {
            cards[i] = cards[i].map((card) => {
                if (!card.isActive) {
                    return {
                        ...card, // Copia las propiedades existentes del objeto
                        ...enemyCards[
                            Math.floor(Math.random() * enemyCards.length)
                        ],
                        isActive: true, // Actualiza isActive a true
                    };
                }
                return card; // Devuelve el objeto sin cambios si isActive ya es true
            });
        }

        console.log(cards);
        setCurrentEnemyCards(cards);
    };

    const moveRowToLeft = (row) => {
        if (playerInput === false) {
            return;
        }

        const cards = [...currentEnemyCards];
        const aux = cards[row][0];
        cards[row][0] = cards[row][1];
        cards[row][1] = cards[row][2];
        cards[row][2] = aux;

        setCurrentEnemyCards(cards);
    };

    const moveRowToRight = (row) => {
        if (playerInput === false) {
            return;
        }

        const cards = [...currentEnemyCards];
        const aux = cards[row][2];
        cards[row][2] = cards[row][1];
        cards[row][1] = cards[row][0];
        cards[row][0] = aux;

        setCurrentEnemyCards(cards);
    };

    const handleCardClick = (index) => {
        if (playerInput === false) {
            return;
        }

        if (selectedCardIndex === null) {
            // Si no hay una carta seleccionada, selecciona la carta actual
            setSelectedCardIndex(index);
        } else {
            // Si ya hay una carta seleccionada, realiza el intercambio
            const updatedPlayerCards = [...currentPlayerCards];
            const temp = updatedPlayerCards[selectedCardIndex];
            updatedPlayerCards[selectedCardIndex] = updatedPlayerCards[index];
            updatedPlayerCards[index] = temp;

            // Reinicia la selección
            setSelectedCardIndex(null);

            // Actualiza las cartas de jugador con el nuevo orden
            setCurrentPlayerCards(updatedPlayerCards);
        }
    };

    const checkWeakness = (senderType, targetType) => {
        if (senderType == targetType) {
            return false;
        }

        const elements1 = ["electro", "leaf", "fire", "water"];
        const elements2 = ["water", "electro", "leaf", "fire"];

        const senderIndex = elements1.indexOf(senderType);
        const targetIndex = elements2.indexOf(targetType);

        if (senderIndex == targetIndex) {
            return true;
        }
        return false;
    };

    const playerStrike = () => {
        setPlayerInput(false);

        const columnas = [0, 1, 2];

        // Iterar sobre las columnas y llamar a playerStrikeColumn con un retraso de 1 segundo
        columnas.forEach((col, index) => {
            setTimeout(() => {
                playerStrikeColumn(col);
            }, index * 1000); // El índice * 1000 representa el retraso en milisegundos (1 segundo)
        });

        setTimeout(() => {
            enemyStrike();
        }, 3000);

        setTimeout(() => {
            randomCards();
            setPlayerInput(true);
        }, 10000);
    };

    const playerStrikeColumn = (col) => {
        const playerCard = currentPlayerCards[col];
        const enemyField = [...currentEnemyCards];
        let defeatedCount = 0;

        if (playerCard.type == "joker") {
            enemyField[0][col].isActive = false;
            enemyField[1][col].isActive = false;
            enemyField[2][col].isActive = false;
            playerCard.health--;

            const updatedPlayerCards = [...currentPlayerCards];
            updatedPlayerCards[col] = playerCard;
            setCurrentPlayerCards(updatedPlayerCards);

            console.log(
                "Columna " + (col + 1).toString() + " / Eliminada por el Joker"
            );
        } else {
            for (let i = 0; i < 3; i++) {
                if (checkWeakness(playerCard.type, enemyField[i][col].type)) {
                    enemyField[i][col].isActive = false;
                    defeatedCount++;
                }
            }

            console.log(
                "Columna " +
                    (col + 1).toString() +
                    " / Enemigos derrotados: " +
                    defeatedCount.toString()
            );

            if (defeatedCount == 3) {
                elementalExplotion(playerCard.type);
            }
        }

        setCurrentEnemyCards(enemyField);
    };

    const elementalExplotion = (senderType) => {
        console.log("Explosion elemental de " + senderType);

        const enemyField = [...currentEnemyCards];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (checkWeakness(senderType, enemyField[j][i].type)) {
                    enemyField[j][i].isActive = false;
                }
            }
        }

        setCurrentEnemyCards(enemyField);
    };

    const enemyStrike = () => {
        const playerField = [...currentPlayerCards];
        const enemyField = [...currentEnemyCards];

        let index = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (enemyField[j][i].isActive) {
                    setTimeout(() => {
                        if (
                            checkWeakness(
                                enemyField[j][i].type,
                                playerField[i].type
                            )
                        ) {
                            console.log(
                                "El enemigo " +
                                    enemyField[j][i].name +
                                    " inflije 1 punto de daño a " +
                                    playerField[i].name
                            );
                            playerField[i].health--;
                        } else if (
                            enemyField[j][i].type == playerField[i].type
                        ) {
                            console.log(
                                "El enemigo " +
                                    enemyField[j][i].name +
                                    " ataca a " +
                                    playerField[i].name +
                                    ", pero no ocurre nada."
                            );
                        } else {
                            console.log(
                                "El enemigo " +
                                    enemyField[j][i].name +
                                    " ataca a " +
                                    playerField[i].name +
                                    ", ambos reciben 1 punto de daño."
                            );
                            playerField[i].health--;
                            enemyField[j][i].isActive = false;
                        }
                        index++;
                        setCurrentPlayerCards(playerField);
                        setCurrentEnemyCards(enemyField);
                    }, index * 1000);
                }
            }
        }
    };

    useEffect(() => {
        randomCards();
    }, []);

    const [playerCards, setPlayerCards] = useState(GetPlayerCards());
    const [enemyCards, setEnemyCards] = useState(GetEnemyCards());

    const initialEnemyCardField = [
        [enemyCards[0], enemyCards[1], enemyCards[2]],
        [enemyCards[1], enemyCards[3], enemyCards[10]],
        [enemyCards[22], enemyCards[2], enemyCards[2]],
    ];
    const initialPlayerCards = [
        playerCards[0],
        playerCards[1],
        playerCards[2],
        playerCards[3],
        playerCards[4],
    ];

    const [currentEnemyCards, setCurrentEnemyCards] = useState(
        initialEnemyCardField
    );

    const [currentPlayerCards, setCurrentPlayerCards] =
        useState(initialPlayerCards);

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    return (
        <>
            <div className="mx-4 py-2">
                <h1 className="text-center text-gray-200">SCORE</h1>
                <div className="flex justify-center py-2">
                    <div className="grid grid-flow-row grid-cols-5 gap-x-5 gap-y-2">
                        <ButtonArrow
                            left={true}
                            moveCards={moveRowToLeft}
                            row={0}
                        />
                        {currentEnemyCards[0].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                                onClick={null}
                                selected={false}
                            />
                        ))}
                        <ButtonArrow
                            left={false}
                            moveCards={moveRowToRight}
                            row={0}
                        />
                        <ButtonArrow
                            left={true}
                            moveCards={moveRowToLeft}
                            row={1}
                        />
                        {currentEnemyCards[1].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                                onClick={null}
                                selected={false}
                            />
                        ))}
                        <ButtonArrow
                            left={false}
                            moveCards={moveRowToRight}
                            row={1}
                        />
                        <ButtonArrow
                            left={true}
                            moveCards={moveRowToLeft}
                            row={2}
                        />
                        {currentEnemyCards[2].map((card, index) => (
                            <CardInField
                                key={index}
                                initialHealth={1}
                                card={card}
                                onClick={null}
                                selected={false}
                            />
                        ))}
                        <ButtonArrow
                            left={false}
                            moveCards={moveRowToRight}
                            row={2}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-zinc-900 py-2 text-gray-200">
                <div className="grid grid-flow-row grid-cols-3 gap-x-5 gap-y-2">
                    {currentPlayerCards.slice(0, 3).map((card, index) => (
                        <CardInField
                            key={card.id}
                            initialHealth={3}
                            card={card}
                            onClick={() => handleCardClick(index)}
                            selected={selectedCardIndex === index}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center bg-zinc-900 py-2 text-gray-200">
                <div className="grid grid-flow-row grid-cols-2 gap-x-5 gap-y-2">
                    {currentPlayerCards.slice(3, 5).map((card, index) => (
                        <CardInField
                            key={card.id}
                            card={card}
                            onClick={() => handleCardClick(index + 3)}
                            selected={selectedCardIndex === index + 3}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center bg-zinc-900 py-2 text-gray-200">
                <button
                    onClick={playerInput ? playerStrike : null}
                    className={`rounded-full bg-zinc-700 px-4 py-2 font-bold text-white ${
                        playerInput ? "hover:bg-pink-500" : "cursor-not-allowed"
                    }`}
                    disabled={!playerInput}
                >
                    Siguiente
                </button>
            </div>
        </>
    );
};

export default Game;

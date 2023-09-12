import { createContext, useContext, useState } from "react";

const GameLogContext = createContext();

export const GameLogProvider = ({ children }) => {
    const [gameLogs, setGameLogs] = useState([]);

    return (
        <GameLogContext.Provider value={{ gameLogs, setGameLogs }}>
            {children}
        </GameLogContext.Provider>
    );
};

export default GameLogProvider;

export const useGameLog = () => useContext(GameLogContext);

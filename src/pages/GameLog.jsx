import { useGameLog } from "../context/GameLogContext";

const GameLog = () => {
    const { gameLogs } = useGameLog();

    return (
        <div className=" bg-zinc-900 text-gray-200">
            <h1 className="text-center text-xl">Registro</h1>
            <div className="mx-12 mt-3 h-72 max-h-72 overflow-y-auto rounded-md bg-zinc-800 px-6 py-2">
                <ul>
                    {gameLogs.map((log, index) => (
                        <li
                            className={`${log[0] === "=" ? "text-center" : ""}`}
                            key={index}
                        >
                            {log}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameLog;

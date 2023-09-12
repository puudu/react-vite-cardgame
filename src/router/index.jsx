import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Game from "../pages/Game";
import GameLog from "../pages/GameLog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                children: [
                    {
                        index: true,
                        element: <Game />,
                    },
                    {
                        path: "/Log",
                        element: <GameLog />,
                    },
                ],
            },
        ],
    },
]);

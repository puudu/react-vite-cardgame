import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Game from "../pages/Game";
import Rules from "../pages/Rules";

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
                        path: "/rules",
                        element: <Rules />,
                    },
                ],
            },
        ],
    },
]);

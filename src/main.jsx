import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./gameRules.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import GameLogProvider from "./context/GameLogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GameLogProvider>
            <RouterProvider router={router} />
        </GameLogProvider>
    </React.StrictMode>
);

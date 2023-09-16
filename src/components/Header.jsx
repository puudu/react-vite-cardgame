import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-zinc-900 p-4">
            <div className="flex items-start ">
                <h1 className="mx-1 py-1  text-gray-300">Elemental Queens</h1>
                <NavLink
                    to="/"
                    className="mx-1 border-b-2 border-b-zinc-700 px-3 py-1 text-gray-300 hover:border-b-pink-500 focus:border-b-pink-500"
                >
                    Jugar
                </NavLink>
                <NavLink
                    to="/rules"
                    className="mx-1 border-b-2 border-b-zinc-700 px-3 py-1 text-gray-300 hover:border-b-pink-500 focus:border-b-pink-500"
                >
                    Reglas
                </NavLink>
            </div>
        </header>
    );
};

export default Header;

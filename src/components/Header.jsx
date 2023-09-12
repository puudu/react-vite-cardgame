import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-zinc-900 p-4 text-center">
            <NavLink to="/" className="text-gray-300">
                Queens n' Joker
            </NavLink>
        </header>
    );
};

export default Header;

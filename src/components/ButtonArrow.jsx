const ButtonArrow = ({ left }) => {
    return (
        <button className="my-3 rounded-full bg-zinc-900 hover:bg-gray-500">
            <p>{left ? "◀" : "▶"}</p>
        </button>
    );
};

export default ButtonArrow;

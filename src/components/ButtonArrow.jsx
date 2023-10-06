const ButtonArrow = ({ left, moveCards, row }) => {
    return (
        <button
            className="my-3 rounded-full bg-zinc-800  text-zinc-500 hover:bg-zinc-700 hover:text-white"
            onClick={() => moveCards(row)}
        >
            <p>{left ? "◀" : "▶"}</p>
        </button>
    );
};

export default ButtonArrow;

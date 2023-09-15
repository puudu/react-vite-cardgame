const ButtonArrow = ({ left, moveCards, row }) => {
    return (
        <button
            className="my-3 rounded-full bg-zinc-900 text-gray-200 hover:bg-gray-500"
            onClick={() => moveCards(row)}
        >
            <p>{left ? "◀" : "▶"}</p>
        </button>
    );
};

export default ButtonArrow;

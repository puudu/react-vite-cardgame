import Footer from "../components/Footer";

const Rules = () => {
    return (
        <>
            <div className="gameRules mx-5 py-2 text-zinc-400 xl:mx-80">
                <h1>Reglas básicas</h1>

                <h2>✨ Poderes elementales</h2>
                <p>
                    Cada carta tiene asociado un poder elemental, hay 4 tipos:
                </p>
                <ul>
                    <li>
                        🔥 Fuego (Representado por el símbolo de ♥ corazón)
                    </li>
                    <li>
                        💧 Agua (Representado por el símbolo de ♦ diamante)
                    </li>
                    <li>🌿 Hoja (Representado por el símbolo de ♣ trébol)</li>
                    <li>⚡ Rayo (Representado por el símbolo de ♠ pica)</li>
                </ul>

                <h2>👊 Fortalezas y debilidades</h2>
                <p>Cada elemento es fuerte o débil contra otro:</p>
                <ul>
                    <li>🔥 Fuego es fuerte contra 🌿 Hoja</li>
                    <li>🌿 Hoja es fuerte contra ⚡ Rayo</li>
                    <li>⚡ Rayo es fuerte contra 💧 Agua</li>
                    <li>💧 Agua es fuerte contra 🔥 Fuego</li>
                </ul>

                <h2>🎯 Cómo jugar</h2>
                <p>
                    El juego se juega en un formato de 3x3, donde se colocan
                    cartas aleatorias representando a tus enemigos. Debajo de
                    estas cartas, pones una fila de 3 cartas que formarán tu
                    línea de ataque y otra fila para tu banquillo.
                </p>
                <p>
                    Tienes 5 cartas en tu mano: cuatro reinas correspondientes a
                    cada elemento y un Joker. Cada una de estas cartas tiene 3
                    puntos de vida.
                </p>
                <p>
                    Debes ubicar tus cartas de tal manera que 3 de ellas queden
                    en su línea de ataque y 2 en el banquillo.
                </p>

                <h2>📏 Alineamiento de cartas</h2>
                <p>
                    Tu objetivo es derrotar la mayor cantidad de cartas enemigas
                    posible antes de que 3 de tus cartas sean eliminadas. En tu
                    línea de ataque, colocas tus cartas de manera que puedas
                    derrotar la mayor cantidad de enemigos durante los turnos de
                    las reinas y recibir el menor daño posible durante el turno
                    del enemigo. Puedes cambiar el alineamiento de las filas
                    enemigas para preparar mejor tu turno.
                </p>
                <p>
                    Todas las cartas enemigas poseen 1 punto de vida, por lo que
                    pueden ser derrotadas de un golpe.
                </p>

                <h2>👑 Turno de las reinas</h2>
                <p>
                    En tu turno, cada reina realizará un ataque de su elemento
                    en toda la columna enemiga en la que esté ubicada. Todos los
                    enemigos débiles al elemento de la reina serán derrotados.
                </p>

                <h2>💥 Explosión elemental</h2>
                <p>
                    Si logras derrotar a todos los enemigos de una columna
                    (donde todos son débiles contra la reina), se ejecutará una
                    explosión elemental de ese elemento en todo el campo
                    enemigo. Esto derrotará instantáneamente a todos los
                    enemigos débiles a ese elemento.
                </p>

                <h2>😈 Turno enemigo</h2>
                <p>
                    Las cartas enemigas que no fueron derrotadas atacarán a tus
                    reinas. Si el elemento del enemigo es fuerte contra el
                    elemento de la reina, esta recibirá un punto de daño. Si son
                    del mismo elemento, no pasa nada. Si no tienen una ventaja o
                    desventaja elemental, la reina recibe un punto de daño pero
                    el enemigo es derrotado.
                </p>

                <h2>🃏 Joker</h2>
                <p>
                    El Joker tiene todos los daños elementales, lo que significa
                    que puede eliminar una columna completa independientemente
                    de los elementos de los enemigos. Sin embargo, recibirá un
                    punto de daño al hacerlo, lo que significa que solo puede
                    usarse un máximo de 3 veces.
                </p>

                <h2>💀 Fin del juego</h2>
                <p>
                    El juego termina cuando el jugador tiene solo 2 cartas
                    disponibles.
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Rules;

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="bg-zinc-800">
            <Header />
            <main>
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Cargando...</div>
                )}
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;

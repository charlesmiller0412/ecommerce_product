import { useState } from "react";
import Navbar from "./sections/navbar/Navbar";

function App() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [showMobileMenu, setShowMobileMenu] = useState(true);

    return (
        <div className="App">
            <header>
                <Navbar
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                    showMobileMenu={showMobileMenu}
                    setShowMobileMenu={setShowMobileMenu}
                />
            </header>
            <main></main>
        </div>
    );
}

export default App;

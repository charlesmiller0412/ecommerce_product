import { useState } from "react";
import Gallery from "./sections/main/gallery/gallery";
import { Info } from "./sections/main/info/info";
import Navbar from "./sections/navbar/Navbar";

function App() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [showMobileMenu, setShowMobileMenu] = useState(true);
    const [quantity, setQuantity] = useState(0);

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
            <main>
                <Gallery />
                <Info quantity={quantity} setQuantity={setQuantity} />
            </main>
        </div>
    );
}

export default App;

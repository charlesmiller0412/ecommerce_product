import { useState } from "react";
import Gallery from "./sections/main/gallery";
import { Info } from "./sections/main/info";
import { Lighthouse } from "./sections/main/lighthouse";
import Navbar from "./sections/navbar/Navbar";

function App() {
    const [shoppingCart, setShoppingCart] = useState({});
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [showLighthouse, setShowLighthouse] = useState(false);

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
                <Gallery
                    showLighthouse={showLighthouse}
                    setShowLighthouse={setShowLighthouse}
                />
                <Info
                    quantity={quantity}
                    setQuantity={setQuantity}
                    pingCart={shoppingCart}
                    shoppingCart={shoppingCart}
                    setShoppingCart={setShoppingCart}
                />
                {showLighthouse && (
                    <Lighthouse
                        setShowLighthouse={setShowLighthouse}
                        showLighthouse={showLighthouse}
                    />
                )}
            </main>
        </div>
    );
}

export default App;

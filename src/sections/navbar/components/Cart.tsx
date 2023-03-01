import { DeleteIcon } from "../../../assets/deleteIcon";
import { Button } from "../../../components/button";

export const Cart = (props: any) => {
    let cart = props.shoppingCart;
    let setCart = props.setShoppingCart;

    // * delete item from cart
    function clearCart() {
        props.setShoppingCart({});
    }

    const subtractOne = () => {
        setCart({
            ...cart,
            quantity: (cart.quantity -= 1),
        });
    };
    return (
        <div className="navbar__userInfo--cart-items">
            <div className="navbar__userInfo--cart-items-heading">Cart</div>
            <div className="navbar__userInfo--cart-items-content">
                {cart.quantity == null ||
                cart.quantity == 0 ||
                cart.quantity == undefined ? (
                    "Your cart is empty."
                ) : (
                    <>
                        <div className="navbar__userInfo--cart-items-content-listing">
                            <img
                                src={cart.image}
                                alt={cart.title}
                                className="navbar__userInfo--cart-items-content-listing-image"
                            />
                            <div className="navbar__userInfo--cart-items-content-listing-info">
                                <span className="navbar__userInfo--cart-items-content-listing-info-title">
                                    {cart.title}
                                </span>
                                <div className="navbar__userInfo--cart-items-content-listing-info-pricing">
                                    {cart.quantity > 1 && (
                                        <span className="navbar__userInfo--cart-items-content-listing-info-pricing-quantity">
                                            ${cart.price.toFixed(2)} x{" "}
                                            {cart.quantity}
                                        </span>
                                    )}
                                    <span className="navbar__userInfo--cart-items-content-listing-info-pricing-finalPrice">
                                        $
                                        {(cart.price * cart.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="navbar__userInfo--cart-items-content-listing-update">
                                <div
                                    className="add"
                                    onClick={() => {
                                        setCart({
                                            ...cart,
                                            quantity: (cart.quantity += 1),
                                        });
                                    }}
                                >
                                    +
                                </div>
                                <div
                                    className="subtract"
                                    onClick={() => {
                                        setCart({
                                            ...cart,
                                            quantity: (cart.quantity -= 1),
                                        });
                                    }}
                                >
                                    -
                                </div>
                            </div>
                            <div
                                className="navbar__userInfo--cart-items-content-listing-delete"
                                onClick={clearCart}
                            >
                                <DeleteIcon />
                            </div>
                        </div>
                        <Button
                            text="Checkout"
                            className="navbar__userInfo--cart-items-content-checkout"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

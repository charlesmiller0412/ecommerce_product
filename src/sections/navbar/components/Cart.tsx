export const Cart = (props: any) => {
    let cart = props.shoppingCart;
    return (
        <div className="navbar__userInfo--cart-items">
            <div className="navbar__userInfo--cart-items-heading">Cart</div>
            <div className="navbar__userInfo--cart-items-content">
                {cart.length > 0
                    ? cart.map((item: any) => item)
                    : "Your cart is empty"}
            </div>
        </div>
    );
};

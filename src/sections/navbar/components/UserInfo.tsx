import { useState } from "react";
import { CartIcon } from "../../../assets/cartSVG";
import Avatar from "../../../assets/image-avatar.png";
import { Cart } from "./Cart";
import { UserMenu } from "./UserMenu";

export const UserInfo = (props: any) => {
    const [showCart, setShowCart] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="navbar__userInfo">
            <div
                className="navbar__userInfo--cartIcon"
                id="cartIcon"
                onClick={() => {
                    // * alternate visibility of shopping cart on click and hide other menus
                    setShowCart(!showCart);
                    setShowUserMenu(false);
                }}
            >
                <CartIcon
                    className="navbar__userInfo--cart-image"
                    height={20}
                    width={22}
                />
                {props.shoppingCart.quantity > 0 && (
                    <div className="navbar__userInfo--cartIcon-quantity">
                        {props.shoppingCart.quantity}
                    </div>
                )}
            </div>
            <div
                className="navbar__userInfo--avatar"
                onClick={() => {
                    // * alternate visibility of user menu on click and hide other menus

                    setShowUserMenu(!showUserMenu);
                    setShowCart(false);
                }}
            >
                <img
                    src={Avatar}
                    alt="avatar"
                    className="navbar__userInfo--avatar-image"
                />
            </div>

            {showCart && (
                <Cart
                    shoppingCart={props.shoppingCart}
                    setShoppingCart={props.setShoppingCart}
                    setShowCart={setShowCart}
                />
            )}
            {showUserMenu && (
                <UserMenu
                    setShowUserMenu={setShowUserMenu}
                    setShowCart={setShowCart}
                />
            )}
        </div>
    );
};

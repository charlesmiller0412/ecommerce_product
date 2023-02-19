import Cart from "../../../assets/icon-cart.svg";
import Avatar from "../../../assets/image-avatar.png";

export const UserInfo = () => {
    return (
        <div className="navbar__userInfo">
            <div className="navbar__userInfo--cart">
                <a href="" className="navbar__userInfo--cart-link">
                    <picture className="navbar__userInfo--cart-picture">
                        <img
                            src={Cart}
                            alt="shopping cart"
                            className="navbar__userInfo--cart-image"
                        />
                    </picture>
                </a>
            </div>
            <div className="navbar__userInfo--avatar">
                <a href="" className="navbar__userInfo--avatar-link">
                    <picture className="navbar__userInfo--avatar-picture">
                        <img
                            src={Avatar}
                            alt="avatar"
                            className="navbar__userInfo--avatar-image"
                        />
                    </picture>
                </a>
            </div>
        </div>
    );
};

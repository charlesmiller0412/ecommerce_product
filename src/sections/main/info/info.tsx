import { CartIcon } from "../../../assets/cartSVG";
import { MinusIcon } from "../../../components/Minus";
import { PlusIcon } from "../../../components/Plus";
export const Info = (props: any) => {
    let sneakerInfo = {
        title: "fall limited edition sneakers",
        info: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        originalPrice: 250.0,
        discount: 0.5,
    };

    let discountedPrice = sneakerInfo.originalPrice * sneakerInfo.discount;

    return (
        <div className="info">
            <h2 className="info__heading">sneaker company</h2>
            <h1 className="info__title">{sneakerInfo.title}</h1>
            <p className="info__text">{sneakerInfo.info}</p>
            <div className="info__prices">
                <div className="info__prices--left">
                    <span className="info__prices--left-current">
                        ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="info__prices--left-discount">
                        {sneakerInfo.discount.toFixed(2).slice(2, 4)}%
                    </span>
                </div>
                <span className="info__prices--originalPrice">
                    ${sneakerInfo.originalPrice.toFixed(2)}
                </span>
            </div>
            <div className="info__cart">
                <div className="info__cart--quantity">
                    <div
                        className="info__cart--quantity-minus-container"
                        onClick={() => {
                            props.quantity > 0 &&
                                props.setQuantity(props.quantity - 1);
                        }}
                    >
                        <MinusIcon />
                    </div>
                    <div className="info__cart--quantity-number">
                        {props.quantity}
                    </div>
                    <div
                        className="info__cart--quantity-plus-container"
                        onClick={() => {
                            props.setQuantity(props.quantity + 1);
                        }}
                    >
                        <PlusIcon />
                    </div>
                </div>
                <div className="info__cart--cart">
                    <CartIcon width={22} height={20} />
                    <span className="info__cart--cart-text">Add to cart</span>
                </div>
            </div>
        </div>
    );
};

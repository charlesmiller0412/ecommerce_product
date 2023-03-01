import { CartIcon } from "../../assets/cartSVG";
import { MinusIcon } from "../../assets/Minus";
import { PlusIcon } from "../../assets/Plus";
import { Button } from "../../components/button";
import sneakerImage from "../../assets/image-product-1-thumbnail.jpg";
export const Info = (props: any) => {
    // * product data
    let sneakerInfo = {
        title: "fall limited edition sneakers",
        info: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        originalPrice: 250.0,
        discount: 0.5,
    };

    // * get discounted prices
    let discountedPrice = sneakerInfo.originalPrice * sneakerInfo.discount;

    // * add to cart
    function addToCart() {
        // push title, quantity, image, discountedPrice
        props.quantity > 0 &&
            props.setShoppingCart({
                title: sneakerInfo.title,
                quantity:
                    props.shoppingCart.quantity > 0
                        ? (props.shoppingCart.quantity += props.quantity)
                        : props.quantity,
                image: sneakerImage,
                price: discountedPrice,
            });
    }

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
                            // * if quantity is greater than 0 then subtract 1 from current state
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
                <Button
                    text="Add to cart"
                    className="info__cart--cart"
                    onClick={addToCart}
                    icon={<CartIcon width={22} height={20} />}
                />
            </div>
        </div>
    );
};

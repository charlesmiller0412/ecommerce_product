import { CartIcon } from "../assets/cartSVG";

export const Button = (props: any) => {
    return (
        <div className={"button " + props.className} onClick={props.onClick}>
            {props.icon}
            <span className="info__cart--cart-text">{props.text}</span>
        </div>
    );
};

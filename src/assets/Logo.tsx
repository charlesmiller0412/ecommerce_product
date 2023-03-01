import Sneakers from "../assets/logo.svg";
export const Logo = () => {
    return (
        <picture className="logo">
            <a href="#">
                <img src={Sneakers} alt="logo" />
            </a>
        </picture>
    );
};

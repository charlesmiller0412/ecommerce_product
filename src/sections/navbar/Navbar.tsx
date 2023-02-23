import Hamburger from "../../assets/icon-menu.svg";
import Close from "../../assets/icon-close.svg";
import { Logo } from "../../components/Logo";
import MobileMenu from "../mobileMenu";
import { UserLinks } from "./components/userLinks";
import { UserInfo } from "./components/UserInfo";

export default function Navbar(props: any) {
    // alter showing mobile menu onClick of menu icon
    function handleMobileMenu() {
        props.setShowMobileMenu(!props.showMobileMenu);
    }

    return (
        <nav className="navbar">
            <div className="navbar__left">
                {/* if showMenu == true then show "x" icon; else show "hamburger" */}
                <div className="navbar__left--menu" onClick={handleMobileMenu}>
                    {props.showMobileMenu ? (
                        <img src={Close} alt="close menu" />
                    ) : (
                        <img src={Hamburger} alt="open menu" />
                    )}
                </div>
                <div className="navbar__left--logo">
                    <Logo />
                </div>
                <UserLinks className="navbar__left--links" />
            </div>
            <div className="navbar__userInfo">
                <UserInfo
                    shoppingCart={props.shoppingCart}
                    setShoppingCart={props.setShoppingCart}
                />
            </div>
            <MobileMenu showMobileMenu={props.showMobileMenu} />
        </nav>
    );
}

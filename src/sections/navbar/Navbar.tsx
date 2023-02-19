import Hamburger from "../../assets/icon-menu.svg";
import { Logo } from "../../components/Logo";
import { UserLinks } from "./components/Links";
import { UserInfo } from "./components/UserInfo";
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <div className="navbar__left--menu">
                    <img src={Hamburger} alt="menu icon" />
                </div>
                <div className="navbar__left--logo">
                    <Logo />
                </div>
                <div className="navbar__left--links">
                    <UserLinks />
                </div>
            </div>
            <div className="navbar__userInfo">
                <UserInfo />
            </div>
        </nav>
    );
}

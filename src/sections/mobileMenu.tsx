import { UserLinks } from "./navbar/components/userLinks";

export default function MobileMenu(props: any) {
    return (
        // * active states for mobile menu on click of hamburger and x in navbar.tsx
        <div
            className={
                props.showMobileMenu
                    ? "navbar__mobileMenu-active navbar__mobileMenu"
                    : "navbar__mobileMenu"
            }
        >
            <div
                className={
                    props.showMobileMenu
                        ? "navbar__mobileMenu--linkContainer navbar__mobileMenu--linkContainer-active"
                        : "navbar__mobileMenu--linkContainer"
                }
            >
                <UserLinks className="navbar__mobileMenu--linkContainer-links" />
            </div>
        </div>
    );
}

export const UserMenu = (props: any) => {
    return (
        <div className="navbar__userInfo--userMenu">
            <h5 className="navbar__userInfo--userMenu-heading">Welcome!</h5>
            <li className="navbar__userInfo--userMenu-link">
                <a href="#">Preferences</a>
            </li>
            <li
                className="navbar__userInfo--userMenu-link"
                onClick={() => {
                    props.setShowUserMenu(false);
                    props.setShowCart(true);
                }}
            >
                <a href="#">Show Cart</a>
            </li>
            <li className="navbar__userInfo--userMenu-link">
                <a href="#">Log Out</a>
            </li>
        </div>
    );
};

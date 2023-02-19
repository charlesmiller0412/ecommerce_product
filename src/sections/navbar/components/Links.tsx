export const UserLinks = (className: any) => {
    let links = ["collections", "men", "women", "about", "contact"];
    return (
        <ul className="navbar__left--links">
            {links.map((link: string) => (
                <li className="navbar__left--links-link" key={link}>
                    <a href="#">{link}</a>
                </li>
            ))}
        </ul>
    );
};

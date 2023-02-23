export const UserLinks = (props: any) => {
    let links = ["collections", "men", "women", "about", "contact"];
    return (
        <ul className={`${props.className}`}>
            {links.map((link: string) => (
                <li className={`${props.className}-link`} key={link}>
                    <a href="#">{link}</a>
                </li>
            ))}
        </ul>
    );
};

import { Link } from "react-router-dom";

function Header() {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <header className="site-header">
            <Link to="/" className="logo">
                <img src={baseUrl + "images/logo.png"} alt="logo" />
            </Link>

            <nav className="main-nav">
                <Link to="/">Home</Link>
                <a href={baseUrl + "#contact"}>Contact</a>
                <a href={baseUrl + "#about"}>About</a>
            </nav>
        </header>
    );
}

export default Header;

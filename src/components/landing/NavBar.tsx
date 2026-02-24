export function NavBar() {
    return (
        <nav>
            <div className="nav-logo">
                Saha<span>chari</span>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="#story">Our Story</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#why">Why Us</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="#contact" className="nav-cta">
                        Get in Touch
                    </a>
                </li>
            </ul>
        </nav>
    )
}

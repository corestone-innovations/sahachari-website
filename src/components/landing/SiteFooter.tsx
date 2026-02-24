export function SiteFooter() {
    return (
        <footer>
            <div className="footer-logo">
                Saha<span>chari</span>
            </div>
            <ul className="footer-links">
                <li>
                    <a href="#story">Story</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="mailto:contact@sahachari.in">Contact</a>
                </li>
            </ul>
            <div className="footer-copy">
                © 2024 Sahachari · Built with{' '}
                <span className="material-symbols-rounded" aria-hidden="true">
                    favorite
                </span>{' '}
                at CUSAT, Kerala
            </div>
        </footer>
    )
}

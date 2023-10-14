const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div>
                    <h3>Say Hello</h3>
                    <ul className="contact">
                        <li>
                            <a href="https://www.linkedin.com/in/helter-conforme-velez-59848218b/" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/helterdev" target="_blank">Helterdev</a>
                        </li>
                        <li>
                            <a href="mailto: heltherv@gmail.com" target="_blank">heltherv@gmail.com</a>
                        </li>

                    </ul>
                </div>
                <div className="footer-date">
                    <span>© {year}</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrapper">
                <div className="site-contact">
                    <h3 className="footer-heading">
                        Contact
                    </h3>

                    <ul className="social-media-list">
                        <li>
                            <a href="mailto:blcu216@gmail.com" className="username">
                                <i className="far fa-envelope"></i>
                                <span>&nbsp;blcu216@gmail.com</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/bl216" title="Fork me on GitHub" className="username">
                                <i className="fab fa-github"></i>
                                <span>&nbsp;bl216</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
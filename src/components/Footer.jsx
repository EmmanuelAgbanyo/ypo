import { Link } from 'react-router-dom'
import './Footer.css'

const LOGO = '/img/ypo-logo.png'

export default function Footer() {
    return (
        <footer className="footer" aria-label="Site footer">
            <div className="footer__body">
                <div className="container">
                    <div className="footer__grid">

                        {/* Column 1 — Brand */}
                        <div className="footer__col">
                            <Link to="/" className="footer__brand">
                                <img src={LOGO} alt="Youth Path Organisation Logo" className="footer__logo" />
                                <span className="footer__brand-name">Youth Path Organisation</span>
                            </Link>
                            <p className="footer__tagline">Igniting apt youth-led initiatives for development across Ghana and beyond.</p>
                            <div className="footer__socials">
                                <a href="#" aria-label="Facebook" className="footer__social-btn"><i className="fab fa-facebook-f" /></a>
                                <a href="#" aria-label="Twitter / X" className="footer__social-btn"><i className="fab fa-x-twitter" /></a>
                                <a href="#" aria-label="LinkedIn" className="footer__social-btn"><i className="fab fa-linkedin-in" /></a>
                                <a href="#" aria-label="Instagram" className="footer__social-btn"><i className="fab fa-instagram" /></a>
                                <a href="#" aria-label="YouTube" className="footer__social-btn"><i className="fab fa-youtube" /></a>
                            </div>
                        </div>

                        {/* Column 2 — Contact */}
                        <div className="footer__col">
                            <h4 className="footer__heading">Contact Info</h4>
                            <ul className="footer__info">
                                <li><i className="fas fa-map-marker-alt" /><span>Ofankor, Accra — Ghana</span></li>
                                <li><i className="fas fa-mail-bulk" /><span>P.O. Box GP 18932, Accra Central, Greater Accra Region</span></li>
                                <li><i className="fas fa-phone" /><a href="tel:+233273932331">+233 (0)273 932 331</a></li>
                                <li><i className="fas fa-envelope" /><a href="mailto:info@youthpathorganisation.org">info@youthpathorganisation.org</a></li>
                            </ul>
                        </div>

                        {/* Column 3 — Quick Links */}
                        <div className="footer__col">
                            <h4 className="footer__heading">Quick Links</h4>
                            <ul className="footer__nav">
                                {[
                                    ['/', 'Home'],
                                    ['/about', 'About Us'],
                                    ['/causes', 'Our Causes'],
                                    ['/services', 'What We Do'],
                                    ['/team', 'Our Team'],
                                    ['/donate', 'Donate'],
                                    ['/contact', 'Contact Us'],
                                ].map(([to, label]) => (
                                    <li key={to}><Link to={to} className="footer__nav-link"><i className="fas fa-chevron-right" />{label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 — Partners + Newsletter */}
                        <div className="footer__col">
                            <h4 className="footer__heading">Our Partners</h4>
                            <ul className="footer__partners">
                                <li><i className="fas fa-handshake" /> Regeneration International</li>
                                <li><i className="fas fa-leaf" /> SDSN Ghana</li>
                                <li><i className="fas fa-globe" /> UN SDG Alliance</li>
                                <li><i className="fas fa-seedling" /> GreenGhana Initiative</li>
                                <li><i className="fas fa-university" /> University of Ghana</li>
                            </ul>
                            <div className="footer__newsletter">
                                <h5>Stay Updated</h5>
                                <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
                                    <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Legal bar */}
            <div className="footer__legal">
                <div className="container">
                    <p>Youth Path Organisation is registered &amp; incorporated under the Ghana Companies Code 1963 — Act 179. <strong>Reg No. G-30,458</strong></p>
                    <p>Registered Ghanaian Charity under the Department of Social Welfare and Community Development as a National Non-Governmental Organisation. <strong>Registration No. DSW/5683</strong></p>
                    <div className="footer__copyright">
                        <span>© {new Date().getFullYear()} <Link to="/">Youth Path Organisation</Link>. All Rights Reserved.</span>
                        <span>Designed by Emmanuel Agbanyo | NexusByte Technologies</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

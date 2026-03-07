import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const LOGO = '/img/ypo-logo.png'

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Causes', to: '/causes' },
    {
        label: 'Pages', to: '#',
        children: [
            { label: 'What We Do', to: '/services' },
            { label: 'Our Team', to: '/team' },
            { label: 'Donate', to: '/donate' },
            { label: 'Financials', to: '/financials' },
        ]
    },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [dropOpen, setDropOpen] = useState(false)
    const [showAnnounce, setShowAnnounce] = useState(true)
    const dropRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close dropdown on outside click
    useEffect(() => {
        const onDoc = e => {
            if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
        }
        document.addEventListener('mousedown', onDoc)
        return () => document.removeEventListener('mousedown', onDoc)
    }, [])

    const close = () => { setOpen(false); setDropOpen(false) }

    return (
        <header className={`site-header ${!showAnnounce ? 'announce-closed' : ''}`}>
            {/* Announcement bar */}
            {showAnnounce && (
                <div className="nav-announce">
                    <span>🌍 <strong>YPO Annual Impact Report 2024</strong> is now available —&nbsp;
                        <Link to="/financials" style={{ color: '#fff', textDecoration: 'underline' }}>Read the Report</Link>
                    </span>
                    <button className="nav-announce__close" onClick={() => setShowAnnounce(false)} aria-label="Dismiss announcement">&times;</button>
                </div>
            )}

            {/* Top bar */}
            <div className="nav-topbar">
                <div className="container nav-topbar__inner">
                    <span><i className="fas fa-map-marker-alt" /> Ofankor, Accra — Ghana
                        &nbsp;&nbsp;<i className="fas fa-envelope" />&nbsp;
                        <a href="mailto:info@youthpathorganisation.org">info@youthpathorganisation.org</a>
                    </span>
                    <span className="nav-topbar__socials">
                        Follow us:
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                        <a href="#" aria-label="Twitter / X"><i className="fab fa-x-twitter" /></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                    </span>
                </div>
            </div>

            {/* Main nav */}
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Main navigation">
                <div className="container navbar__inner">
                    {/* Logo */}
                    <Link to="/" className="navbar__brand" onClick={close} aria-label="Youth Path Organisation Home">
                        <img src={LOGO} alt="YPO Logo" className="navbar__logo" />
                        <span className="navbar__name">
                            Youth Path<span className="navbar__name-accent"> Organisation</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="navbar__links">
                        {links.map(link =>
                            link.children ? (
                                <li key={link.label} className="navbar__item navbar__item--drop" ref={dropRef}>
                                    <button
                                        className="navbar__link navbar__drop-toggle"
                                        onClick={() => setDropOpen(p => !p)}
                                        aria-haspopup="true"
                                        aria-expanded={dropOpen}
                                    >
                                        {link.label} <i className={`fas fa-chevron-down navbar__caret ${dropOpen ? 'open' : ''}`} />
                                    </button>
                                    <ul className={`navbar__dropdown ${dropOpen ? 'navbar__dropdown--open' : ''}`}>
                                        {link.children.map(c => (
                                            <li key={c.label}>
                                                <NavLink to={c.to} className="navbar__drop-item" onClick={() => setDropOpen(false)}>
                                                    {c.label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={link.label} className="navbar__item">
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                                        end={link.to === '/'}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>

                    {/* CTA */}
                    <Link to="/donate" className="btn btn-primary navbar__cta" onClick={close}>
                        Donate Now <i className="fas fa-heart" />
                    </Link>

                    {/* Hamburger */}
                    <button
                        className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
                        onClick={() => setOpen(p => !p)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <aside className={`nav-drawer ${open ? 'nav-drawer--open' : ''}`} aria-hidden={!open}>
                <ul className="nav-drawer__links">
                    {links.map(link =>
                        link.children ? (
                            <li key={link.label}>
                                <span className="nav-drawer__group">{link.label}</span>
                                <ul className="nav-drawer__sub">
                                    {link.children.map(c => (
                                        <li key={c.label}>
                                            <NavLink to={c.to} className="nav-drawer__item" onClick={close}>{c.label}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => `nav-drawer__item ${isActive ? 'nav-drawer__item--active' : ''}`}
                                    onClick={close}
                                    end={link.to === '/'}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
                <Link to="/donate" className="btn btn-primary nav-drawer__cta" onClick={close}>
                    Donate Now <i className="fas fa-heart" />
                </Link>
            </aside>

            {/* Backdrop for drawer */}
            {open && <div className="nav-backdrop" onClick={close} aria-hidden="true" />}

            {/* Spacer so content doesn't hide behind fixed nav */}
            <div className="nav-spacer" />
        </header>
    )
}

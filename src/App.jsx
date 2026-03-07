import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Causes from './pages/Causes'
import Services from './pages/Services'
import Team from './pages/Team'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Financials from './pages/Financials'
import NotFound from './pages/NotFound'

/* ── Scroll-reveal: re-runs on EVERY route change ── */
function RevealObserver() {
    const location = useLocation()

    useEffect(() => {
        // Small delay so the new page's DOM is fully rendered before observing
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                entries => entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible')
                        observer.unobserve(e.target)
                    }
                }),
                { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
            )
            document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el))
            return () => observer.disconnect()
        }, 80)

        return () => clearTimeout(timer)
    }, [location.pathname])

    return null
}

function AppInner() {
    return (
        <>
            <ScrollToTop />
            <RevealObserver />
            <Navbar />
            <main>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/causes" element={<Causes />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/financials" element={<Financials />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </ErrorBoundary>
            </main>
            <Footer />
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppInner />
        </BrowserRouter>
    )
}

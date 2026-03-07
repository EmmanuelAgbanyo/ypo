import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const LOGO = '/img/FREE_YOUTH_PATH_ORGANIZATION_LOGO_DESIGN_IN_CDR__AI__PDF__EPS__PNG_AND_SVG-removebg-preview.png'

/* ── Animated Counter ── */
function Counter({ target, suffix = '', prefix = '' }) {
    const [val, setVal] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                const dur = 2200, step = () => {
                    const elapsed = Date.now() - t0
                    const p = Math.min(elapsed / dur, 1)
                    const ease = 1 - Math.pow(1 - p, 4)
                    setVal(Math.floor(ease * target))
                    if (p < 1) requestAnimationFrame(step)
                }
                const t0 = Date.now(); requestAnimationFrame(step)
            }
        }, { threshold: 0.4 })
        ref.current && obs.observe(ref.current)
        return () => obs.disconnect()
    }, [target])
    return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

/* ── Typed text effect ── */
const TYPED_WORDS = ['Youth Empowerment', 'Climate Action', 'Peacebuilding', 'Education', 'Good Governance']
function TypedText() {
    const [idx, setIdx] = useState(0)
    const [display, setDisplay] = useState('')
    const [typing, setTyping] = useState(true)
    useEffect(() => {
        const word = TYPED_WORDS[idx]
        let timer
        if (typing) {
            if (display.length < word.length) {
                timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 60)
            } else {
                timer = setTimeout(() => setTyping(false), 2000)
            }
        } else {
            if (display.length > 0) {
                timer = setTimeout(() => setDisplay(d => d.slice(0, -1)), 35)
            } else {
                setIdx((idx + 1) % TYPED_WORDS.length)
                setTyping(true)
            }
        }
        return () => clearTimeout(timer)
    }, [display, typing, idx])
    return <>{display}<span className="typed-cursor">|</span></>
}

const STATS = [
    { icon: 'fas fa-users', val: 1200, suf: '+', label: 'Youth Empowered' },
    { icon: 'fas fa-map-marked-alt', val: 48, suf: '', label: 'Communities Reached' },
    { icon: 'fas fa-project-diagram', val: 15, suf: '', label: 'Active Programs' },
    { icon: 'fas fa-handshake', val: 8, suf: '', label: 'Strategic Partners' },
]

const PILLARS = [
    { icon: 'fas fa-seedling', title: 'Regenerative Agriculture', text: 'Engaging youth and farming communities in regenerative agriculture and sustainable land-use to promote biodiversity and food security across Ghana.' },
    { icon: 'fas fa-cloud-sun', title: 'Climate & Environment', text: 'Creating space for youth to champion climate action and environmental sustainability as frontline change agents in partnership with allied organisations.' },
    { icon: 'fas fa-dove', title: 'Peacebuilding & Human Rights', text: 'Building a community of young leaders committed to peacebuilding, access to justice, and the protection of fundamental human rights.' },
    { icon: 'fas fa-landmark', title: 'Policy & Governance', text: 'Building an informed generation of youth who influence policies and governance at local, regional, and national levels in Ghana.' },
    { icon: 'fas fa-heartbeat', title: 'Health & Sanitation', text: 'Increasing access to health and social services for vulnerable populations through health activism, community outreach, and mobilisation.' },
]

const CAUSES = [
    { title: 'Education for African Children', cat: 'Education', goal: 10000, raised: 9500, pct: 95, img: '/img/courses-1.jpg' },
    { title: 'Clean Water for Communities', cat: 'Health', goal: 8000, raised: 5600, pct: 70, img: '/img/courses-2.jpg' },
    { title: 'Youth Climate Leaders Program', cat: 'Climate', goal: 12000, raised: 6000, pct: 50, img: '/img/courses-3.jpg' },
]

const PARTNERS = [
    'Regeneration International', 'SDSN Ghana', 'UN SDG Alliance',
    'GreenGhana Initiative', 'University of Ghana', 'WASH Partners Ghana', 'Social Welfare Dept.',
]

const TESTIMONIALS = [
    { name: 'Akosua Mensah', role: 'Programme Beneficiary', text: 'YPO transformed my understanding of climate change. The training gave me the skills and confidence to advocate for my community.' },
    { name: 'Kwame Asante', role: 'Youth Ambassador', text: 'Through YPO\'s governance program, I was able to represent youth at the district assembly. Real impact, real change.' },
    { name: 'Abena Boateng', role: 'Health Program Participant', text: 'The health and sanitation outreach brought critical services to our doorstep. Families in our community are healthier because of YPO.' },
]

export default function Home() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="hero" aria-label="Hero banner">
                <div className="hero__bg" style={{ backgroundImage: "url('/img/carousel-1.jpg')" }} />
                <div className="hero__overlay" />
                <div className="container hero__content">
                    <div className="hero__left">
                        <span className="section-pill hero__pill">
                            <span className="dot" />Registered Ghanaian NGO · Est. 2020
                        </span>
                        <h1 className="hero__headline">
                            Igniting Change<br />Through
                        </h1>
                        <h2 className="hero__typed gradient-text">
                            <TypedText />
                        </h2>
                        <p className="hero__sub">
                            We empower young people and vulnerable communities across Ghana with the tools, knowledge,
                            and networks to lead lasting change — from grassroots to governance.
                        </p>
                        <div className="hero__ctas">
                            <Link to="/about" className="btn btn-primary btn-lg">Discover Our Work <i className="fas fa-arrow-right" /></Link>
                            <Link to="/donate" className="btn btn-outline-white btn-lg">Support a Cause</Link>
                        </div>
                        <div className="hero__badges">
                            <span><i className="fas fa-check-circle" /> Reg. No. G-30,458</span>
                            <span><i className="fas fa-check-circle" /> DSW/5683 Certified</span>
                            <span><i className="fas fa-check-circle" /> Transparent Financials</span>
                        </div>
                    </div>

                    {/* Impact glass card */}
                    <div className="hero__right">
                        <div className="impact-card">
                            <div className="impact-card__header">
                                <div className="impact-card__live"><span className="live-dot" /><span>Live Impact</span></div>
                                <span className="impact-card__badge">Since 2020</span>
                            </div>
                            <div className="impact-card__grid">
                                {STATS.map(s => (
                                    <div key={s.label} className="impact-stat">
                                        <div className="impact-stat__icon"><i className={s.icon} /></div>
                                        <div className="impact-stat__val"><Counter target={s.val} suffix={s.suf} /></div>
                                        <div className="impact-stat__label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/financials" className="impact-card__cta">
                                View Full Impact Report <i className="fas fa-arrow-right" />
                            </Link>
                            <div className="impact-card__shimmer" />
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="hero__scroll-hint" aria-hidden="true">
                    <div className="scroll-mouse"><div className="scroll-dot" /></div>
                    <p>SCROLL</p>
                </div>
            </section>

            {/* ── PARTNER TICKER ── */}
            <div className="ticker" aria-label="Our partners">
                <div className="ticker__track">
                    {[...PARTNERS, ...PARTNERS].map((p, i) => (
                        <span key={i} className="ticker__item"><i className="fas fa-circle-dot" />{p}</span>
                    ))}
                </div>
            </div>

            {/* ── STATS STRIP ── */}
            <section className="stats-strip" aria-label="Impact statistics">
                <div className="container">
                    <div className="stats-strip__grid">
                        {STATS.map((s, i) => (
                            <div key={s.label} className={`stat-item reveal reveal-delay-${i + 1}`}>
                                <div className="stat-item__icon"><i className={s.icon} /></div>
                                <div className="stat-item__val"><Counter target={s.val} suffix={s.suf} /></div>
                                <div className="stat-item__label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT PREVIEW ── */}
            <section className="section" aria-labelledby="about-heading">
                <div className="container about-preview">
                    <div className="about-preview__image reveal">
                        <img src="/img/group-ypo.jpeg" alt="YPO team members working in the community" className="about-preview__img" />
                        <div className="about-preview__badge-since">
                            <span className="gradient-text">Since 2020</span>
                            <small>Driving Impact</small>
                        </div>
                        <div className="about-preview__badge-flag">🇬🇭 Ghana-Based NGO</div>
                    </div>
                    <div className="about-preview__text reveal reveal-delay-2">
                        <span className="section-pill"><span className="dot" />About Us</span>
                        <h2 id="about-heading" className="about-preview__heading">
                            Igniting <span className="gradient-text">apt youth-led</span><br />initiatives for development
                        </h2>
                        <blockquote className="about-preview__quote">
                            <p>"At Youth Path Organisation, we believe in the transformative power of young people. Through innovation, collaboration, and dedication, we uplift communities and inspire a brighter future for all of Ghana."</p>
                            <cite>— Cyril France, Founder &amp; Executive Coordinator</cite>
                        </blockquote>
                        <p className="about-preview__body">
                            We drive youth-led development through evidence-based initiatives that promote sustainability,
                            education, and social impact — ensuring young people have the resources and opportunities to thrive.
                        </p>
                        <div className="about-preview__values">
                            {[
                                { icon: 'fas fa-leaf', label: 'Climate Action', sub: 'Youth-led environmental programs' },
                                { icon: 'fas fa-graduation-cap', label: 'Education', sub: 'Breaking barriers to learning' },
                                { icon: 'fas fa-dove', label: 'Peacebuilding', sub: 'Rights-based community cohesion' },
                                { icon: 'fas fa-landmark', label: 'Governance', sub: 'Youth inclusion in policy' },
                            ].map(v => (
                                <div key={v.label} className="val-prop">
                                    <div className="val-prop__icon"><i className={v.icon} /></div>
                                    <div><h6>{v.label}</h6><p>{v.sub}</p></div>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="btn btn-primary btn-lg">
                            Our Full Story <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FOCUS AREAS ── */}
            <section className="section section-alt" aria-labelledby="focus-heading">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />What We Do</span>
                        <h2 id="focus-heading">Our Areas of Focus</h2>
                        <p>Five transformative pillars driving systemic change for youth and communities across Ghana.</p>
                    </div>
                    <div className="pillars-grid">
                        {PILLARS.map((p, i) => (
                            <article key={p.title} className={`pillar-card reveal reveal-delay-${i + 1}`}>
                                <div className="pillar-card__icon"><i className={p.icon} /></div>
                                <h3 className="pillar-card__title">{p.title}</h3>
                                <p className="pillar-card__body">{p.text}</p>
                                <Link to="/services" className="pillar-card__link">Learn More <i className="fas fa-arrow-right" /></Link>
                            </article>
                        ))}
                        <article className="pillar-card pillar-card--cta reveal">
                            <div className="pillar-card__icon pillar-card__icon--white"><i className="fas fa-plus" /></div>
                            <h3 className="pillar-card__title pillar-card__title--white">View All Programs</h3>
                            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                Explore the full scope of our initiatives and discover how you can partner with us to drive lasting change.
                            </p>
                            <Link to="/services" className="pillar-card__link pillar-card__link--white">See All Programs <i className="fas fa-arrow-right" /></Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── FEATURED CAUSES ── */}
            <section className="section" aria-labelledby="causes-heading">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Featured Causes</span>
                        <h2 id="causes-heading">Every Child Deserves the<br />Opportunity to Learn</h2>
                    </div>
                    <div className="causes-grid">
                        {CAUSES.map((c, i) => (
                            <article key={c.title} className={`cause-card reveal reveal-delay-${i + 1}`}>
                                <div className="cause-card__img-wrap">
                                    <img src={c.img} alt={c.title} className="cause-card__img" loading="lazy" />
                                    <span className="cause-card__cat">{c.cat}</span>
                                </div>
                                <div className="cause-card__body">
                                    <h3 className="cause-card__title">{c.title}</h3>
                                    <div className="cause-card__progress-meta">
                                        <span>Funding Progress</span>
                                        <span className="cause-card__pct">{c.pct}% Funded</span>
                                    </div>
                                    <div className="progress-track"><div className="progress-fill" style={{ width: `${c.pct}%` }} /></div>
                                    <Link to="/donate" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                                        Donate Now <i className="fas fa-heart" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/causes" className="btn btn-primary btn-lg">View All Causes <i className="fas fa-arrow-right" /></Link>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="section section-alt" aria-labelledby="testimonials-heading">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Testimonials</span>
                        <h2 id="testimonials-heading">Voices of Impact</h2>
                        <p>Real stories from the communities and young people we serve.</p>
                    </div>
                    <div className="testimonials-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <article key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                                <div className="testimonial-card__quote-icon"><i className="fas fa-quote-left" /></div>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">{t.name[0]}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="cta-banner" aria-label="Call to action">
                <div className="cta-banner__overlay" />
                <div className="container cta-banner__inner">
                    <div className="reveal">
                        <span className="section-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                            <span className="dot" style={{ background: '#00ff99' }} />Get Involved
                        </span>
                        <h2 className="cta-banner__heading">Ready to Make a Difference?</h2>
                        <p className="cta-banner__body">
                            Whether you donate, volunteer, or partner with us — every action counts toward building a better Ghana.
                        </p>
                        <div className="cta-banner__actions">
                            <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <i className="fas fa-heart" /></Link>
                            <Link to="/contact" className="btn btn-outline-white btn-lg">Partner With Us <i className="fas fa-handshake" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

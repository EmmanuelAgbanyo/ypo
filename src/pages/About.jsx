import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './About.css'

/* ── Animated number counter ── */
function Counter({ target, suffix = '', prefix = '' }) {
    const [val, setVal] = useState(0)
    const ref = useRef(null)
    const done = useRef(false)
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !done.current) {
                done.current = true
                const dur = 2200, t0 = Date.now()
                const tick = () => {
                    const p = Math.min((Date.now() - t0) / dur, 1)
                    const ease = 1 - Math.pow(1 - p, 4)
                    setVal(Math.floor(ease * target))
                    if (p < 1) requestAnimationFrame(tick)
                }
                requestAnimationFrame(tick)
            }
        }, { threshold: 0.35 })
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [target])
    return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

/* ═══ DATA (consistent with Home.jsx) ═══ */

const IMPACT_STATS = [
    { icon: 'fas fa-users', val: 1200, suf: '+', label: 'Youth Empowered', sub: 'Since founding in 2020' },
    { icon: 'fas fa-map-marked-alt', val: 48, suf: '', label: 'Communities Reached', sub: 'Across 3 regions of Ghana' },
    { icon: 'fas fa-project-diagram', val: 15, suf: '', label: 'Active Programs', sub: 'Running simultaneously' },
    { icon: 'fas fa-handshake', val: 8, suf: '', label: 'Strategic Partners', sub: 'Local & international' },
]

const PILLARS = [
    {
        num: '01', icon: 'fas fa-seedling',
        color: '#22c55e', colorBg: 'rgba(34,197,94,0.1)',
        title: 'Regenerative Agriculture',
        img: '/img/pillar-agriculture.jpg',
        text: 'We engage youth and farming communities in programs that advance regenerative agriculture and sustainable land-use practices, promoting biodiversity and long-term food security across Ghana.',
        tags: ['Agroforestry', 'Composting', 'Soil Restoration', 'Organic Farming'],
    },
    {
        num: '02', icon: 'fas fa-cloud-sun',
        color: '#00A3FF', colorBg: 'rgba(0,163,255,0.1)',
        title: 'Climate & Environment',
        img: '/img/pillar-climate.jpg',
        text: 'We create space for youth to act as frontline climate change agents — through education, advocacy campaigns, green infrastructure projects, and partnerships with allied environmental organisations.',
        tags: ['Tree Planting', 'Climate Education', 'Policy Advocacy', 'Green Infrastructure'],
    },
    {
        num: '03', icon: 'fas fa-dove',
        color: '#a855f7', colorBg: 'rgba(168,85,247,0.1)',
        title: 'Peacebuilding & Human Rights',
        img: '/img/pillar-peace.jpg',
        text: 'We build communities where people are safe from harm, have access to justice, and understand their rights and responsibilities — through conflict resolution training and rights-based advocacy.',
        tags: ['Conflict Resolution', 'Legal Aid', 'Community Dialogue', 'Rights Education'],
    },
    {
        num: '04', icon: 'fas fa-landmark',
        color: '#6B2B7D', colorBg: 'rgba(107,43,125,0.1)',
        title: 'Policy & Governance',
        img: '/img/pillar-governance.jpg',
        text: 'We build an informed generation of youth who actively engage in governance processes — influencing policies at district, regional, and national levels that shape their lives and communities.',
        tags: ['District Assembly Representation', 'Policy Research', 'Governance Training', 'Youth Inclusion'],
    },
    {
        num: '05', icon: 'fas fa-heartbeat',
        color: '#ef4444', colorBg: 'rgba(239,68,68,0.1)',
        title: 'Health & Sanitation',
        img: '/img/pillar-health.jpg',
        text: 'Through health activism, community outreach, and mobilisation, we increase access to health and social services for vulnerable populations, with a strong focus on WASH infrastructure and preventive care.',
        tags: ['WASH Programs', 'Health Screenings', 'Community Outreach', 'Malaria Prevention'],
    },
]

const MILESTONES = [
    { year: '2020', icon: 'fas fa-flag', title: 'Founded', text: 'Youth Path Organisation established in Ofankor, Accra — built on a bold vision to ignite youth-led development across Ghana.' },
    { year: '2021', icon: 'fas fa-certificate', title: 'Officially Registered', text: 'Incorporated under the Ghana Companies Code 1963, Act 179 (Reg No. G-30,458) and certified by the Dept. of Social Welfare (DSW/5683).' },
    { year: '2022', icon: 'fas fa-seedling', title: 'Flagship Programs Launched', text: 'Launched flagship regenerative agriculture and climate action programs. Reached 20+ communities with training for 400+ youth farmers and activists.' },
    { year: '2023', icon: 'fas fa-handshake', title: 'Strategic Partnerships Formed', text: 'Formalised partnerships with SDSN Ghana, Regeneration International, and the UN SDG Alliance. Total youth trained surpassed 800.' },
    { year: '2024', icon: 'fas fa-chart-line', title: 'Scaling National Impact', text: 'Annual Impact Report published: 1,200+ youth empowered, 48 communities reached across 3 regions, 15 active programs running in parallel.' },
]

const PARTNERS = [
    { name: 'Regeneration International', icon: 'fas fa-leaf' },
    { name: 'SDSN Ghana', icon: 'fas fa-globe-africa' },
    { name: 'UN SDG Alliance', icon: 'fas fa-landmark' },
    { name: 'GreenGhana Initiative', icon: 'fas fa-seedling' },
    { name: 'University of Ghana', icon: 'fas fa-university' },
    { name: 'WASH Partners Ghana', icon: 'fas fa-water' },
    { name: 'Social Welfare Dept.', icon: 'fas fa-building-columns' },
]

/* ═══ COMPONENT ═══ */
export default function About() {
    const [activePillar, setActivePillar] = useState(0)
    const [animating, setAnimating] = useState(false)
    const ap = PILLARS[activePillar]

    // Trigger CSS fade animation on every pillar switch
    const switchPillar = (i) => {
        if (i === activePillar) return
        setAnimating(true)
        setTimeout(() => {
            setActivePillar(i)
            setAnimating(false)
        }, 200)
    }

    return (
        <>
            {/* ━━━━━━ PAGE HEADER ━━━━━━ */}
            <PageHeader
                title="About Us"
                breadcrumbs={['Home', 'About Us']}
                bg="/img/carousel-1.jpg"
            />

            {/* ━━━━━━ 1. OUR STORY ━━━━━━ */}
            <section className="section" aria-labelledby="story-h">
                <div className="container about-story">

                    {/* Left — image cluster */}
                    <div className="story-imgs reveal">
                        <div className="story-imgs__main-wrap">
                            <img src="/img/group-ypo.jpeg" alt="YPO team working in a Ghanaian community" className="story-imgs__main" />
                            <div className="story-imgs__overlay-badge">
                                <i className="fas fa-shield-halved" />
                                <span>Verified NGO</span>
                            </div>
                        </div>

                        <div className="story-imgs__panel">
                            <div className="story-mini-stat">
                                <span className="story-mini-stat__val gradient-text"><Counter target={1200} suffix="+" /></span>
                                <span className="story-mini-stat__label">Youth Empowered</span>
                            </div>
                            <div className="story-mini-stat">
                                <span className="story-mini-stat__val gradient-text"><Counter target={48} /></span>
                                <span className="story-mini-stat__label">Communities</span>
                            </div>
                            <div className="story-mini-stat">
                                <span className="story-mini-stat__val gradient-text"><Counter target={15} /></span>
                                <span className="story-mini-stat__label">Active Programs</span>
                            </div>
                            <div className="story-mini-stat">
                                <span className="story-mini-stat__val gradient-text"><Counter target={4} suffix="+" /></span>
                                <span className="story-mini-stat__label">Years of Impact</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — content */}
                    <div className="story-content reveal reveal-delay-2">
                        <span className="section-pill"><span className="dot" />Who We Are</span>

                        <h2 id="story-h" className="story-head">
                            Igniting <span className="gradient-text">apt youth-led</span> initiatives for development
                        </h2>

                        <blockquote className="story-blockquote">
                            <div className="story-blockquote__bar" />
                            <div>
                                <p>"At Youth Path Organisation, we believe in the transformative power of young people. Through innovation, collaboration, and dedication, we uplift communities and inspire a brighter future for all of Ghana."</p>
                                <footer className="story-blockquote__footer">
                                    <img src="/img/cyril new.jpg" alt="Cyril France" className="story-blockquote__avatar" onError={e => { e.target.style.display = 'none' }} />
                                    <div>
                                        <strong>Cyril France</strong>
                                        <em>Founder &amp; Executive Coordinator</em>
                                    </div>
                                </footer>
                            </div>
                        </blockquote>

                        <p className="story-body">
                            Founded in 2020 and headquartered in <strong>Ofankor, Accra, Ghana</strong>, Youth Path Organisation (YPO)
                            is a nationally registered NGO dedicated to igniting sustainable change through youth empowerment.
                            We work at the intersection of climate, governance, peacebuilding, agriculture, and health — driving
                            evidence-based programs that create lasting positive impact.
                        </p>

                        {/* Registration cards */}
                        <div className="reg-cards">
                            <div className="reg-card">
                                <div className="reg-card__icon"><i className="fas fa-certificate" /></div>
                                <div>
                                    <strong>Reg. No. G-30,458</strong>
                                    <span>Ghana Companies Code 1963, Act 179</span>
                                </div>
                            </div>
                            <div className="reg-card">
                                <div className="reg-card__icon"><i className="fas fa-building-columns" /></div>
                                <div>
                                    <strong>NGO No. DSW/5683</strong>
                                    <span>Dept. of Social Welfare &amp; Community Development</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-actions">
                            <Link to="/services" className="btn btn-primary btn-lg">What We Do <i className="fas fa-arrow-right" /></Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">Partner With Us <i className="fas fa-handshake" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━ 2. IMPACT STATS ━━━━━━ */}
            <div className="impact-band" aria-label="Our impact in numbers">
                <div className="impact-band__glow" />
                <div className="container">
                    <p className="impact-band__eyebrow">Our Impact — By the Numbers</p>
                    <div className="impact-band__grid">
                        {IMPACT_STATS.map((s, i) => (
                            <div key={s.label} className={`ib-stat reveal reveal-delay-${i + 1}`}>
                                <div className="ib-stat__icon"><i className={s.icon} /></div>
                                <div className="ib-stat__val"><Counter target={s.val} suffix={s.suf} /></div>
                                <div className="ib-stat__label">{s.label}</div>
                                <div className="ib-stat__sub">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ━━━━━━ 3. MISSION / VISION / VALUES ━━━━━━ */}
            <section className="section section-alt" aria-labelledby="mvv-h">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />What Drives Us</span>
                        <h2 id="mvv-h">Mission, Vision &amp; Core Values</h2>
                        <p>Our north star, guiding every decision, program, and partnership.</p>
                    </div>

                    <div className="mvv-row">
                        {/* Mission */}
                        <div className="mvv-feature reveal">
                            <div className="mvv-feature__icon"><i className="fas fa-rocket" /></div>
                            <h3>Our Mission</h3>
                            <p>To empower youth and vulnerable communities through evidence-based initiatives that drive sustainable development, quality education, climate action, and social justice across Ghana and beyond.</p>
                            <div className="mvv-feature__shimmer" />
                        </div>

                        {/* Vision */}
                        <div className="mvv-feature mvv-feature--blue reveal reveal-delay-2">
                            <div className="mvv-feature__icon"><i className="fas fa-eye" /></div>
                            <h3>Our Vision</h3>
                            <p>A Ghana — and ultimately a world — where every young person is equipped, empowered, and inspired to lead lasting positive change in their communities and across generations.</p>
                            <div className="mvv-feature__shimmer" />
                        </div>
                    </div>

                    {/* Core values */}
                    <div className="values-band">
                        {[
                            { icon: 'fas fa-gem', color: '#6B2B7D', label: 'Integrity', body: 'Transparency and accountability in all we do' },
                            { icon: 'fas fa-users', color: '#00A3FF', label: 'Collaboration', body: 'Building bridges across sectors and generations' },
                            { icon: 'fas fa-lightbulb', color: '#f59e0b', label: 'Innovation', body: 'Creative, evidence-based solutions to real challenges' },
                            { icon: 'fas fa-heart', color: '#ef4444', label: 'Inclusivity', body: 'No young person left behind on the path forward' },
                            { icon: 'fas fa-scale-balanced', color: '#22c55e', label: 'Accountability', body: 'Measurable outcomes and full financial transparency' },
                        ].map((v, i) => (
                            <div key={v.label} className={`val-chip reveal reveal-delay-${i + 1}`} style={{ '--vc': v.color }}>
                                <div className="val-chip__icon" style={{ color: v.color, background: `${v.color}18` }}>
                                    <i className={v.icon} />
                                </div>
                                <div>
                                    <h5 className="val-chip__label">{v.label}</h5>
                                    <p className="val-chip__body">{v.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━━━━ 4. FOCUS AREAS (Interactive) ━━━━━━ */}
            <section className="section" aria-labelledby="focus-h">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />What We Do</span>
                        <h2 id="focus-h">Our Five Focus Areas</h2>
                        <p>Five transformative pillars — each designed to address root causes and drive systemic, lasting change.</p>
                    </div>

                    <div className="focus-explorer">
                        {/* Sidebar tabs */}
                        <nav className="focus-tabs reveal" aria-label="Focus area navigation">
                            {PILLARS.map((p, i) => (
                                <button
                                    key={p.num}
                                    className={`focus-tab ${activePillar === i ? 'focus-tab--on' : ''}`}
                                    onClick={() => switchPillar(i)}
                                    style={{ '--tc': p.color }}
                                >
                                    <span className="focus-tab__num">{p.num}</span>
                                    <span className="focus-tab__icon" style={{ background: activePillar === i ? p.color : p.colorBg, color: activePillar === i ? '#fff' : p.color }}>
                                        <i className={p.icon} />
                                    </span>
                                    <span className="focus-tab__label">{p.title}</span>
                                    <i className="fas fa-chevron-right focus-tab__arrow" />
                                </button>
                            ))}
                        </nav>

                        {/* Detail panel */}
                        <div className={`focus-panel${animating ? ' focus-panel--out' : ''}`} style={{ '--tc': ap.color }}>
                            <div className="focus-panel__img-wrap">
                                <img src={ap.img} alt={ap.title} className="focus-panel__img" />
                                <div className="focus-panel__img-overlay" />
                                <div className="focus-panel__num">{ap.num}</div>
                            </div>
                            <div className="focus-panel__content">
                                <div className="focus-panel__icon" style={{ background: ap.color }}>
                                    <i className={ap.icon} />
                                </div>
                                <h3 className="focus-panel__title" style={{ color: ap.color }}>{ap.title}</h3>
                                <p className="focus-panel__body">{ap.text}</p>
                                <div className="focus-panel__tags">
                                    {ap.tags.map(tag => (
                                        <span key={tag} className="focus-tag" style={{ background: ap.colorBg, color: ap.color }}>
                                            <i className="fas fa-check" />{tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/services" className="btn btn-primary" style={{ marginTop: 24 }}>
                                    Explore This Program <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━━━━ 5. MILESTONES TIMELINE ━━━━━━ */}
            <section className="section section-alt" aria-labelledby="tl-h">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Our Journey</span>
                        <h2 id="tl-h">Four Years of Growing Impact</h2>
                        <p>From a bold idea to a nationally recognised NGO — here is how we got here.</p>
                    </div>

                    <div className="tl-track">
                        {/* Spine line */}
                        <div className="tl-spine" />

                        {MILESTONES.map((m, i) => (
                            <div key={m.year} className={`tl-node reveal reveal-delay-${(i % 3) + 1}`}>
                                {/* Dot */}
                                <div className="tl-node__dot">
                                    <i className={m.icon} />
                                </div>
                                {/* Year label */}
                                <span className="tl-node__year">{m.year}</span>
                                {/* Card */}
                                <div className={`tl-node__card ${i % 2 === 0 ? 'tl-node__card--top' : 'tl-node__card--bottom'}`}>
                                    <h4 className="tl-node__title">{m.title}</h4>
                                    <p className="tl-node__text">{m.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━━━━ 6. PARTNERS ━━━━━━ */}
            <div className="partners-section" aria-label="Our partners and affiliates">
                <div className="container">
                    <p className="partners-section__label">Trusted Partners &amp; Affiliates</p>
                    <div className="partners-grid">
                        {PARTNERS.map((p, i) => (
                            <div key={p.name} className={`partner-badge reveal reveal-delay-${(i % 4) + 1}`}>
                                <div className="partner-badge__icon"><i className={p.icon} /></div>
                                <span>{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ━━━━━━ 7. CTA ━━━━━━ */}
            <section className="about-cta-section" aria-label="Get involved with YPO">
                <div className="about-cta-section__bg" />
                <div className="container about-cta-section__inner reveal">
                    <span className="section-pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}>
                        <span className="dot" style={{ background: '#00ff99' }} />Get Involved Today
                    </span>
                    <h2 className="about-cta-section__head">Be Part of the Change</h2>
                    <p className="about-cta-section__body">
                        Whether you donate, volunteer, or partner with us — every action contributes to building a more just,
                        healthy, and prosperous Ghana for our youth. Start your journey with YPO today.
                    </p>
                    <div className="about-cta-section__btns">
                        <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <i className="fas fa-heart" /></Link>
                        <Link to="/causes" className="btn btn-outline-white btn-lg">View Our Causes <i className="fas fa-arrow-right" /></Link>
                        <Link to="/contact" className="btn btn-outline-white btn-lg">Partner With Us <i className="fas fa-handshake" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

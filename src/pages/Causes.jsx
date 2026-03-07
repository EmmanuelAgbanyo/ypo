import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Causes.css'

const ALL_CAUSES = [
    { title: 'Education for African Children', cat: 'Education', goal: 10000, raised: 9500, pct: 95, img: '/img/courses-1.jpg', desc: 'Every child deserves the opportunity to learn, grow, and build a brighter future. We break barriers to education, empowering young minds across Africa.' },
    { title: 'Clean Water for Communities', cat: 'Health', goal: 8000, raised: 5600, pct: 70, img: '/img/courses-2.jpg', desc: 'Access to clean water is a human right. Our WASH programs bring safe water and sanitation facilities to underserved communities.' },
    { title: 'Youth Climate Leaders Program', cat: 'Climate', goal: 12000, raised: 6000, pct: 50, img: '/img/courses-3.jpg', desc: 'Training the next generation of climate advocates to lead grassroots action on environmental sustainability.' },
    { title: 'Regenerative Farming Initiative', cat: 'Agriculture', goal: 15000, raised: 7500, pct: 50, img: '/img/regenerative.webp', desc: 'Supporting smallholder farmers with regenerative farming techniques to restore soil health and ensure food security.' },
    { title: 'Peacebuilding Community Program', cat: 'Peace', goal: 9000, raised: 6300, pct: 70, img: '/img/peacebuilding.webp', desc: 'Building cohesive communities through conflict resolution training, rights education, and dialogue programs.' },
    { title: 'Youth Governance Academy', cat: 'Governance', goal: 11000, raised: 3300, pct: 30, img: '/img/policy.webp', desc: 'Equipping young people with the skills and knowledge to engage meaningfully in governance and policy processes.' },
]
const CATS = ['All', ...new Set(ALL_CAUSES.map(c => c.cat))]

export default function Causes() {
    const [filter, setFilter] = useState('All')
    const shown = filter === 'All' ? ALL_CAUSES : ALL_CAUSES.filter(c => c.cat === filter)

    return (
        <>
            <PageHeader title="Our Causes" breadcrumbs={['Home', 'Causes']} />
            <section className="section">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Featured Causes</span>
                        <h2>Every Cause Deserves Your Support</h2>
                        <p>Choose a cause that resonates with you and help us drive real, lasting change across Ghana's communities.</p>
                    </div>
                    <div className="causes-filter reveal">
                        {CATS.map(c => (
                            <button
                                key={c}
                                className={`filter-btn ${filter === c ? 'filter-btn--active' : ''}`}
                                onClick={() => setFilter(c)}
                            >{c}</button>
                        ))}
                    </div>
                    <div className="causes-grid-full">
                        {shown.map((c, i) => (
                            <article key={c.title} className={`cause-card-full reveal reveal-delay-${(i % 3) + 1}`}>
                                <div className="cause-card-full__img-wrap">
                                    <img src={c.img} alt={c.title} className="cause-card-full__img" loading="lazy" />
                                    <span className="cause-card-full__cat">{c.cat}</span>
                                </div>
                                <div className="cause-card-full__body">
                                    <h3 className="cause-card-full__title">{c.title}</h3>
                                    <p className="cause-card-full__desc">{c.desc}</p>
                                    <div className="cause-card-full__progress-meta">
                                        <span>Funding Progress</span>
                                        <span className="pct-label">{c.pct}% Funded</span>
                                    </div>
                                    <div className="progress-track" style={{ marginBottom: '8px' }}>
                                        <div className="progress-fill" style={{ width: `${c.pct}%` }} />
                                    </div>
                                    <Link to="/donate" className="btn btn-primary" style={{ marginTop: '18px', width: '100%', justifyContent: 'center' }}>
                                        Donate to This Cause <i className="fas fa-heart" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

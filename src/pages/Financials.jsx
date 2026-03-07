import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Financials.css'

const HIGHLIGHTS = [
    { icon: 'fas fa-hand-holding-usd', val: 'GH₵ 284,500', label: 'Total Funds Raised', sub: 'Financial Year 2023–24' },
    { icon: 'fas fa-chart-pie', val: '91%', label: 'Programmatic Spend', sub: 'Direct to communities' },
    { icon: 'fas fa-users', val: '1,200+', label: 'Beneficiaries Reached', sub: 'Across 48 communities' },
    { icon: 'fas fa-certificate', val: 'DSW/5683', label: 'NGO Registration', sub: 'Dept. of Social Welfare' },
]

const BREAKDOWN = [
    { label: 'Regenerative Agriculture & Climate Programs', pct: 32, color: '#22c55e' },
    { label: 'Peacebuilding & Human Rights', pct: 22, color: '#a855f7' },
    { label: 'Policy, Governance & Education', pct: 20, color: '#6B2B7D' },
    { label: 'Health & Sanitation Outreach', pct: 17, color: '#ef4444' },
    { label: 'Administration & Operations', pct: 9, color: '#00A3FF' },
]

const REPORTS = [
    { year: '2023–2024', title: 'Annual Impact Report 2024', size: '2.4 MB', type: 'PDF' },
    { year: '2022–2023', title: 'Annual Impact Report 2023', size: '1.8 MB', type: 'PDF' },
    { year: '2021–2022', title: 'Annual Impact Report 2022', size: '1.2 MB', type: 'PDF' },
]

export default function Financials() {
    return (
        <>
            <PageHeader title="Our Financials" breadcrumbs={['Home', 'Financials']} />

            {/* Intro */}
            <section className="section">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Transparency &amp; Accountability</span>
                        <h2>Financial Accountability at Every Step</h2>
                        <p>Youth Path Organisation is committed to complete transparency. Every cedi raised is accounted for and directed towards our mission of empowering Ghana's youth and communities.</p>
                    </div>

                    {/* Highlights */}
                    <div className="fin-highlights">
                        {HIGHLIGHTS.map((h, i) => (
                            <div key={h.label} className={`fin-hl reveal reveal-delay-${i + 1}`}>
                                <div className="fin-hl__icon"><i className={h.icon} /></div>
                                <div className="fin-hl__val">{h.val}</div>
                                <div className="fin-hl__label">{h.label}</div>
                                <div className="fin-hl__sub">{h.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expenditure breakdown */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Fund Allocation</span>
                        <h2>How We Spend Every Cedi</h2>
                        <p>91% of all funds raised go directly to programmatic activities and community impact. Here's the breakdown:</p>
                    </div>

                    <div className="fin-breakdown reveal reveal-delay-2">
                        {BREAKDOWN.map(b => (
                            <div key={b.label} className="fin-bar">
                                <div className="fin-bar__header">
                                    <span className="fin-bar__label">{b.label}</span>
                                    <strong className="fin-bar__pct" style={{ color: b.color }}>{b.pct}%</strong>
                                </div>
                                <div className="fin-bar__track">
                                    <div
                                        className="fin-bar__fill"
                                        style={{ width: `${b.pct}%`, background: b.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download reports */}
            <section className="section">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Report Downloads</span>
                        <h2>Annual Impact Reports</h2>
                        <p>Download our audited annual reports and financial statements for full transparency.</p>
                    </div>

                    <div className="fin-reports reveal reveal-delay-2">
                        {REPORTS.map(r => (
                            <div key={r.year} className="fin-report-card">
                                <div className="fin-report-card__icon"><i className="fas fa-file-pdf" /></div>
                                <div className="fin-report-card__info">
                                    <span className="fin-report-card__year">{r.year}</span>
                                    <h4 className="fin-report-card__title">{r.title}</h4>
                                    <span className="fin-report-card__meta">{r.type} · {r.size}</span>
                                </div>
                                <a href="#" className="btn btn-outline" onClick={e => e.preventDefault()}>
                                    Download <i className="fas fa-download" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Trust badges */}
                    <div className="fin-trust reveal reveal-delay-3">
                        <div className="fin-trust__badge">
                            <i className="fas fa-shield-halved" />
                            <div>
                                <strong>Reg. No. G-30,458</strong>
                                <span>Ghana Companies Code 1963</span>
                            </div>
                        </div>
                        <div className="fin-trust__badge">
                            <i className="fas fa-building-columns" />
                            <div>
                                <strong>NGO No. DSW/5683</strong>
                                <span>Dept. of Social Welfare</span>
                            </div>
                        </div>
                        <div className="fin-trust__badge">
                            <i className="fas fa-handshake" />
                            <div>
                                <strong>8 Strategic Partners</strong>
                                <span>Local &amp; international</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="fin-cta">
                <div className="container">
                    <h3>Want to support our work?</h3>
                    <p>Every donation goes directly to programs that transform lives across Ghana.</p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                        <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <i className="fas fa-heart" /></Link>
                        <Link to="/contact" className="btn btn-outline-white btn-lg">Partner With Us <i className="fas fa-handshake" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

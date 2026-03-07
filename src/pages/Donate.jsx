import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Donate.css'

const AMOUNTS = [10, 25, 50, 100, 250]
const IMPACT = [
    { amt: 10, text: 'Provides school supplies for one child for a month.' },
    { amt: 25, text: 'Covers seeds and tools for one youth farmer.' },
    { amt: 50, text: 'Funds a health awareness workshop for 20 community members.' },
    { amt: 100, text: 'Supports one youth delegate to attend a governance training.' },
    { amt: 250, text: 'Funds a full community climate action program.' },
]

export default function Donate() {
    const [amount, setAmount] = useState(50)
    const [custom, setCustom] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const effective = custom ? parseFloat(custom) : amount
    const match = IMPACT.find(m => m.amt === effective) || IMPACT[IMPACT.length - 1]

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <PageHeader title="Donate" breadcrumbs={['Home', 'Donate']} bg="/img/carousel-2.jpg" />

            <section className="section">
                <div className="container donate-layout">
                    {/* Left — Form */}
                    <div className="donate-form-wrap reveal">
                        <h2 className="donate-form-wrap__heading">Make a Donation</h2>
                        <p className="donate-form-wrap__sub">Every contribution, big or small, drives real change across Ghana's communities.</p>

                        {submitted ? (
                            <div className="donate-success">
                                <i className="fas fa-check-circle" />
                                <h3>Thank You!</h3>
                                <p>Your generosity makes a real difference. We will be in touch shortly.</p>
                                <Link to="/" className="btn btn-primary">Back to Home <i className="fas fa-home" /></Link>
                            </div>
                        ) : (
                            <form className="donate-form" onSubmit={handleSubmit} noValidate>
                                <fieldset>
                                    <legend>Select Donation Amount</legend>
                                    <div className="amount-grid">
                                        {AMOUNTS.map(a => (
                                            <button
                                                type="button" key={a}
                                                className={`amount-btn ${amount === a && !custom ? 'amount-btn--active' : ''}`}
                                                onClick={() => { setAmount(a); setCustom('') }}
                                            >${a}</button>
                                        ))}
                                        <input
                                            type="number" placeholder="Custom $"
                                            className={`amount-custom ${custom ? 'amount-custom--active' : ''}`}
                                            value={custom} min={1}
                                            onChange={e => { setCustom(e.target.value); setAmount(0) }}
                                        />
                                    </div>
                                    {/* Impact hint */}
                                    <div className="donate-impact-hint">
                                        <i className="fas fa-lightbulb" />
                                        <span>${effective} — {match.text}</span>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Your Information</legend>
                                    <div className="form-row">
                                        <div className="form-field">
                                            <label htmlFor="d-name">Full Name *</label>
                                            <input id="d-name" type="text" placeholder="Kwame Mensah" required />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="d-email">Email Address *</label>
                                            <input id="d-email" type="email" placeholder="kwame@email.com" required />
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="d-phone">Phone (optional)</label>
                                        <input id="d-phone" type="tel" placeholder="+233 …" />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="d-msg">Message (optional)</label>
                                        <textarea id="d-msg" rows={3} placeholder="Tell us what inspired your donation…" />
                                    </div>
                                </fieldset>

                                <button type="submit" className="btn btn-primary btn-lg donate-submit">
                                    Donate ${effective || '?'} Now <i className="fas fa-heart" />
                                </button>
                                <p className="donate-secure"><i className="fas fa-lock" /> Your information is secure and encrypted.</p>
                            </form>
                        )}
                    </div>

                    {/* Right — Why Donate */}
                    <div className="donate-sidebar reveal reveal-delay-2">
                        <div className="donate-sidebar__card">
                            <h3>Why Donate to YPO?</h3>
                            <ul>
                                {[
                                    'Registered & audited NGO (Reg. No. G-30,458)',
                                    '100% of donations go directly to programs',
                                    'Published annual financial reports',
                                    '1,200+ youth empowered since 2020',
                                    '48 communities across Ghana reached',
                                ].map(item => (
                                    <li key={item}><i className="fas fa-check-circle" />{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="donate-sidebar__card donate-sidebar__card--alt">
                            <h3>Other Ways to Give</h3>
                            <div className="other-ways">
                                <div className="other-way"><i className="fas fa-handshake" /><div><strong>Partner With Us</strong><p>Corporate & institutional partnerships</p></div></div>
                                <div className="other-way"><i className="fas fa-users" /><div><strong>Volunteer</strong><p>Contribute your time and skills</p></div></div>
                                <div className="other-way"><i className="fas fa-share-alt" /><div><strong>Share Our Work</strong><p>Spread the word on social media</p></div></div>
                            </div>
                            <Link to="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>Get in Touch <i className="fas fa-envelope" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

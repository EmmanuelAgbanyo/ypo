import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import './Contact.css'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const submit = e => { e.preventDefault(); setSubmitted(true) }

    return (
        <>
            <PageHeader title="Contact Us" breadcrumbs={['Home', 'Contact']} />
            <section className="section">
                <div className="container contact-layout">

                    {/* Info cards */}
                    <div className="contact-info reveal">
                        <span className="section-pill"><span className="dot" />Get In Touch</span>
                        <h2 className="contact-info__heading">We'd Love to Hear From You</h2>
                        <p className="contact-info__sub">Whether you have a question, want to partner with us, or simply want to learn more — reach out and we will get back to you promptly.</p>

                        <div className="contact-cards">
                            {[
                                { icon: 'fas fa-map-marker-alt', title: 'Our Location', text: 'Ofankor, Accra, Ghana\nP.O. Box GP 18932, Accra Central' },
                                { icon: 'fas fa-phone', title: 'Phone Number', text: '+233 (0)273 932 331' },
                                { icon: 'fas fa-envelope', title: 'Email Address', text: 'info@youthpathorganisation.org' },
                                { icon: 'fas fa-clock', title: 'Office Hours', text: 'Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM' },
                            ].map(c => (
                                <div key={c.title} className="contact-card">
                                    <div className="contact-card__icon"><i className={c.icon} /></div>
                                    <div>
                                        <h4 className="contact-card__title">{c.title}</h4>
                                        <p className="contact-card__text" style={{ whiteSpace: 'pre-line' }}>{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form-wrap reveal reveal-delay-2">
                        {submitted ? (
                            <div className="contact-success">
                                <i className="fas fa-paper-plane" />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We will respond within 1–2 business days.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={submit} noValidate>
                                <h3 className="contact-form__heading">Send Us a Message</h3>
                                <div className="form-row-2">
                                    <div className="cf-field">
                                        <label htmlFor="c-name">Full Name *</label>
                                        <input id="c-name" type="text" placeholder="Your full name" required />
                                    </div>
                                    <div className="cf-field">
                                        <label htmlFor="c-email">Email Address *</label>
                                        <input id="c-email" type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>
                                <div className="cf-field">
                                    <label htmlFor="c-phone">Phone Number</label>
                                    <input id="c-phone" type="tel" placeholder="+233 …" />
                                </div>
                                <div className="cf-field">
                                    <label htmlFor="c-subject">Subject *</label>
                                    <input id="c-subject" type="text" placeholder="How can we help?" required />
                                </div>
                                <div className="cf-field">
                                    <label htmlFor="c-message">Message *</label>
                                    <textarea id="c-message" rows={5} placeholder="Write your message here…" required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message <i className="fas fa-paper-plane" />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}

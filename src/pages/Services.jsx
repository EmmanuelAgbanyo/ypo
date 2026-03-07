import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Services.css'

const SERVICES = [
    {
        icon: 'fas fa-seedling',
        title: 'Regenerative Agriculture & Organic Farming',
        img: '/img/regenerative.webp',
        body: 'We engage youth and farming communities in unique programs that help them practise regenerative agriculture and sustainable land-use to promote biodiversity and a sustainable future. Our training programs cover composting, cover cropping, agroforestry, and soil restoration techniques.',
        outcomes: ['Trained 200+ youth farmers', 'Restored 50+ hectares', 'Reduced chemical use by 40%'],
    },
    {
        icon: 'fas fa-cloud-sun',
        title: 'Climate Change & Environmental Sustainability',
        img: '/img/climate change.webp',
        body: 'We liaise with allied organisations within the climate and environmental systems to create space for youth to play an active role as change agents. Our programs include climate education workshops, tree-planting campaigns, and advocacy for policy reform.',
        outcomes: ['10,000+ trees planted', 'Climate champions trained in 20 schools', 'Policy briefs submitted to Parliament'],
    },
    {
        icon: 'fas fa-dove',
        title: 'Peacebuilding & Human Rights',
        img: '/img/peacebuilding.webp',
        body: 'We advocate, support and promote a society where people are safe from harm, have access to justice, and know their rights and responsibilities. We build a community of young leaders committed to peacebuilding and the protection of human rights.',
        outcomes: ['500+ youths trained in conflict resolution', 'Community dialogue programs in 12 districts', 'Legal aid clinics in 6 regions'],
    },
    {
        icon: 'fas fa-landmark',
        title: 'Policy & Governance',
        img: '/img/policy.webp',
        body: 'We are building a generation of youth who are well-informed and influencing policies and development processes that shape their lives and their communities. We work with youth and allied organisations to create space for youth inclusion in governance at all levels.',
        outcomes: ['Youth representatives in 8 District Assemblies', 'Policy research published annually', 'Governance bootcamp for 300+ students'],
    },
    {
        icon: 'fas fa-heartbeat',
        title: 'Health & Sanitation',
        img: '/img/health.webp',
        body: 'Working with young people through health activism, community outreach and mobilisation, we increase access to health and social services for vulnerable populations and low-income households. Our WASH programs ensure clean water and sanitation for communities.',
        outcomes: ['15 communities with improved WASH facilities', 'Health screenings for 3,000+ residents', 'Malaria prevention training in 25 schools'],
    },
]

export default function Services() {
    return (
        <>
            <PageHeader title="What We Do" breadcrumbs={['Home', 'What We Do']} />

            <section className="section">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Our Programs</span>
                        <h2>Five Pillars of Transformation</h2>
                        <p>Our evidence-based programs address the root causes of inequality and empower youth to create lasting change.</p>
                    </div>

                    <div className="services-list">
                        {SERVICES.map((s, i) => (
                            <article key={s.title} className={`service-row reveal reveal-delay-${(i % 3) + 1} ${i % 2 === 1 ? 'service-row--reverse' : ''}`}>
                                <div className="service-row__img-wrap">
                                    <img src={s.img} alt={s.title} className="service-row__img" loading="lazy" />
                                    <div className="service-row__icon"><i className={s.icon} /></div>
                                </div>
                                <div className="service-row__content">
                                    <h2 className="service-row__title">{s.title}</h2>
                                    <p className="service-row__body">{s.body}</p>
                                    <div className="service-row__outcomes">
                                        <h4>Key Outcomes</h4>
                                        <ul>
                                            {s.outcomes.map(o => (
                                                <li key={o}><i className="fas fa-check-circle" />{o}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="service-row__actions">
                                        <Link to="/causes" className="btn btn-primary">Support This Cause <i className="fas fa-heart" /></Link>
                                        <Link to="/contact" className="btn btn-outline">Partner With Us <i className="fas fa-handshake" /></Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-alt" style={{ textAlign: 'center' }}>
                <div className="container reveal">
                    <span className="section-pill"><span className="dot" />Get Involved</span>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', margin: '16px 0' }}>Ready to Make an Impact?</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto 32px' }}>
                        Join our growing community of changemakers. Volunteer, donate, or partner with us.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/donate" className="btn btn-primary btn-lg">Donate Now <i className="fas fa-heart" /></Link>
                        <Link to="/contact" className="btn btn-outline btn-lg">Contact Us <i className="fas fa-envelope" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

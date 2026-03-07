import PageHeader from '../components/PageHeader'
import './Team.css'

const COUNCIL = [
    { name: 'Diana Commey', role: 'Council Chair', bio: 'Experienced leader in governance and youth empowerment, steering strategic decision-making for impactful development.', img: null },
    { name: 'Deborah Collison', role: 'Council Member', bio: 'Passionate advocate for policy reform and sustainable community development initiatives across Ghana.', img: null },
    { name: 'Charles Odoi', role: 'Council Member', bio: 'Expert in public administration and capacity building, supporting YPO\'s mission through governance oversight.', img: null },
    { name: 'Cyril France', role: 'Founder & Executive Coordinator', bio: 'Researcher and policy evaluator with extensive experience in youth-led initiatives and international development.', img: '/img/cyril new.jpg' },
]
const STAFF = [
    { name: 'Ekua Armoo', role: 'Operations Coordinator', bio: 'Environmental engineer specialising in climate resilience, WASH, and sustainable resource management.', img: '/img/ekua.jpg' },
    { name: 'Stephen Mensah', role: 'Project Coordinator', bio: 'Project management professional dedicated to youth empowerment and leadership development.', img: null },
    { name: 'Yohaness Awunyo', role: 'Finance Coordinator', bio: 'Chartered compliance and finance expert ensuring financial sustainability and strategic resource management.', img: null },
    { name: 'Solomon Agyebeng', role: 'Volunteer Coordinator', bio: 'Dedicated leader fostering community engagement and volunteer impact in social development projects.', img: null },
]

function MemberCard({ m, delay = 1 }) {
    const initials = m.name.split(' ').slice(0, 2).map(n => n[0]).join('')
    return (
        <article className={`member-card reveal reveal-delay-${delay}`}>
            {m.img
                ? <img src={m.img} alt={m.name} className="member-card__photo" loading="lazy" />
                : <div className="member-card__photo member-card__photo--init">{initials}</div>
            }
            <div className="member-card__body">
                <h3 className="member-card__name">{m.name}</h3>
                <span className="member-card__role">{m.role}</span>
                <p className="member-card__bio">{m.bio}</p>
                <div className="member-card__links">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                    <a href="#" aria-label="X / Twitter"><i className="fab fa-x-twitter" /></a>
                    <a href="#" aria-label="Email"><i className="fas fa-envelope" /></a>
                </div>
            </div>
        </article>
    )
}

export default function Team() {
    return (
        <>
            <PageHeader title="Our Team" breadcrumbs={['Home', 'Our Team']} />

            <section className="section">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Governing Council</span>
                        <h2>Leadership &amp; Governance</h2>
                        <p>Our council provides strategic oversight, ensuring YPO operates with integrity, transparency, and purpose.</p>
                    </div>
                    <div className="team-full-grid">
                        {COUNCIL.map((m, i) => <MemberCard key={m.name} m={m} delay={(i % 4) + 1} />)}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <div className="section-intro reveal">
                        <span className="section-pill"><span className="dot" />Core Staff</span>
                        <h2>The Team Driving Change</h2>
                        <p>Passionate professionals who bring expertise and dedication to every program and initiative.</p>
                    </div>
                    <div className="team-full-grid">
                        {STAFF.map((m, i) => <MemberCard key={m.name} m={m} delay={(i % 4) + 1} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

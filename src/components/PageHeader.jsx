import './PageHeader.css'

export default function PageHeader({ title, breadcrumbs = [], bg = '/img/carousel-1.jpg' }) {
    return (
        <section className="page-header" style={{ backgroundImage: `url('${bg}')` }} aria-label={title}>
            <div className="page-header__overlay" />
            <div className="container page-header__content">
                <h1 className="page-header__title">{title}</h1>
                {breadcrumbs.length > 0 && (
                    <nav aria-label="Breadcrumb">
                        <ol className="page-header__crumbs">
                            {breadcrumbs.map((b, i) => (
                                <li key={i} className={i === breadcrumbs.length - 1 ? 'active' : ''}>
                                    {b}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}
            </div>
        </section>
    )
}

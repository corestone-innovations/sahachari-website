type PhoneCard = {
    icon: string
    iconBg: string
    title: string
    sub: string
}

const phoneCards: PhoneCard[] = [
    {
        icon: 'storefront',
        iconBg: '#e8f5e9',
        title: 'Local Marketplace',
        sub: 'Artisan products · Direct sale',
    },
    {
        icon: 'build',
        iconBg: '#fff3e0',
        title: 'Home Services',
        sub: 'Plumber, Carpenter, Electrician',
    },
    {
        icon: 'medical_services',
        iconBg: '#f3e5f5',
        title: 'Palliative Care',
        sub: 'Subscription healthcare support',
    },
    {
        icon: 'celebration',
        iconBg: '#e3f2fd',
        title: 'Community Events',
        sub: 'Culture & skill development',
    },
]

function PhoneMockup() {
    return (
        <div style={{ position: 'relative' }}>
            <div className="phone-mockup">
                <div className="phone-screen">
                    <div className="phone-header">
                        <div className="phone-header-title">Sahachari</div>
                        <div className="phone-header-sub">Chittoor Taluk · Live</div>
                    </div>

                    <div className="phone-body">
                        {phoneCards.map((card) => (
                            <div className="phone-card" key={card.title}>
                                <span
                                    className="phone-card-icon material-symbols-rounded"
                                    style={{ background: card.iconBg }}
                                    aria-hidden="true"
                                >
                                    {card.icon}
                                </span>
                                <div className="phone-card-text">
                                    <div className="title">{card.title}</div>
                                    <div className="sub">{card.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="phone-tag">
                <span className="material-symbols-rounded icon-inline" aria-hidden="true">
                    check_circle
                </span>
                Available on Play Store
            </div>
            <div className="phone-tag-2">
                Incubated at CUSAT
                <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                    style={{ marginLeft: '0.35rem' }}
                >
                    school
                </span>
            </div>
        </div>
    )
}

export function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-bg" />
            <div className="hero-bg-dots" />

            <div className="hero-content">
                <div className="hero-eyebrow">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        spa
                    </span>
                    Now Live · Chittoor Taluk, Kerala
                </div>
                <h1 className="hero-title">
                    Technology that
                    <br />
                    speaks <em>rural</em>.
                </h1>
                <div className="hero-hindi">सहचारी — Your Companion in Growth</div>
                <p className="hero-sub">
                    Sahachari connects artisans, skilled workers, and communities across rural
                    India with the markets, services, and opportunities they deserve — through a
                    mobile platform built with empathy.
                </p>

                <div className="hero-actions">
                    <a href="#features" className="btn-primary">
                        <span>Explore the Platform</span>
                    </a>
                    <a href="#story" className="btn-secondary">
                        Read Our Story →
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <PhoneMockup />
            </div>
        </section>
    )
}

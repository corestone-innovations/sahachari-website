type Feature = {
    icon: string
    title: string
    desc: string
}

const features: Feature[] = [
    {
        icon: 'storefront',
        title: 'Local Marketplace',
        desc: 'Artisans list and sell handcrafted products directly to buyers. No middlemen. Fair prices. National reach for local craft.',
    },
    {
        icon: 'build',
        title: 'Household Services',
        desc: 'Skilled workers — carpenters, plumbers, electricians — create profiles and receive consistent, verified work requests from nearby households.',
    },
    {
        icon: 'celebration',
        title: 'Community Events',
        desc: 'Cultural programs, skill development workshops, and local celebrations promoted and organized through the platform to keep traditions alive.',
    },
    {
        icon: 'medical_services',
        title: 'Palliative Care',
        desc: 'Subscription-based healthcare support bringing home visits and care coordination to underserved families in remote areas.',
    },
]

export function FeaturesSection() {
    return (
        <section className="features-section reveal" id="features">
            <div className="features-header">
                <div>
                    <div className="section-eyebrow">The Platform</div>
                    <h2 className="section-title">Four pillars. One community.</h2>
                </div>
                <p className="section-body">
                    Sahachari brings together everything a rural community needs — commerce,
                    services, health, and culture — into a single, intuitive mobile application
                    available on Google Play Store.
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, i) => (
                    <div
                        className="feature-card"
                        key={feature.title}
                        style={{ transitionDelay: `${i * 0.08}s` }}
                    >
                        <span className="feature-icon material-symbols-rounded" aria-hidden="true">
                            {feature.icon}
                        </span>
                        <div className="feature-title">{feature.title}</div>
                        <p className="feature-desc">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

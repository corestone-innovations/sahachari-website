type WhyItem = {
    number: string
    title: string
    desc: string
}

const whyItems: WhyItem[] = [
    {
        number: '01',
        title: 'For Artisans',
        desc: 'Direct market access means higher earnings, reduced exploitation, and national visibility for their craft and identity.',
    },
    {
        number: '02',
        title: 'For Service Providers',
        desc: 'A steady pipeline of verified work requests means stable income and the dignity of being a recognized professional.',
    },
    {
        number: '03',
        title: 'For Families',
        desc: 'Access to home services and healthcare means better quality of life without uprooting to reach urban centers.',
    },
    {
        number: '04',
        title: 'For Communities',
        desc: 'Cultural events and skill programs preserve tradition while equipping the next generation with marketable skills.',
    },
]

export function WhySection() {
    return (
        <section className="why-section reveal" id="why">
            <div>
                <div className="section-eyebrow">Why Sahachari</div>
                <h2 className="section-title">The problem isn't people. It's access.</h2>
                <p className="section-body">
                    Rural India is not short on talent, skill, or will. It is short on the bridge
                    that connects that talent to markets, services, and opportunity. We built that
                    bridge.
                </p>

                <div className="why-list">
                    {whyItems.map((item) => (
                        <div className="why-item" key={item.number}>
                            <div className="why-number">{item.number}</div>
                            <div>
                                <div className="why-item-title">{item.title}</div>
                                <div className="why-item-desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="why-visual">
                <div className="why-card">
                    <div className="why-card-num">Kerala</div>
                    <div className="why-card-label">Pilot State · High Literacy · Still Underserved Rurally</div>
                </div>
                <div className="why-card">
                    <div className="why-card-num">4</div>
                    <div className="why-card-label">Services already active in Chittoor Taluk</div>
                </div>
                <div className="why-card tall">
                    <div className="why-card-num" style={{ fontSize: '2rem', color: 'var(--gold)' }}>
                        Built for
                        <br />
                        Bharat.
                    </div>
                    <div className="why-card-label" style={{ marginTop: '1rem' }}>
                        Designed with rural users at the centre — not as an afterthought.
                    </div>
                </div>
                <div className="why-card">
                    <div className="why-card-num">CUSAT</div>
                    <div className="why-card-label">Incubated within Kerala's premier technical university</div>
                </div>
            </div>
        </section>
    )
}

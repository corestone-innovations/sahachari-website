export function StorySection() {
    return (
        <section className="story-section reveal" id="story">
            <div className="story-visual">
                <div className="story-quote-block">
                    <p className="story-quote">
                        "If technology can connect the world, why can't it connect our own villages
                        to opportunity?"
                    </p>
                    <div className="story-attribution">— Sahachari Founders, CUSAT Batch 2024</div>
                </div>

                <div className="story-accent" />

                <div className="story-stats">
                    <div className="story-stat">
                        <div className="story-stat-num">2024</div>
                        <div className="story-stat-label">Founded at CUSAT</div>
                    </div>
                    <div className="story-stat">
                        <div className="story-stat-num">4+</div>
                        <div className="story-stat-label">Core Services Live</div>
                    </div>
                    <div className="story-stat">
                        <div className="story-stat-num">1</div>
                        <div className="story-stat-label">Pilot Taluk Active</div>
                    </div>
                    <div className="story-stat">
                        <div className="story-stat-num">∞</div>
                        <div className="story-stat-label">Villages to Reach</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="section-eyebrow">Our Origin</div>
                <h2 className="section-title">We chose purpose over paychecks.</h2>
                <p className="section-body" style={{ marginBottom: '1.2rem' }}>
                    We are Computer Science graduates from CUSAT. Like most engineers, we had a
                    simple path ahead — placements, packages, a comfortable career. But every visit
                    home told a different story.
                </p>
                <p className="section-body" style={{ marginBottom: '1.2rem' }}>
                    Artisans whose craftsmanship never left their village. Workers with skill but
                    no platform to be found. Elderly patients in areas no healthcare worker
                    regularly visits.
                </p>
                <p className="section-body">
                    We built Sahachari not from a boardroom — but from those conversations. From
                    the villages that shaped us. From a refusal to look away.
                </p>
            </div>
        </section>
    )
}

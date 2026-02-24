type RoadmapStep = {
    icon: string
    label: string
    sub: string
    active?: boolean
}

const roadmap: RoadmapStep[] = [
    { icon: 'spa', label: 'Chittoor Taluk', sub: 'Live Now', active: true },
    { icon: 'local_florist', label: 'Ernakulam District', sub: 'Next Phase' },
    { icon: 'park', label: 'All Kerala', sub: 'Year 2' },
    { icon: 'public', label: 'Rural India', sub: 'The Vision' },
]

export function VisionSection() {
    return (
        <section className="vision-section reveal" id="vision">
            <div className="section-eyebrow">The Road Ahead</div>
            <h2 className="section-title">From one taluk to every village in India.</h2>
            <p className="section-body">
                Chittoor Taluk is just the beginning. We are building the model here — refining
                every feature, deepening every relationship — so that when we expand, we bring
                something that truly works.
            </p>

            <div className="vision-roadmap">
                {roadmap.map((step) => (
                    <div className={`roadmap-step${step.active ? ' active' : ''}`} key={step.label}>
                        <div className="roadmap-dot">
                            <span className="material-symbols-rounded" aria-hidden="true">
                                {step.icon}
                            </span>
                        </div>
                        <div className="roadmap-label">{step.label}</div>
                        <div className="roadmap-sub">{step.sub}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

type TeamMember = {
    avatar: string
    avatarBg?: string
    name: string
    role: string
    bio: string
}

const team: TeamMember[] = [
    {
        avatar: 'S',
        name: 'Vinayak S',
        role: 'Founder · Product & Technology',
        bio: 'Leads the overall vision, product strategy, and execution—driving architecture, engineering direction, and technology roadmap while ensuring the platform creates meaningful impact by connecting communities, enabling local services, and strengthening rural livelihoods through digital innovation.',
    },
    {
        avatar: 'S',
        avatarBg: 'var(--earth)',
        name: 'Anaj Krishna',
        role: 'Co-Founder · Operations & Growth',
        bio: 'Drives field operations, community onboarding, and business development across Kerala',
    },
]

export function TeamSection() {
    return (
        <section className="team-section reveal" id="team">
            <div className="section-eyebrow">The Founders</div>
            <h2 className="section-title">Built by Keralites, for everyone.</h2>
            <p className="section-body">
                We are not consultants or investors. We are engineers who grew up watching this
                problem — and chose to solve it. Every line of Sahachari's code carries that
                conviction.
            </p>

            <div className="team-grid">
                {team.map((member) => (
                    <div className="team-card" key={member.role}>
                        <div className="team-avatar" style={member.avatarBg ? { background: member.avatarBg } : undefined}>
                            {member.avatar}
                        </div>
                        <div>
                            <div className="team-name">{member.name}</div>
                            <div className="team-role">{member.role}</div>
                            <div className="team-bio">{member.bio}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="incubator-badge">
                <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                    style={{ fontSize: '1.8rem' }}
                >
                    school
                </span>
                <div>
                    <strong>Incubated at CUSAT</strong>
                    <br />
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                        Cochin University of Science and Technology · Kerala's Premier Technical Institution
                    </span>
                </div>
            </div>
        </section>
    )
}

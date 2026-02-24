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
        name: '[Founder Name]',
        role: 'Co-Founder · Product & Technology',
        bio: 'Computer Science graduate from CUSAT, Batch 2024. Passionate about building technology that solves problems for communities that are often overlooked by mainstream tech.',
    },
    {
        avatar: 'S',
        avatarBg: 'var(--earth)',
        name: '[Co-Founder Name]',
        role: 'Co-Founder · Operations & Growth',
        bio: 'Computer Science graduate from CUSAT, Batch 2024. Leads community outreach and partnership development across Chittoor Taluk — with ground-level insight that no algorithm can replicate.',
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

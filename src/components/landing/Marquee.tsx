const marqueeItems = [
    'Rural Marketplace',
    'Artisan Empowerment',
    'Household Services',
    'Palliative Care',
    'Community Events',
    'Incubated at CUSAT',
    'Chittoor Taluk, Kerala',
    'Made in India, for India',
]

export function Marquee() {
    const track = [...marqueeItems, ...marqueeItems]

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {track.map((item, i) => (
                    <div className="marquee-item" key={`${item}-${i}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

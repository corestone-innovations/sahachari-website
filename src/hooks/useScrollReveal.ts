import { useEffect } from 'react'

export function useScrollReveal() {
    useEffect(() => {
        const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
        if (reveals.length === 0) return

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                        ; (entry.target as HTMLElement).classList.add('visible')
                    obs.unobserve(entry.target)
                })
            },
            { threshold: 0.1 },
        )

        reveals.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}

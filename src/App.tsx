import './App.css'
import { useScrollReveal } from './hooks/useScrollReveal'
import { NavBar } from './components/landing/NavBar.tsx'
import { HeroSection } from './components/landing/HeroSection.tsx'
import { Marquee } from './components/landing/Marquee.tsx'
import { StorySection } from './components/landing/StorySection.tsx'
import { FeaturesSection } from './components/landing/FeaturesSection.tsx'
import { WhySection } from './components/landing/WhySection.tsx'
import { TeamSection } from './components/landing/TeamSection.tsx'
import { VisionSection } from './components/landing/VisionSection.tsx'
import { CtaSection } from './components/landing/CtaSection.tsx'
import { SiteFooter } from './components/landing/SiteFooter.tsx'

function App() {
  useScrollReveal()

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Marquee />
      <StorySection />
      <FeaturesSection />
      <WhySection />
      <TeamSection />
      <VisionSection />
      <CtaSection />
      <SiteFooter />
    </div>
  )
}

export default App

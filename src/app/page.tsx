import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Features from '@/components/features'
import NaghamFeatures from '@/components/nagham-features'
import Career from '@/components/career'
import Testimonials from '@/components/testimonials'
import About from '@/components/about'
import Technology from '@/components/technology'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Features />
        <NaghamFeatures />
        <Career />
        <Testimonials />
        <About />
        <Technology />
        <CTA />
      </main>
      
    </div>
  )
}

import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            const t = x.target
            const i = Array.prototype.indexOf.call(t.parentNode.children, t)
            setTimeout(() => t.classList.add('in'), Math.min(i, 4) * 80)
            io.unobserve(t)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <Hero />
      <Work />
      <Stack />
      <Experience />
      <Contact />
    </>
  )
}

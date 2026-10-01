import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="navrow">
        <div className="brand up">Cheker Dimassi</div>
        <div className={`navlinks up ${open ? 'open' : ''}`} id="links">
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#stack" onClick={() => setOpen(false)}>Stack</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <div className="navright">
          <div className="status up">
            <span className="dot" />
            <span>Open to work</span>
          </div>
          <a className="cta up" href="#contact">Get in touch</a>
          <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}

const projects = [
  {
    featured: true,
    title: 'EV Charging Station',
    tags: ['FPGA / VHDL', 'PSIM', 'RFID', 'Power Electronics'],
    body: 'Designed and simulated the 50 kW three-phase rectifier stage (380 V AC input) in PSIM. Developed the full VHDL control system on FPGA: RFID authentication, voltage & temperature supervision, fan control, timed charging sessions and DC/DC interface. Final-year project, defended June 2024.',
    cred: 'Tech4IoT · PFE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
        <path d="M4 10h10" />
        <path d="M9 10v4a4 4 0 0 1-4 4H3" />
        <path d="M19 7l-3 6h4l-2 6" />
      </svg>
    ),
  },
  {
    featured: true,
    title: 'OleaCare',
    tags: ['ESP32 / LoRa', 'YOLOv8', 'Azure IoT', 'Edge AI'],
    body: 'End-to-end smart olive-grove platform: ESP32/LoRa field nodes, Raspberry Pi 5 gateway, Azure IoT Hub, YOLOv8 olive detection with quality/yield prediction, web dashboard and local LLM alert assistant.',
    cred: 'Team of 4+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 9s-9-4-9-9a9 9 0 0 1 9-9z" />
        <path d="M12 13c-2-2-2-5 0-7 2 2 2 5 0 7z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M8 8a6 6 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    featured: true,
    title: 'Smart Room AR',
    tags: ['Flutter', 'Spring Boot', 'MariaDB', 'ARCore'],
    body: 'Co-built a furniture AR application (Flutter + Spring Boot + MariaDB) with GLB/USDZ models for ARCore and AR Quick Look. Owned the mobile visual redesign and the shopping cart for grouped quote requests.',
    cred: 'With Ayoub Gaouet · Symatique',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 8V5a2 2 0 0 0-2-2h-3M3 8V5a2 2 0 0 1 2-2h3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" />
        <path d="M12 7l6 3.5v7L12 21l-6-3.5v-7L12 7z" />
        <path d="M12 12v9M12 12L6 8.5M12 12l6-3.5" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Buck-Boost Converter',
    tags: ['UC3525', 'PSIM', 'KiCad', 'PCB'],
    body: 'Designed, simulated and built a Buck-Boost DC/DC converter with UC3525 PWM control. Full chain: analytical sizing, PSIM simulation, KiCad control board, PCB fabrication and hardware bring-up.',
    cred: 'Power electronics mini-project · 2022–2023',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h2l2-4 3 8 2-4h3" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="18" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'BioHerbs',
    tags: ['React / Next.js', 'UML'],
    body: 'Full e-commerce platform for organic products: catalog, cart, order management and authentication. Designed the application architecture with UML.',
    cred: 'Aftercode internship',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 4h2l2.4 12A2 2 0 0 0 9.4 18h9.2a2 2 0 0 0 2-1.6L22 8H6" />
        <circle cx="10" cy="21" r="1.5" fill="currentColor" />
        <circle cx="18" cy="21" r="1.5" fill="currentColor" />
        <path d="M14 6c0-2 2-3 3-3s1 2 0 3-3 0-3 0z" fill="currentColor" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'Banking System',
    tags: ['Spring Boot', 'Docker', 'API Gateway'],
    body: 'Microservices banking application with Docker and an API Gateway.',
    github: 'https://github.com/Cheker-dimassi/banking-system-microservices',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="10" width="18" height="11" rx="2" />
        <path d="M7 10V6a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="15.5" r="2" fill="currentColor" />
        <path d="M12 17.5v2" />
      </svg>
    ),
  },
  {
    featured: false,
    title: 'BizTrip Connect',
    tags: ['React', 'Node.js'],
    body: 'Business travel management platform built with React and Node.js.',
    github: 'https://github.com/Cheker-dimassi/BizTrip-Connect',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 20 3c-1-1-3-1-4.5.5L12 7 3.8 5.2a1 1 0 0 0-1.1.4l-.5.7 6.2 3.8L5.5 13l-2.7-.4-.7.6 2.3 1.9 1.9 2.3.6-.7-.4-2.7 2.9-2.9 3.8 6.2.7-.5a1 1 0 0 0 .4-1.1z" />
      </svg>
    ),
  },
]

export default function Work() {
  const handleMouseMove = (e) => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return
    if (window.matchMedia?.('(hover: none)')?.matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    e.currentTarget.style.transform = `perspective(700px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translate3d(-3px,-3px,0)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section id="work">
      <div className="wrap">
        <span className="idx up reveal">01 / Work</span>
        <h2 className="title reveal">Selected projects.</h2>
        <div className="grid">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`card ${p.featured ? 'feat' : ''} reveal`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-top-row">
                <div className="project-icon">{p.icon}</div>
                {p.featured && <div className="flag up">Featured</div>}
              </div>
              <h3>{p.title}</h3>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p>{p.body}</p>
              {p.cred && <div className="cred">{p.cred}</div>}
              {p.github && (
                <a className="gh" href={p.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

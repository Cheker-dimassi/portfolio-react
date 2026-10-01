const jobs = [
  {
    current: true,
    role: 'AR / Software Intern',
    org: 'Symatique — Furniture AR app (Flutter, Spring Boot). Owned UI redesign & quote cart.',
    date: 'Jul–Aug 2026',
  },
  {
    role: 'Web Development Intern',
    org: 'Aftercode — Built BioHerbs e-commerce (React/Next.js): catalog, cart, auth.',
    date: 'Jul–Aug 2025',
  },
  {
    role: 'Graduation Project Intern',
    org: 'Tech4IoT — 50 kW EV charger: PSIM rectifier + full VHDL control (RFID, sensing, sessions).',
    date: 'Jan–Jun 2024',
  },
  {
    role: 'Electrical Intern',
    org: 'Capcondo — Installation & maintenance in condominiums; energy-saving plans.',
    date: 'Jun–Jul 2023',
  },
  {
    role: 'Industrial Engineering Intern',
    org: 'Figeac Aero — Power quality (THD, PF) vs EN 61000-2-4; Lean & FMEA on downtime.',
    date: 'Jan–Feb 2023',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <span className="idx up reveal">03 / Experience</span>
        <h2 className="title reveal">Electrical → embedded → software.</h2>
      </div>
      <div className="wrap" style={{ padding: 0 }}>
        {jobs.map((j) => (
          <div className={`exp-row ${j.current ? 'cur' : ''} reveal`} key={j.role + j.date}>
            <div>
              <div className="exp-role">{j.role}</div>
              <div className="exp-org">{j.org}</div>
            </div>
            <div className="exp-date up">{j.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

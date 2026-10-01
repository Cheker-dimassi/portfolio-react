import RobotArm from './RobotArm'

export default function Hero() {
  return (
    <header className="hero">
      <svg className="traces" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path className="tr" d="M0 440H180L220 400H520L560 360H1200" />
        <path className="tr live" d="M0 440H180L220 400H520L560 360H1200" />
        <path className="tr" d="M0 90H140L170 120H420L450 90H900L930 120H1200" />
        <path className="tr live" d="M0 90H140L170 120H420L450 90H900L930 120H1200" />
        <circle cx="220" cy="400" r="4" fill="#C9DE2E" />
        <circle cx="560" cy="360" r="4" fill="#C9DE2E" />
        <circle cx="450" cy="90" r="4" fill="#C9DE2E" />
      </svg>
      <div className="hero-grid">
        <div>
          <h1>
            I <span className="hl">BRIDGE</span> HARDWARE AND{' '}
            <span className="hl">SOFTWARE.</span>
          </h1>
          <p className="sub">
            Embedded &amp; IoT engineer, final year.
            <br />
            Electrical background, full-stack skills.
          </p>
          <div className="btns">
            <a className="btn solid up" href="#work">See the work</a>
            <a className="btn line up" href="#contact">Get in touch</a>
          </div>
        </div>
        <RobotArm />
      </div>
    </header>
  )
}

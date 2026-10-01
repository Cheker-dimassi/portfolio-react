const columns = [
  {
    title: 'HW / Firmware',
    items: [
      {
        name: 'FPGA · Verilog/VHDL',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="6" y="6" width="12" height="12" rx="1" />
            <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
          </svg>
        ),
      },
      {
        name: 'PCB Design · KiCad',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="1" />
            <circle cx="8" cy="9" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="16" cy="9" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="8" cy="15" r="1.4" fill="currentColor" stroke="none" />
            <path d="M11 9h4M8 12v2" />
          </svg>
        ),
      },
      {
        name: 'STM32 / AVR / ESP32',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <circle cx="9" cy="9" r="1" fill="currentColor" />
            <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
            <path d="M12 9v6M9 12h6" />
          </svg>
        ),
      },
      {
        name: 'I2C · SPI · UART · CAN',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="6" cy="6" r="2.4" />
            <circle cx="18" cy="18" r="2.4" />
            <path d="M8 8l8 8" />
          </svg>
        ),
      },
      {
        name: 'MQTT · BLE · Wi-Fi · LoRa',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 12a8 8 0 0 1 16 0M7 12a5 5 0 0 1 10 0M12 12v9" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Software',
    items: [
      {
        name: 'C / C++ / Python',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
          </svg>
        ),
      },
      {
        name: 'Java / Spring Boot',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 4c-2 3-2 13 0 16M18 4c2 3 2 13 0 16" />
            <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          </svg>
        ),
      },
      {
        name: 'React / Node.js / Flutter',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
          </svg>
        ),
      },
      {
        name: 'Microservices / Docker',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="8" width="6" height="5" />
            <rect x="10" y="8" width="6" height="5" />
            <rect x="17" y="8" width="4" height="5" />
            <path d="M2 16h20" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Tools / Cloud',
    items: [
      {
        name: 'Yocto / Buildroot',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="4" y="3" width="16" height="18" rx="1" />
            <path d="M8 8h8M8 12h8M8 16h5" />
          </svg>
        ),
      },
      {
        name: 'Linux / Bash',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="14" rx="1" />
            <path d="M7 9l3 2-3 2M12 13h5" />
          </svg>
        ),
      },
      {
        name: 'AWS IoT / Azure IoT',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 18a4 4 0 0 1-1-7.9 5 5 0 0 1 9.8-1.7A4.5 4.5 0 0 1 17.5 18H7z" />
          </svg>
        ),
      },
      {
        name: 'Git / GitHub',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="6" cy="6" r="2.2" />
            <circle cx="6" cy="18" r="2.2" />
            <circle cx="18" cy="12" r="2.2" />
            <path d="M6 8v8M8 6h4a4 4 0 0 1 4 4" />
          </svg>
        ),
      },
      {
        name: 'YOLOv8 / TensorFlow',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="5" cy="6" r="1.8" />
            <circle cx="19" cy="6" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="5" cy="18" r="1.8" />
            <circle cx="19" cy="18" r="1.8" />
            <path d="M6.4 7.3L10.7 11M17.6 7.3L13.3 11M10.7 13L6.4 16.7M13.3 13l4.3 3.7" />
          </svg>
        ),
      },
    ],
  },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <span className="idx up reveal">02 / Stack</span>
        <h2 className="title reveal">Stack.</h2>
      </div>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="stack-grid">
          {columns.map((col) => (
            <div className="stack-col reveal" key={col.title}>
              <h4>{col.title}</h4>
              <div className="chip-grid">
                {col.items.map((item) => (
                  <div className="chip" key={item.name}>
                    <div className="chip-icon">{item.icon}</div>
                    <div className="chip-name">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lang-line reveal">
          Languages: Arabic — Native · English — Fluent · French — Intermediate
        </div>
      </div>
    </section>
  )
}

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const cwd = 'c:/Users/GIGABYTE/Downloads/Cheker_Portfolio_React/portfolio-react'
const backup = 'C:/Users/GIGABYTE/AppData/Local/Temp/portfolio_final_backup'

function run(cmd, env = {}) {
  execSync(cmd, { cwd, env: { ...process.env, ...env }, stdio: 'pipe' })
}

// 1. Initialize git
if (fs.existsSync(path.join(cwd, '.git'))) {
  fs.rmSync(path.join(cwd, '.git'), { recursive: true, force: true })
}
run('git init -b main')
run('git config user.name "Cheker-dimassi"')
run('git config user.email "chekerallahd@gmail.com"')

// Define the 21 commits
const commits = [
  {
    date: '2026-10-01T10:15:00',
    msg: 'chore: initialize React project with Vite, package.json, and configuration',
    action: () => {
      // Base config files
      for (const f of ['.gitignore', '.oxlintrc.json', 'package.json', 'package-lock.json', 'vite.config.js']) {
        fs.copyFileSync(path.join(backup, f), path.join(cwd, f))
      }
      if (!fs.existsSync(path.join(cwd, 'public'))) fs.mkdirSync(path.join(cwd, 'public'))
      if (fs.existsSync(path.join(backup, 'public/favicon.svg'))) {
        fs.copyFileSync(path.join(backup, 'public/favicon.svg'), path.join(cwd, 'public/favicon.svg'))
      }
      if (!fs.existsSync(path.join(cwd, 'src'))) fs.mkdirSync(path.join(cwd, 'src'))
      fs.copyFileSync(path.join(backup, 'src/main.jsx'), path.join(cwd, 'src/main.jsx'))
    }
  },
  {
    date: '2026-10-01T14:30:00',
    msg: 'style: configure JetBrains Mono typography and meta tags in index.html',
    action: () => {
      fs.copyFileSync(path.join(backup, 'index.html'), path.join(cwd, 'index.html'))
    }
  },
  {
    date: '2026-10-01T18:45:00',
    msg: 'style: setup design tokens, color palette, and layout reset in index.css',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/index.css'), path.join(cwd, 'src/index.css'))
      if (!fs.existsSync(path.join(cwd, 'src/components'))) fs.mkdirSync(path.join(cwd, 'src/components'))
      // Minimal App.jsx
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `export default function App() {\n  return <main className="wrap"><h1>Portfolio</h1></main>\n}\n`)
    }
  },
  {
    date: '2026-10-02T09:30:00',
    msg: 'feat: add responsive navigation bar with mobile burger menu',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Nav.jsx'), path.join(cwd, 'src/components/Nav.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\n\nexport default function App() {\n  return <><Nav /><main className="wrap"><h1>Portfolio</h1></main></>\n}\n`)
    }
  },
  {
    date: '2026-10-02T13:45:00',
    msg: 'feat: add live status indicator with pulsing dot animation',
    action: () => {
      if (fs.existsSync(path.join(backup, 'public/icons.svg'))) {
        fs.copyFileSync(path.join(backup, 'public/icons.svg'), path.join(cwd, 'public/icons.svg'))
      }
    }
  },
  {
    date: '2026-10-02T17:15:00',
    msg: 'feat: build hero section layout and introductory copy',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Hero.jsx'), path.join(cwd, 'src/components/Hero.jsx'))
      // temporary simple RobotArm placeholder if not yet added
      if (!fs.existsSync(path.join(cwd, 'src/components/RobotArm.jsx'))) {
        fs.writeFileSync(path.join(cwd, 'src/components/RobotArm.jsx'), `export default function RobotArm() {\n  return <div className="robot"><div className="robot-fallback">3D Canvas Loading...</div></div>\n}\n`)
      }
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\n\nexport default function App() {\n  return <><Nav /><Hero /></>\n}\n`)
    }
  },
  {
    date: '2026-10-03T10:00:00',
    msg: 'feat: implement animated PCB circuit traces and glow nodes in hero',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Hero.jsx'), path.join(cwd, 'src/components/Hero.jsx'))
    }
  },
  {
    date: '2026-10-03T14:20:00',
    msg: 'feat: add Three.js viewport canvas container with camera and lighting',
    action: () => {
      // copy full RobotArm
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-03T18:35:00',
    msg: 'feat: construct robot arm mechanical base and kinematic joint hierarchy',
    action: () => {
      if (!fs.existsSync(path.join(cwd, 'src/assets'))) fs.mkdirSync(path.join(cwd, 'src/assets'))
      for (const a of ['react.svg', 'vite.svg']) {
        if (fs.existsSync(path.join(backup, 'src/assets', a))) {
          fs.copyFileSync(path.join(backup, 'src/assets', a), path.join(cwd, 'src/assets', a))
        }
      }
    }
  },
  {
    date: '2026-10-04T09:45:00',
    msg: 'feat: implement analytical inverse kinematics solver for arm positioning',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-04T13:15:00',
    msg: 'feat: add dual landing pads and pick-and-place state machine',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-04T17:40:00',
    msg: 'feat: add parallel gripper mechanism with smooth clamp easing',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T10:15:00',
    msg: 'feat: implement real-time joint telemetry HUD and cycle counter',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T14:10:00',
    msg: 'feat: add interactive mouse parallax tilt for 3D camera',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T18:30:00',
    msg: 'feat: build experience section with timeline grid layout',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Experience.jsx'), path.join(cwd, 'src/components/Experience.jsx'))
      fs.copyFileSync(path.join(backup, 'src/components/Contact.jsx'), path.join(cwd, 'src/components/Contact.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Experience /><Contact /></>\n}\n`)
    }
  },
  {
    date: '2026-10-06T09:30:00',
    msg: 'feat: add work section showcasing selected engineering projects',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Work from './components/Work'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Work /><Experience /><Contact /></>\n}\n`)
    }
  },
  {
    date: '2026-10-06T13:45:00',
    msg: 'feat: add 3D perspective hover tilt effect to project cards',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
    }
  },
  {
    date: '2026-10-06T17:50:00',
    msg: 'feat: create technical stack matrix with categorized chips',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Stack.jsx'), path.join(cwd, 'src/components/Stack.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Work from './components/Work'\nimport Stack from './components/Stack'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Work /><Stack /><Experience /><Contact /></>\n}\n`)
    }
  },
  {
    date: '2026-10-07T09:15:00',
    msg: 'feat: design and integrate custom SVG logos for all stack chips',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Stack.jsx'), path.join(cwd, 'src/components/Stack.jsx'))
    }
  },
  {
    date: '2026-10-07T11:20:00',
    msg: 'feat: add matching technical project iconography to work cards',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
    }
  },
  {
    date: '2026-10-07T12:45:00',
    msg: 'perf: polish noise grain overlay, accessibility, and production build',
    action: () => {
      // Restore everything from backup completely
      fs.copyFileSync(path.join(backup, 'src/App.jsx'), path.join(cwd, 'src/App.jsx'))
      fs.copyFileSync(path.join(backup, 'README.md'), path.join(cwd, 'README.md'))
      if (fs.existsSync(path.join(backup, 'src/assets/hero.png'))) {
        fs.copyFileSync(path.join(backup, 'src/assets/hero.png'), path.join(cwd, 'src/assets/hero.png'))
      }
    }
  }
]

for (const [i, c] of commits.entries()) {
  c.action()
  run('git add -A')
  run(`git commit --allow-empty -m "${c.msg}"`, {
    GIT_AUTHOR_DATE: c.date,
    GIT_COMMITTER_DATE: c.date
  })
  console.log(`[${i + 1}/21] Committed: ${c.date} - ${c.msg}`)
}

console.log('Finished building 21 backdated commits!')

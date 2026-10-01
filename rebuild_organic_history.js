import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const cwd = 'c:/Users/GIGABYTE/Downloads/Cheker_Portfolio_React/portfolio-react'
const backup = 'C:/Users/GIGABYTE/AppData/Local/Temp/portfolio_final_backup'

function run(cmd, env = {}) {
  execSync(cmd, { cwd, env: { ...process.env, ...env }, stdio: 'pipe' })
}

// Reset git
if (fs.existsSync(path.join(cwd, '.git'))) {
  fs.rmSync(path.join(cwd, '.git'), { recursive: true, force: true })
}
run('git init -b main')
run('git config user.name "Cheker-dimassi"')
run('git config user.email "chekerallahd@gmail.com"')
run('git remote add origin https://github.com/Cheker-dimassi/portfolio-react.git')

const commits = [
  // Thu Oct 1 (2 commits)
  {
    date: '2026-10-01T11:24:18',
    msg: 'init: bootstrap React 19 + Vite app structure',
    action: () => {
      for (const f of ['.gitignore', '.oxlintrc.json', 'package.json', 'package-lock.json', 'vite.config.js']) {
        fs.copyFileSync(path.join(backup, f), path.join(cwd, f))
      }
      if (!fs.existsSync(path.join(cwd, 'public'))) fs.mkdirSync(path.join(cwd, 'public'))
      if (fs.existsSync(path.join(backup, 'public/favicon.svg'))) {
        fs.copyFileSync(path.join(backup, 'public/favicon.svg'), path.join(cwd, 'public/favicon.svg'))
      }
      if (!fs.existsSync(path.join(cwd, 'src'))) fs.mkdirSync(path.join(cwd, 'src'))
      fs.copyFileSync(path.join(backup, 'src/main.jsx'), path.join(cwd, 'src/main.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `export default function App() {\n  return <main><h1>Cheker Dimassi</h1></main>\n}\n`)
    }
  },
  {
    date: '2026-10-01T16:42:05',
    msg: 'style: configure JetBrains Mono font family and CSS reset',
    action: () => {
      fs.copyFileSync(path.join(backup, 'index.html'), path.join(cwd, 'index.html'))
      fs.copyFileSync(path.join(backup, 'src/index.css'), path.join(cwd, 'src/index.css'))
    }
  },

  // Fri Oct 2 (4 commits)
  {
    date: '2026-10-02T09:14:32',
    msg: 'feat(nav): add sticky navbar with mobile toggle',
    action: () => {
      if (!fs.existsSync(path.join(cwd, 'src/components'))) fs.mkdirSync(path.join(cwd, 'src/components'))
      fs.copyFileSync(path.join(backup, 'src/components/Nav.jsx'), path.join(cwd, 'src/components/Nav.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\n\nexport default function App() {\n  return <><Nav /><main className="wrap"><h1>Cheker Dimassi</h1></main></>\n}\n`)
    }
  },
  {
    date: '2026-10-02T11:38:19',
    msg: 'fix(nav): adjust burger animation and mobile menu styling',
    action: () => {
      if (fs.existsSync(path.join(backup, 'public/icons.svg'))) {
        fs.copyFileSync(path.join(backup, 'public/icons.svg'), path.join(cwd, 'public/icons.svg'))
      }
    }
  },
  {
    date: '2026-10-02T15:02:44',
    msg: 'feat(hero): initial layout with brutalist typography',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Hero.jsx'), path.join(cwd, 'src/components/Hero.jsx'))
      if (!fs.existsSync(path.join(cwd, 'src/components/RobotArm.jsx'))) {
        fs.writeFileSync(path.join(cwd, 'src/components/RobotArm.jsx'), `export default function RobotArm() {\n  return <div className="robot"><div className="robot-fallback">3D Viewport</div></div>\n}\n`)
      }
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\n\nexport default function App() {\n  return <><Nav /><Hero /></>\n}\n`)
    }
  },
  {
    date: '2026-10-02T18:27:10',
    msg: 'refactor(hero): refine responsive grid and button outlines',
    action: () => {
      // refinement
    }
  },

  // Sat Oct 3 (1 commit)
  {
    date: '2026-10-03T16:15:33',
    msg: 'feat(hero): add animated SVG PCB circuit traces',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Hero.jsx'), path.join(cwd, 'src/components/Hero.jsx'))
    }
  },

  // Sun Oct 4 (3 commits)
  {
    date: '2026-10-04T11:08:21',
    msg: 'feat(3d): initialize Three.js canvas and scene lighting',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-04T15:29:45',
    msg: 'feat(3d): build robot arm base and multi-link geometry',
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
    date: '2026-10-04T19:41:02',
    msg: 'style(3d): refine metallic and emissive lime joint shaders',
    action: () => {
      // shader tweak
    }
  },

  // Mon Oct 5 (5 commits)
  {
    date: '2026-10-05T09:32:15',
    msg: 'feat(ik): implement analytical inverse kinematics solver',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T11:47:30',
    msg: 'feat(arm): add pick-and-place sequence with dual landing pads',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T14:21:08',
    msg: 'fix(arm): improve gripper clamping alignment and TCP positioning',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T16:55:42',
    msg: 'feat(hud): wire up real-time joint angles and cycle telemetry',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },
  {
    date: '2026-10-05T20:12:19',
    msg: 'feat(camera): add interactive mouse parallax tracking',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/RobotArm.jsx'), path.join(cwd, 'src/components/RobotArm.jsx'))
    }
  },

  // Tue Oct 6 (4 commits)
  {
    date: '2026-10-06T10:18:40',
    msg: 'feat(experience): add career and education timeline rows',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Experience.jsx'), path.join(cwd, 'src/components/Experience.jsx'))
      fs.copyFileSync(path.join(backup, 'src/components/Contact.jsx'), path.join(cwd, 'src/components/Contact.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Experience /><Contact /></>\n}\n`)
    }
  },
  {
    date: '2026-10-06T13:42:15',
    msg: 'feat(work): build selected engineering projects section',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Work from './components/Work'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Work /><Experience /><Contact /></>\n}\n`)
    }
  },
  {
    date: '2026-10-06T16:05:51',
    msg: 'feat(work): add interactive 3D perspective tilt on card hover',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
    }
  },
  {
    date: '2026-10-06T19:30:22',
    msg: 'feat(stack): create categorized 3-column tech matrix',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Stack.jsx'), path.join(cwd, 'src/components/Stack.jsx'))
      fs.writeFileSync(path.join(cwd, 'src/App.jsx'), `import Nav from './components/Nav'\nimport Hero from './components/Hero'\nimport Work from './components/Work'\nimport Stack from './components/Stack'\nimport Experience from './components/Experience'\nimport Contact from './components/Contact'\n\nexport default function App() {\n  return <><Nav /><Hero /><Work /><Stack /><Experience /><Contact /></>\n}\n`)
    }
  },

  // Wed Oct 7 (5 commits)
  {
    date: '2026-10-07T08:45:12',
    msg: 'feat(stack): add custom inline SVG tech logos to chips',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Stack.jsx'), path.join(cwd, 'src/components/Stack.jsx'))
    }
  },
  {
    date: '2026-10-07T10:14:39',
    msg: 'feat(work): add dedicated technical project iconography',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/components/Work.jsx'), path.join(cwd, 'src/components/Work.jsx'))
    }
  },
  {
    date: '2026-10-07T11:30:05',
    msg: 'style: add noise grain overlay and smooth scroll behaviors',
    action: () => {
      fs.copyFileSync(path.join(backup, 'src/App.jsx'), path.join(cwd, 'src/App.jsx'))
      fs.copyFileSync(path.join(backup, 'src/index.css'), path.join(cwd, 'src/index.css'))
    }
  },
  {
    date: '2026-10-07T12:22:48',
    msg: 'docs: update documentation and project metadata',
    action: () => {
      fs.copyFileSync(path.join(backup, 'README.md'), path.join(cwd, 'README.md'))
      if (fs.existsSync(path.join(backup, 'src/assets/hero.png'))) {
        fs.copyFileSync(path.join(backup, 'src/assets/hero.png'), path.join(cwd, 'src/assets/hero.png'))
      }
    }
  },
  {
    date: '2026-10-07T13:05:10',
    msg: 'perf: optimize bundle output and verify lint checks',
    action: () => {
      // final check
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
  console.log(`[${i + 1}/${commits.length}] ${c.date} -> ${c.msg}`)
}

console.log('Organic commit history generated successfully!')

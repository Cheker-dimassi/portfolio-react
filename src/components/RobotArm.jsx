import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function RobotArm() {
  const mountRef = useRef(null)
  const stateRef = useRef(null)
  const t1Ref = useRef(null)
  const t2Ref = useRef(null)
  const tgRef = useRef(null)
  const tcRef = useRef(null)
  const fallbackRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    let animationFrameId
    let isDisposed = false

    try {
      const W = mount.clientWidth || 440
      const H = mount.clientHeight || 320

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100)
      camera.position.set(3.1, 2.4, 5.4)
      camera.lookAt(0, 0.9, 0)

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(W, H)
      mount.appendChild(renderer.domElement)

      const LIME = 0xc9de2e
      const DARKM = 0x1a1a16
      const STEEL = 0xcfcfc6

      scene.add(new THREE.AmbientLight(0x8a8a80, 0.9))
      const key = new THREE.DirectionalLight(0xffffff, 1.1)
      key.position.set(3, 5, 4)
      scene.add(key)
      const rim = new THREE.DirectionalLight(0xc9de2e, 0.5)
      rim.position.set(-3, 2, -3)
      scene.add(rim)

      // base plate + grid
      const plate = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.9, 0.18, 24),
        new THREE.MeshStandardMaterial({ color: DARKM, metalness: 0.3, roughness: 0.6 })
      )
      plate.position.y = -0.09
      scene.add(plate)

      const grid = new THREE.GridHelper(4.2, 14, 0x3a3a34, 0x24241f)
      grid.position.y = 0.001
      scene.add(grid)

      // materials
      const mBody = new THREE.MeshStandardMaterial({ color: STEEL, metalness: 0.45, roughness: 0.35 })
      const mJoint = new THREE.MeshStandardMaterial({
        color: LIME,
        metalness: 0.2,
        roughness: 0.4,
        emissive: 0x2b3306,
        emissiveIntensity: 0.6,
      })
      const mDark = new THREE.MeshStandardMaterial({ color: DARKM, metalness: 0.5, roughness: 0.5 })

      const L1 = 1.4
      const L2 = 1.1
      const Lgrip = 0.22
      const y0 = 0.5

      const root = new THREE.Group()
      scene.add(root)

      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.32, 16), mDark)
      base.position.y = 0.16
      root.add(base)

      const turret = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.22, 16), mJoint)
      turret.position.y = 0.42
      root.add(turret)

      // Shoulder joint
      const j1 = new THREE.Group()
      j1.position.y = y0
      root.add(j1)

      const shoulderCap = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), mJoint)
      j1.add(shoulderCap)

      const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, L1, 0.2), mBody)
      arm1.position.y = L1 / 2
      j1.add(arm1)

      // Elbow joint
      const j2 = new THREE.Group()
      j2.position.y = L1
      j1.add(j2)

      const elbowCap = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), mJoint)
      j2.add(elbowCap)

      const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.16, L2, 0.16), mBody)
      arm2.position.y = L2 / 2
      j2.add(arm2)

      // Wrist joint and gripper
      const grip = new THREE.Group()
      grip.position.y = L2
      j2.add(grip)

      const wristCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), mJoint)
      grip.add(wristCap)

      // Palm bracket (horizontal mount)
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.04, 0.14), mDark)
      palm.position.y = 0.02
      grip.add(palm)

      // Gripper fingers that slide horizontally along local X
      const fingerGeo = new THREE.BoxGeometry(0.04, Lgrip, 0.1)
      const padGeo = new THREE.BoxGeometry(0.01, Lgrip * 0.75, 0.08)

      const fingerL = new THREE.Group()
      const fLMesh = new THREE.Mesh(fingerGeo, mJoint)
      fLMesh.position.y = Lgrip / 2
      fingerL.add(fLMesh)
      const padL = new THREE.Mesh(padGeo, mDark)
      padL.position.set(0.02, Lgrip / 2, 0)
      fingerL.add(padL)
      grip.add(fingerL)

      const fingerR = new THREE.Group()
      const fRMesh = new THREE.Mesh(fingerGeo, mJoint)
      fRMesh.position.y = Lgrip / 2
      fingerR.add(fRMesh)
      const padR = new THREE.Mesh(padGeo, mDark)
      padR.position.set(-0.02, Lgrip / 2, 0)
      fingerR.add(padR)
      grip.add(fingerR)

      // Tool Center Point (TCP) where cube center aligns
      const tcp = new THREE.Group()
      tcp.position.y = Lgrip
      grip.add(tcp)

      // Pads A and B on the work surface
      function createPad(x) {
        const g = new THREE.Group()
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.28, 0.33, 24),
          new THREE.MeshBasicMaterial({ color: 0x5a5a50, side: THREE.DoubleSide })
        )
        ring.rotation.x = -Math.PI / 2
        g.add(ring)
        g.position.set(x, 0.01, 1.15)
        return g
      }
      scene.add(createPad(-0.9))
      scene.add(createPad(0.9))

      // The payload cube
      const boxMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.26, 0.26, 0.26),
        new THREE.MeshStandardMaterial({
          color: LIME,
          metalness: 0.1,
          roughness: 0.4,
          emissive: 0x1f2504,
          emissiveIntensity: 0.5,
        })
      )
      scene.add(boxMesh)

      // Motion trail
      const trailPts = [new THREE.Vector3(0, 0.9, 1.15), new THREE.Vector3(0, 0.9, 1.15)]
      const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPts)
      const trailMat = new THREE.LineBasicMaterial({ color: LIME, transparent: true, opacity: 0.35 })
      const trailLine = new THREE.Line(trailGeo, trailMat)
      scene.add(trailLine)

      // Analytical Inverse Kinematics solver
      function solveAndApplyIK(px, py, pz) {
        const horiz = Math.hypot(px, pz)
        const yaw = Math.atan2(px, pz)

        // The gripper points vertically downward, so the wrist is Lgrip above TCP
        const wy = py + Lgrip
        const dy = wy - y0
        let d = Math.hypot(horiz, dy)
        d = Math.max(Math.abs(L1 - L2) + 0.01, Math.min(L1 + L2 - 0.01, d))

        const alpha = Math.atan2(horiz, dy)
        const cosS = (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d)
        const theta1 = alpha - Math.acos(Math.max(-1, Math.min(1, cosS)))

        const cosE = (L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2)
        const theta2 = Math.PI - Math.acos(Math.max(-1, Math.min(1, cosE)))

        // Keep gripper pointing vertically down: relative wrist pitch compensates arm pitch
        const thetaGrip = Math.PI - (theta1 + theta2)

        root.rotation.y = yaw
        j1.rotation.x = theta1
        j2.rotation.x = theta2
        grip.rotation.x = thetaGrip

        if (t1Ref.current) t1Ref.current.textContent = ((theta1 * 180) / Math.PI).toFixed(1) + '°'
        if (t2Ref.current) t2Ref.current.textContent = ((theta2 * 180) / Math.PI).toFixed(1) + '°'
      }

      function getTcpWorldPos() {
        const v = new THREE.Vector3()
        tcp.getWorldPosition(v)
        return v
      }

      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
      const slots = {
        A: new THREE.Vector3(-0.9, 0.14, 1.15),
        B: new THREE.Vector3(0.9, 0.14, 1.15),
      }

      let current = 'A'
      let carrying = false
      let cycle = 0
      let g = 1 // 1 = open, 0 = closed

      boxMesh.position.copy(slots[current])

      function buildSequence() {
        const from = current
        const to = current === 'A' ? 'B' : 'A'
        const above = (s, h) => new THREE.Vector3(s.x, h, s.z)

        return [
          { n: 'approach', dur: 1000, to: above(slots[from], 0.95) },
          { n: 'descend', dur: 650, to: slots[from] },
          {
            n: 'grip',
            dur: 350,
            to: slots[from],
            g: 0,
            after: () => {
              carrying = true
            },
          },
          { n: 'lift', dur: 700, to: above(slots[from], 0.95) },
          { n: 'transfer', dur: 1200, to: above(slots[to], 0.95) },
          { n: 'place', dur: 700, to: slots[to] },
          {
            n: 'release',
            dur: 350,
            to: slots[to],
            g: 1,
            after: () => {
              carrying = false
              current = to
              boxMesh.position.copy(slots[to])
            },
          },
          {
            n: 'retreat',
            dur: 800,
            to: above(slots[to], 0.95),
            after: () => {
              cycle++
              if (tcRef.current) tcRef.current.textContent = cycle
            },
          },
        ]
      }

      let plan = buildSequence()
      let si = 0
      let t0 = null
      const startPos = new THREE.Vector3(0, 0.95, 1.15)
      let startG = 1
      const pos = new THREE.Vector3(0, 0.95, 1.15)
      solveAndApplyIK(pos.x, pos.y, pos.z)

      let mx = 0
      let my = 0
      const onMouseMove = (e) => {
        if (!mount) return
        const r = mount.getBoundingClientRect()
        mx = (e.clientX - r.left) / r.width - 0.5
        my = (e.clientY - r.top) / r.height - 0.5
      }
      window.addEventListener('mousemove', onMouseMove)

      let failCount = 0
      let rendered = false

      function animate() {
        if (isDisposed) return
        animationFrameId = requestAnimationFrame(animate)

        try {
          if (!reduce) {
            const s = plan[si]
            const ts = performance.now()
            if (t0 === null) {
              t0 = ts
              startPos.copy(pos)
              startG = g
            }

            const k = Math.min(1, (ts - t0) / s.dur)
            const e = ease(k)

            if (s.to) {
              pos.lerpVectors(startPos, s.to, e)
            }
            if (s.g !== undefined) {
              g = startG + (s.g - startG) * e
            }

            if (stateRef.current) {
              stateRef.current.textContent = s.n.toUpperCase()
            }

            solveAndApplyIK(pos.x, pos.y, pos.z)
            root.updateMatrixWorld(true)

            // Gripper finger span: 0.15 is flush closed against 0.26 cube, 0.22 is wide open
            const gOpen = 0.15 + 0.07 * g
            fingerL.position.x = -gOpen
            fingerR.position.x = gOpen

            if (tgRef.current) {
              tgRef.current.textContent = g > 0.4 ? 'OPEN' : 'CLOSED'
            }

            // Box position: strictly follow TCP when carrying, or sit cleanly on current pad
            if (carrying) {
              const tcpPos = getTcpWorldPos()
              boxMesh.position.copy(tcpPos)
              boxMesh.rotation.y = root.rotation.y
            } else {
              boxMesh.position.copy(slots[current])
            }

            const tcpPos = getTcpWorldPos()
            trailPts.push(tcpPos.clone())
            if (trailPts.length > 40) trailPts.shift()
            if (trailPts.length >= 2) trailGeo.setFromPoints(trailPts)

            if (k >= 1) {
              if (s.after) s.after()
              si++
              if (si >= plan.length) {
                plan = buildSequence()
                si = 0
              }
              t0 = null
            }
          }

          camera.position.x = 3.1 + mx * 0.6
          camera.position.y = 2.4 - my * 0.4
          camera.lookAt(0, 0.9, 0)
          renderer.render(scene, camera)

          if (!rendered) {
            rendered = true
            if (fallbackRef.current) {
              fallbackRef.current.style.display = 'none'
            }
          }
        } catch (frameErr) {
          failCount++
          if (failCount === 1) console.warn('3D robot arm frame error:', frameErr)
          if (failCount > 5) {
            if (fallbackRef.current) {
              fallbackRef.current.style.display = 'flex'
              fallbackRef.current.textContent = '3D view unavailable on this browser'
            }
            if (renderer?.domElement) renderer.domElement.style.display = 'none'
          }
        }
      }

      animate()

      const onResize = () => {
        if (!mount) return
        const w = mount.clientWidth
        const h = mount.clientHeight
        if (!w || !h) return
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      return () => {
        isDisposed = true
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        if (renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
    } catch (err) {
      console.warn('3D robot arm failed to init:', err)
      if (fallbackRef.current) {
        fallbackRef.current.style.display = 'flex'
        fallbackRef.current.textContent = `3D setup error: ${err?.message || err}`
      }
    }
  }, [])

  return (
    <div className="robot" id="robotPanel">
      <div className="robot-top up">
        <span>// robot arm · live render</span>
        <span ref={stateRef} id="state">BOOTING</span>
      </div>
      <div className="robot-canvas-wrap" ref={mountRef}>
        <div ref={fallbackRef} className="robot-fallback">
          rendering requires WebGL —<br />view on a modern desktop browser
        </div>
      </div>
      <div className="telemetry up">
        <div><span>J1 </span><b ref={t1Ref} id="t1">0.0°</b></div>
        <div><span>J2 </span><b ref={t2Ref} id="t2">0.0°</b></div>
        <div><span>GRIP </span><b ref={tgRef} id="tg">OPEN</b></div>
        <div><span>CYCLE </span><b ref={tcRef} id="tc">0</b></div>
      </div>
    </div>
  )
}

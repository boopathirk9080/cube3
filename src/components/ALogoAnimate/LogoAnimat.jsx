// import React, { useRef, useEffect, useState } from 'react'
// import AWS_LOGO_URL from '../assets/logo/cube-events-logo.png'

// export default function Component() {
//     const canvasRef = useRef(null)
//     const mousePositionRef = useRef({ x: 0, y: 0 })
//     const isTouchingRef = useRef(false)
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const canvas = canvasRef.current
//         if (!canvas) return
//         const ctx = canvas.getContext('2d')
//         if (!ctx) return

//         // Preload AWS PNG
//         const awsImg = new Image()
//         awsImg.src = AWS_LOGO_URL

//         const updateCanvasSize = () => {
//             canvas.width = window.innerWidth
//             canvas.height = window.innerHeight
//             setIsMobile(window.innerWidth < 768)
//         }
//         updateCanvasSize()

//         let particles = []
//         let textImageData = null

//         function createTextImage() {
//             ctx.fillStyle = 'white'
//             ctx.save()

//             const logoHeight = isMobile ? 60 : 120
//             const vercelLogoWidth = logoHeight * (40 / 19.7762)
//             const awsLogoWidth = logoHeight * (283 / 140)
//             const logoSpacing = isMobile ? 30 : 60
//             const totalWidth = vercelLogoWidth + awsLogoWidth + logoSpacing

//             // Center logos
//             ctx.translate(
//                 canvas.width / 2 - totalWidth / 2,
//                 canvas.height / 2 - logoHeight / 2
//             )

//             // --- Vercel logo vector path ---
//             ctx.save()
//             const vercelScale = logoHeight / 19.7762
//             ctx.scale(vercelScale, vercelScale)
//             ctx.beginPath()
//             ctx.moveTo(23.3919, 0)
//             ctx.lineTo(32.9188, 0)
//             ctx.bezierCurveTo(36.7819, 0, 39.9136, 3.13165, 39.9136, 6.99475)
//             ctx.lineTo(39.9136, 16.0805)
//             ctx.lineTo(36.0006, 16.0805)
//             ctx.lineTo(36.0006, 6.99475)
//             ctx.bezierCurveTo(36.0006, 6.90167, 35.9969, 6.80925, 35.9898, 6.71766)
//             ctx.lineTo(26.4628, 16.079)
//             ctx.bezierCurveTo(26.4949, 16.08, 26.5272, 16.0805, 26.5595, 16.0805)
//             ctx.lineTo(36.0006, 16.0805)
//             ctx.lineTo(36.0006, 19.7762)
//             ctx.lineTo(26.5595, 19.7762)
//             ctx.bezierCurveTo(22.6964, 19.7762, 19.4788, 16.6139, 19.4788, 12.7508)
//             ctx.lineTo(19.4788, 3.68923)
//             ctx.lineTo(23.3919, 3.68923)
//             ctx.lineTo(23.3919, 12.7508)
//             ctx.bezierCurveTo(23.3919, 12.9253, 23.4054, 13.0977, 23.4316, 13.2668)
//             ctx.lineTo(33.1682, 3.6995)
//             ctx.bezierCurveTo(33.0861, 3.6927, 33.003, 3.68923, 32.9188, 3.68923)
//             ctx.lineTo(23.3919, 3.68923)
//             ctx.lineTo(23.3919, 0)
//             ctx.closePath()

//             ctx.moveTo(13.7688, 19.0956)
//             ctx.lineTo(0, 3.68759)
//             ctx.lineTo(5.53933, 3.68759)
//             ctx.lineTo(13.6231, 12.7337)
//             ctx.lineTo(13.6231, 3.68759)
//             ctx.lineTo(17.7535, 3.68759)
//             ctx.lineTo(17.7535, 17.5746)
//             ctx.bezierCurveTo(17.7535, 19.6705, 15.1654, 20.6584, 13.7688, 19.0956)
//             ctx.closePath()

//             ctx.fill()
//             ctx.restore()

//             // --- AWS logo PNG ---
//             ctx.save()
//             ctx.translate(vercelLogoWidth + logoSpacing, 0)
//             const awsScale = logoHeight / 140
//             ctx.scale(awsScale, awsScale)
//             ctx.drawImage(awsImg, 0, 0)
//             ctx.restore()

//             ctx.restore()

//             // Capture for particle mask
//             textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//             ctx.clearRect(0, 0, canvas.width, canvas.height)
//             return Math.max(vercelScale, awsScale)
//         }

//         function createParticle(scale) {
//             if (!textImageData) return null
//             const data = textImageData.data

//             for (let i = 0; i < 100; i++) {
//                 const x = Math.floor(Math.random() * canvas.width)
//                 const y = Math.floor(Math.random() * canvas.height)
//                 if (data[(y * canvas.width + x) * 4 + 3] > 128) {
//                     const logoHeight = isMobile ? 60 : 120
//                     const vercelLogoWidth = logoHeight * (40 / 19.7762)
//                     const awsLogoWidth = logoHeight * (283 / 140)
//                     const logoSpacing = isMobile ? 30 : 60
//                     const totalWidth = vercelLogoWidth + awsLogoWidth + logoSpacing
//                     const centerX = canvas.width / 2
//                     const isAWS = x >= centerX + (totalWidth / 2) - awsLogoWidth

//                     return {
//                         x, y,
//                         baseX: x, baseY: y,
//                         size: Math.random() + 0.5,
//                         color: 'white',
//                         scatteredColor: isAWS ? '#FF9900' : '#00DCFF',
//                         isAWS, life: Math.random() * 100 + 50
//                     }
//                 }
//             }
//             return null
//         }

//         function createInitialParticles(scale) {
//             const baseCount = 7000
//             const target = Math.floor(
//                 baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
//             )
//             for (let i = 0; i < target; i++) {
//                 const p = createParticle(scale)
//                 if (p) particles.push(p)
//             }
//         }

//         let animationFrameId
//         function animate(scale) {
//             ctx.clearRect(0, 0, canvas.width, canvas.height)
//             ctx.fillStyle = 'black'
//             ctx.fillRect(0, 0, canvas.width, canvas.height)

//             const { x: mx, y: my } = mousePositionRef.current
//             const maxDist = 240

//             particles.forEach((p, idx) => {
//                 const dx = mx - p.x, dy = my - p.y, dist = Math.hypot(dx, dy)
//                 if (dist < maxDist && (isTouchingRef.current || !('ontouchstart' in window))) {
//                     const force = (maxDist - dist) / maxDist
//                     const angle = Math.atan2(dy, dx)
//                     p.x = p.baseX - Math.cos(angle) * force * 60
//                     p.y = p.baseY - Math.sin(angle) * force * 60
//                     ctx.fillStyle = p.scatteredColor
//                 } else {
//                     p.x += (p.baseX - p.x) * 0.1
//                     p.y += (p.baseY - p.y) * 0.1
//                     ctx.fillStyle = 'white'
//                 }
//                 ctx.fillRect(p.x, p.y, p.size, p.size)
//                 p.life--
//                 if (p.life <= 0) {
//                     const np = createParticle(scale)
//                     if (np) particles[idx] = np
//                     else particles.splice(idx, 1)
//                 }
//             })

//             // refill
//             const baseCount = 7000
//             const target = Math.floor(
//                 baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
//             )
//             while (particles.length < target) {
//                 const np = createParticle(scale)
//                 if (np) particles.push(np)
//             }

//             animationFrameId = requestAnimationFrame(() => animate(scale))
//         }

//         // Start
//         const scale = createTextImage()
//         createInitialParticles(scale)
//         animate(scale)

//         // Handlers
//         const handleResize = () => { updateCanvasSize(); particles = []; const newScale = createTextImage(); createInitialParticles(newScale) }
//         const handleMouseMove = e => (mousePositionRef.current = { x: e.clientX, y: e.clientY })
//         const handleTouchMove = e => { e.preventDefault(); mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }
//         const handleTouchStart = () => (isTouchingRef.current = true)
//         const handleTouchEnd = () => { isTouchingRef.current = false; mousePositionRef.current = { x: 0, y: 0 } }
//         const handleMouseLeave = () => { if (!('ontouchstart' in window)) mousePositionRef.current = { x: 0, y: 0 } }

//         window.addEventListener('resize', handleResize)
//         canvas.addEventListener('mousemove', handleMouseMove)
//         canvas.addEventListener('mouseleave', handleMouseLeave)
//         canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
//         canvas.addEventListener('touchstart', handleTouchStart)
//         canvas.addEventListener('touchend', handleTouchEnd)

//         return () => {
//             window.removeEventListener('resize', handleResize)
//             canvas.removeEventListener('mousemove', handleMouseMove)
//             canvas.removeEventListener('mouseleave', handleMouseLeave)
//             canvas.removeEventListener('touchmove', handleTouchMove)
//             canvas.removeEventListener('touchstart', handleTouchStart)
//             canvas.removeEventListener('touchend', handleTouchEnd)
//             cancelAnimationFrame(animationFrameId)
//         }
//     }, [isMobile])

//     return (
//         <div className="relative w-full h-dvh flex items-center justify-center bg-black">
//             <canvas
//                 ref={canvasRef}
//                 className="w-full h-full absolute top-0 left-0 touch-none"
//                 aria-label="Interactive particle effect with Vercel and AWS logos"
//             />
//             <div className="absolute bottom-[100px] text-center z-10">
//                 <p className="font-mono text-gray-400 text-xs sm:text-base md:text-sm">
//                     Join the{' '}
//                     <a
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="invite-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                         v0 Happy Hour
//                     </a>{' '}
//                     <span>at</span>
//                     <span className="transition-colors duration-300"> aws re:invent</span>
//                     <br />
//                     <a

//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-500 text-xs mt-2.5 inline-block"
//                     >
//                         (fork this v0)
//                     </a>
//                 </p>
//                 <style>{`
//           a.invite-link:hover + span + span {
//             color: #FF9900;
//           }
//         `}</style>
//             </div>
//         </div>
//     )
// }












// import React, { useRef, useEffect, useState } from 'react'
// import AWS_LOGO_PATH from '../assets/logo/cube-events-logo.png'

// export default function Component() {
//     const canvasRef = useRef(null)
//     const mousePositionRef = useRef({ x: 0, y: 0 })
//     const isTouchingRef = useRef(false)
//     const [isMobile, setIsMobile] = useState(false)
//     const awsImageRef = useRef(null)

//     // Preload AWS logo image
//     useEffect(() => {
//         const img = new Image()
//         img.src = AWS_LOGO_PATH
//         awsImageRef.current = img
//     }, [])

//     useEffect(() => {
//         const canvas = canvasRef.current
//         if (!canvas) return

//         const ctx = canvas.getContext('2d')
//         if (!ctx) return

//         const updateCanvasSize = () => {
//             canvas.width = window.innerWidth
//             canvas.height = window.innerHeight
//             setIsMobile(window.innerWidth < 768)
//         }

//         updateCanvasSize()

//         let particles = []
//         let textImageData = null
//         let animationFrameId

//         function createTextImage() {
//             ctx.fillStyle = 'white'
//             ctx.save()

//             const logoHeight = isMobile ? 60 : 120
//             const vercelLogoWidth = logoHeight * (40 / 19.7762)
//             const awsLogoWidth = logoHeight * (283 / 140)
//             const logoSpacing = isMobile ? 30 : 60
//             const totalWidth = vercelLogoWidth + awsLogoWidth + logoSpacing

//             ctx.translate(
//                 canvas.width / 2 - totalWidth / 2,
//                 canvas.height / 2 - logoHeight / 2
//             )

//             // Vercel logo
//             ctx.save()
//             const vercelScale = logoHeight / 19.7762
//             ctx.scale(vercelScale, vercelScale)
//             ctx.beginPath()
//             ctx.moveTo(23.3919, 0)
//             ctx.lineTo(32.9188, 0)
//             ctx.bezierCurveTo(36.7819, 0, 39.9136, 3.13165, 39.9136, 6.99475)
//             ctx.lineTo(39.9136, 16.0805)
//             ctx.lineTo(36.0006, 16.0805)
//             ctx.lineTo(36.0006, 6.99475)
//             ctx.bezierCurveTo(36.0006, 6.90167, 35.9969, 6.80925, 35.9898, 6.71766)
//             ctx.lineTo(26.4628, 16.079)
//             ctx.bezierCurveTo(26.4949, 16.08, 26.5272, 16.0805, 26.5595, 16.0805)
//             ctx.lineTo(36.0006, 16.0805)
//             ctx.lineTo(36.0006, 19.7762)
//             ctx.lineTo(26.5595, 19.7762)
//             ctx.bezierCurveTo(22.6964, 19.7762, 19.4788, 16.6139, 19.4788, 12.7508)
//             ctx.lineTo(19.4788, 3.68923)
//             ctx.lineTo(23.3919, 3.68923)
//             ctx.lineTo(23.3919, 12.7508)
//             ctx.bezierCurveTo(23.3919, 12.9253, 23.4054, 13.0977, 23.4316, 13.2668)
//             ctx.lineTo(33.1682, 3.6995)
//             ctx.bezierCurveTo(33.0861, 3.6927, 33.003, 3.68923, 32.9188, 3.68923)
//             ctx.lineTo(23.3919, 3.68923)
//             ctx.lineTo(23.3919, 0)
//             ctx.closePath()

//             ctx.moveTo(13.7688, 19.0956)
//             ctx.lineTo(0, 3.68759)
//             ctx.lineTo(5.53933, 3.68759)
//             ctx.lineTo(13.6231, 12.7337)
//             ctx.lineTo(13.6231, 3.68759)
//             ctx.lineTo(17.7535, 3.68759)
//             ctx.lineTo(17.7535, 17.5746)
//             ctx.bezierCurveTo(17.7535, 19.6705, 15.1654, 20.6584, 13.7688, 19.0956)
//             ctx.closePath()

//             ctx.fill()
//             ctx.restore()

//             // AWS logo - FIXED: Use image instead of Path2D
//             ctx.save()
//             ctx.translate(vercelLogoWidth + logoSpacing, 0)
//             const awsScale = logoHeight / 140

//             // Draw image if loaded
//             if (awsImageRef.current && awsImageRef.current.complete) {
//                 ctx.drawImage(
//                     awsImageRef.current,
//                     0,
//                     0,
//                     awsImageRef.current.naturalWidth * awsScale,
//                     awsImageRef.current.naturalHeight * awsScale
//                 )
//             }
//             ctx.restore()

//             ctx.restore()

//             textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//             ctx.clearRect(0, 0, canvas.width, canvas.height)

//             return Math.max(vercelScale, awsScale)
//         }

//         function createParticle(scale) {
//             if (!textImageData) return null
//             const data = textImageData.data

//             for (let i = 0; i < 100; i++) {
//                 const x = Math.floor(Math.random() * canvas.width)
//                 const y = Math.floor(Math.random() * canvas.height)
//                 if (data[(y * canvas.width + x) * 4 + 3] > 128) {
//                     const logoHeight = isMobile ? 60 : 120
//                     const vercelLogoWidth = logoHeight * (40 / 19.7762)
//                     const awsLogoWidth = logoHeight * (283 / 140)
//                     const logoSpacing = isMobile ? 30 : 60
//                     const totalWidth = vercelLogoWidth + awsLogoWidth + logoSpacing
//                     const centerX = canvas.width / 2
//                     const isAWS = x >= centerX + totalWidth / 2 - awsLogoWidth

//                     return {
//                         x,
//                         y,
//                         baseX: x,
//                         baseY: y,
//                         size: Math.random() * 1 + 0.5,
//                         color: 'white',
//                         scatteredColor: isAWS ? '#FF9900' : '#00DCFF',
//                         isAWS,
//                         life: Math.random() * 100 + 50
//                     }
//                 }
//             }
//             return null
//         }

//         function createInitialParticles(scale) {
//             const baseCount = 7000
//             const target = Math.floor(
//                 baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
//             )
//             for (let i = 0; i < target; i++) {
//                 const p = createParticle(scale)
//                 if (p) particles.push(p)
//             }
//         }

//         function animate(scale) {
//             if (!ctx) return

//             ctx.clearRect(0, 0, canvas.width, canvas.height)
//             ctx.fillStyle = 'black'
//             ctx.fillRect(0, 0, canvas.width, canvas.height)

//             const { x: mx, y: my } = mousePositionRef.current
//             const maxDist = 240

//             for (let i = 0; i < particles.length; i++) {
//                 const p = particles[i]
//                 const dx = mx - p.x
//                 const dy = my - p.y
//                 const dist = Math.sqrt(dx * dx + dy * dy)

//                 if (dist < maxDist && (isTouchingRef.current || !('ontouchstart' in window))) {
//                     const force = (maxDist - dist) / maxDist
//                     const angle = Math.atan2(dy, dx)
//                     p.x = p.baseX - Math.cos(angle) * force * 60
//                     p.y = p.baseY - Math.sin(angle) * force * 60
//                     ctx.fillStyle = p.scatteredColor
//                 } else {
//                     p.x += (p.baseX - p.x) * 0.1
//                     p.y += (p.baseY - p.y) * 0.1
//                     ctx.fillStyle = 'white'
//                 }

//                 ctx.fillRect(p.x, p.y, p.size, p.size)
//                 p.life--
//                 if (p.life <= 0) {
//                     const np = createParticle(scale)
//                     if (np) particles[i] = np
//                     else {
//                         particles.splice(i, 1)
//                         i--
//                     }
//                 }
//             }

//             // refill to target
//             const baseCount = 7000
//             const target = Math.floor(
//                 baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
//             )
//             while (particles.length < target) {
//                 const np = createParticle(scale)
//                 if (np) particles.push(np)
//             }

//             animationFrameId = requestAnimationFrame(() => animate(scale))
//         }

//         // kick off
//         const scale = createTextImage()
//         createInitialParticles(scale)
//         animate(scale)

//         // handlers
//         const handleResize = () => {
//             updateCanvasSize()
//             particles = []
//             const newScale = createTextImage()
//             createInitialParticles(newScale)
//         }
//         const handleMouseMove = e =>
//             (mousePositionRef.current = { x: e.clientX, y: e.clientY })
//         const handleTouchMove = e => {
//             e.preventDefault()
//             mousePositionRef.current = {
//                 x: e.touches[0].clientX,
//                 y: e.touches[0].clientY
//             }
//         }
//         const handleTouchStart = () => (isTouchingRef.current = true)
//         const handleTouchEnd = () => {
//             isTouchingRef.current = false
//             mousePositionRef.current = { x: 0, y: 0 }
//         }
//         const handleMouseLeave = () => {
//             if (!('ontouchstart' in window)) {
//                 mousePositionRef.current = { x: 0, y: 0 }
//             }
//         }

//         window.addEventListener('resize', handleResize)
//         canvas.addEventListener('mousemove', handleMouseMove)
//         canvas.addEventListener('mouseleave', handleMouseLeave)
//         canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
//         canvas.addEventListener('touchstart', handleTouchStart)
//         canvas.addEventListener('touchend', handleTouchEnd)

//         return () => {
//             window.removeEventListener('resize', handleResize)
//             canvas.removeEventListener('mousemove', handleMouseMove)
//             canvas.removeEventListener('mouseleave', handleMouseLeave)
//             canvas.removeEventListener('touchmove', handleTouchMove)
//             canvas.removeEventListener('touchstart', handleTouchStart)
//             canvas.removeEventListener('touchend', handleTouchEnd)
//             cancelAnimationFrame(animationFrameId)
//         }
//     }, [isMobile])

//     return (
//         <div className="relative w-full h-dvh flex items-center justify-center bg-black">
//             <canvas
//                 ref={canvasRef}
//                 className="w-full h-full absolute top-0 left-0 touch-none"
//                 aria-label="Interactive particle effect with Vercel and AWS logos"
//             />
//             <div className="absolute bottom-[100px] text-center z-10">
//                 <p className="font-mono text-gray-400 text-xs sm:text-base md:text-sm">
//                     Join the{' '}
//                     <a
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="invite-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                         v0 Happy Hour
//                     </a>{' '}
//                     <span>at</span>
//                     <span className="transition-colors duration-300"> aws re:invent</span>
//                     <br />
//                     <a
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-500 text-xs mt-2.5 inline-block"
//                     >
//                         (fork this v0)
//                     </a>
//                 </p>
//                 <style>{`
//           a.invite-link:hover + span + span {
//             color: #FF9900;
//           }
//         `}</style>
//             </div>
//         </div>
//     )
// }


















import React, { useRef, useEffect, useState } from 'react'
import LOGO_URL from '../assets/logo/cube-events-logo.png'

export default function Component() {
  const canvasRef = useRef(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // preload your logo
    const logoImg = new Image()
    logoImg.src = LOGO_URL

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768)
    }
    updateCanvasSize()

    let particles = []
    let textImageData = null

    function createTextImage() {
      if (!logoImg.complete) {
        // if image not yet loaded, try again next frame
        requestAnimationFrame(createTextImage)
        return 1
      }

      ctx.fillStyle = 'white'
      ctx.save()

      // compute dimensions
      const logoHeight = isMobile ? 60 : 120
      const aspect = logoImg.naturalWidth / logoImg.naturalHeight
      const logoWidth = logoHeight * aspect

      // center logo
      ctx.translate(
        canvas.width  / 2 - logoWidth  / 2,
        canvas.height / 2 - logoHeight / 2
      )

      // draw your PNG logo
      ctx.drawImage(logoImg, 0, 0, logoWidth, logoHeight)

      ctx.restore()

      // capture for particles
      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return logoHeight / logoImg.naturalHeight
    }

    function createParticle(scale) {
      if (!textImageData) return null
      const data = textImageData.data
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width | 0
        const y = Math.random() * canvas.height | 0
        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          return {
            x, y,
            baseX: x, baseY: y,
            size: Math.random() + 0.5,
            scatteredColor: '#00DCFF',
            life: Math.random() * 100 + 50
          }
        }
      }
      return null
    }

    function createInitialParticles(scale) {
      const baseCount = 7000
      const target = Math.floor(
        baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      )
      for (let i = 0; i < target; i++) {
        const p = createParticle(scale)
        if (p) particles.push(p)
      }
    }

    let animationFrameId
    function animate(scale) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mx, y: my } = mousePositionRef.current
      const maxDist = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.hypot(dx, dy)

        if (dist < maxDist && (isTouchingRef.current || !('ontouchstart' in window))) {
          const force = (maxDist - dist) / maxDist
          const angle = Math.atan2(dy, dx)
          p.x = p.baseX - Math.cos(angle) * force * 60
          p.y = p.baseY - Math.sin(angle) * force * 60
          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = 'white'
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)
        p.life--
        if (p.life <= 0) {
          const np = createParticle(scale)
          if (np) particles[i] = np
          else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      // refill
      const baseCount = 7000
      const target = Math.floor(
        baseCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      )
      while (particles.length < target) {
        const np = createParticle(scale)
        if (np) particles.push(np)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    // start everything
    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    // event handlers
    const handleResize     = () => { updateCanvasSize(); particles = []; const newScale = createTextImage(); createInitialParticles(newScale) }
    const handleMouseMove  = e => mousePositionRef.current = { x: e.clientX, y: e.clientY }
    const handleTouchMove  = e => { e.preventDefault(); mousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }
    const handleTouchStart = () => isTouchingRef.current = true
    const handleTouchEnd   = () => { isTouchingRef.current = false; mousePositionRef.current = { x: 0, y: 0 } }
    const handleMouseLeave = () => { if (!('ontouchstart' in window)) mousePositionRef.current = { x: 0, y: 0 } }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-dvh flex items-center justify-center bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 touch-none"
        aria-label="Interactive particle effect with your logo"
      />
      <div className="absolute bottom-[100px] text-center z-10">
        <p className="font-mono text-gray-400 text-xs sm:text-base md:text-sm">
          Join the{' '}
          <a
            href="https://your.link/here"
            target="_blank"
            rel="noopener noreferrer"
            className="invite-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Your Event
          </a>{' '}
          <span>today!</span>
          <br />
          <a
            href="https://another.link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-xs mt-2.5 inline-block"
          >
            (learn more)
          </a>
        </p>
        <style>{`
          a.invite-link:hover + span {
            color: #FF9900;
          }
        `}</style>
      </div>
    </div>
  )
}

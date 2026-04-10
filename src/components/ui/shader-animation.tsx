import { useEffect, useRef } from "react"
import * as THREE from "three"
import { motion } from "framer-motion"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-dark">
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      {/* Premium Pistachio Centerpiece - Awwwards Aesthetic */}
      <motion.div
        animate={{ 
          y: [-15, 15, -15],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="z-10 relative pointer-events-none drop-shadow-[0_0_30px_rgba(68,110,81,0.5)]"
      >
        <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-150" />
        
        <svg 
          width="240" 
          height="240" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-2xl overflow-visible"
        >
          <defs>
            <linearGradient id="nutGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c5e1a5" /> {/* Light bright green top */}
              <stop offset="1" stopColor="#81c784" /> {/* Darker green bottom */}
            </linearGradient>
            
            <linearGradient id="shellGradL" x1="10" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5e6ce" />
              <stop offset="1" stopColor="#e0c7a3" />
            </linearGradient>

            <linearGradient id="shellGradR" x1="90" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5e6ce" />
              <stop offset="1" stopColor="#e0c7a3" />
            </linearGradient>
          </defs>

          {/* Central Green Nut */}
          <path 
            d="M 50 85 C 38 60, 35 25, 42 12 C 46 5, 54 5, 58 12 C 65 25, 62 60, 50 85 Z" 
            fill="url(#nutGrad)" 
          />
          
          {/* Left Shell (Animates Open) */}
          <motion.g
            animate={{ rotate: [-2, -15, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "50px", originY: "85px" }}
          >
            <path 
              d="M 50 86 C 20 80, 2 50, 12 22 C 18 8, 35 2, 45 12 C 30 35, 28 65, 50 86 Z" 
              fill="url(#shellGradL)" 
              stroke="#d5b992"
              strokeWidth="0.5"
            />
          </motion.g>

          {/* Right Shell (Animates Open) */}
          <motion.g
            animate={{ rotate: [2, 15, 2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "50px", originY: "85px" }}
          >
            <path 
              d="M 50 86 C 80 80, 98 50, 88 22 C 82 8, 65 2, 55 12 C 70 35, 72 65, 50 86 Z" 
              fill="url(#shellGradR)" 
              stroke="#d5b992"
              strokeWidth="0.5"
            />
          </motion.g>

        </svg>
      </motion.div>
    </div>
  )
}

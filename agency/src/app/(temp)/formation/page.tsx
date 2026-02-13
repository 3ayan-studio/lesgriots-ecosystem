'use client' // 👈 Mandatory for interactivity

import { useState, useRef, useEffect } from 'react'

export default function TempPage() {
    return (
        <main className="min-h-screen bg-black text-white p-12 md:p-24 font-sans">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* LEFT COLUMN: Logic (Accordion) */}
                <section>
                    <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-500 mb-8 uppercase">
                        State (Logic)
                    </h2>
                    <div className="flex flex-col border-t border-white/10">
                        <AccordionItem
                            title="State Memory"
                            text="The useState hook allows this component to 'remember' if it is open or closed."
                        />
                        <AccordionItem
                            title="Client vs Server"
                            text="This whole page is a Client Component because we used 'use client' at the top."
                        />
                    </div>
                </section>

                {/* RIGHT COLUMN: Physics (Tilt) */}
                <section>
                    <h2 className="text-xs font-bold tracking-[0.2em] text-neutral-500 mb-8 uppercase">
                        Effects (Physics)
                    </h2>
                    <TiltCard />
                </section>

            </div>
        </main>
    )
}

// --- SUB-COMPONENT 1: ACCORDION ---
function AccordionItem({ title, text }: { title: string, text: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-400 transition-colors group"
            >
                <span className="text-xl font-light group-hover:pl-2 transition-all">{title}</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-neutral-400 leading-relaxed max-w-md">
                    {text}
                </p>
            </div>
        </div>
    )
}

// --- SUB-COMPONENT 2: TILT CARD ---
function TiltCard() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = ref.current
        if (!card) return

        const handleMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            // Calculate rotation
            const rotateX = (y / -15).toFixed(2)
            const rotateY = (x / 15).toFixed(2)

            card.style.setProperty('--rx', `${rotateX}deg`)
            card.style.setProperty('--ry', `${rotateY}deg`)
        }

        const handleLeave = () => {
            card.style.setProperty('--rx', `0deg`)
            card.style.setProperty('--ry', `0deg`)
        }

        card.addEventListener('mousemove', handleMove)
        card.addEventListener('mouseleave', handleLeave)

        return () => {
            card.removeEventListener('mousemove', handleMove)
            card.removeEventListener('mouseleave', handleLeave)
        }
    }, [])

    return (
        <div className="perspective-1000 w-full h-96 flex items-center justify-center">
            <div
                ref={ref}
                className="
                relative w-full h-full bg-neutral-900 rounded-xl border border-white/10
                flex items-center justify-center overflow-hidden shadow-2xl
                transition-transform duration-75 ease-linear
                "
                style={{
                    transform: 'rotateX(var(--rx)) rotateY(var(--ry))',
                    transformStyle: 'preserve-3d'
                }}
            >
                <div className="text-center transform translate-z-20 pointer-events-none" style={{ transform: 'translateZ(50px)' }}>
                    <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-6 blur-3xl opacity-40"></div>
                    <h3 className="text-3xl font-bold">3D Hover</h3>
                </div>
            </div>
        </div>
    )
}
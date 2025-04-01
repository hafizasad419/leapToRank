import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TickerLoop({ cards }) {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);
    const controls = useAnimationControls();
    
    // We need to measure the total width to create proper animation
    useEffect(() => {
        if (!containerRef.current) return;
        
        // Get the total width of all cards including spacing
        const calculateWidth = () => {
            if (!containerRef.current) return;
            const totalWidth = containerRef.current.scrollWidth;
            const viewportWidth = containerRef.current.offsetWidth;
            setWidth(totalWidth);
            
            // Animate from 0 to negative of the first set of cards
            // This creates a seamless loop by moving exactly one set of cards left
            controls.start({
                x: [0, -totalWidth / 2],
                transition: {
                    duration: 60, // Much slower for better visibility
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        };
        
        calculateWidth();
        
        // Recalculate on resize
        window.addEventListener("resize", calculateWidth);
        return () => window.removeEventListener("resize", calculateWidth);
    }, [controls, cards]);

    return (
        <div className="overflow-hidden w-full py-8 bg-c-blue">
            <motion.div
                ref={containerRef}
                className="flex space-x-6 w-max"
                animate={controls}
            >
                {/* First set of cards */}
                {cards.map((card, index) => (
                    <div 
                        key={`first-${index}`} 
                        className="bg-white shadow-xl rounded-3xl p-6 w-[80vw] lg:w-[50vw] px-8 py-20 space-y-8 text-center flex-shrink-0"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-c-orange">{card.title}</h2>
                        <p className="text-gray-700 mt-2">
                            {card.description}
                        </p>
                    </div>
                ))}
                
                {/* Second set of identical cards to create the loop effect */}
                {cards.map((card, index) => (
                    <div 
                        key={`second-${index}`} 
                        className="bg-white shadow-2xl rounded-3xl p-6 w-[80vw] lg:w-[50vw] px-8 py-20 space-y-8 text-center flex-shrink-0"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-c-orange">{card.title}</h2>
                        <p className="text-gray-700 mt-2">
                            {card.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
import { motion } from "motion/react"

interface FloatingShapeProps{
    color: string,
    size: string,
    top: string,
    left: string,
    delay: number
}

export const FloatingShape =({color, size, top, left, delay}: FloatingShapeProps)=>{
    return(
        <motion.div style={{top, left}} className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`} animate={{x: ["0%", "100%", "100%"], y: ["0%", "100%", "100%"], rotate: [0, 360]}} transition={{duration: 20, ease: "linear", repeat: Infinity, delay}} aria-hidden="true"></motion.div>
    )
}
import "./parallax.scss"
import { useRef } from "react"
import { motion, useScroll } from "framer-motion"

const Parallax = ({ type }) => {
    const { scrollYProgress } = useScroll({
    })

    return (
        <div
            className="parallax"
            style={{
                background: type === "services"
                    ? "linear-gradient(180deg,#111132,#0c0c1d)"
                    : "linear-gradient(180deg,#111132,#505064)"
            }}
        >
            <motion.h1>
                {type === "services" ? "What We Do?" : "What We Did?"}
            </motion.h1>

            <motion.div className="mountains"></motion.div>
            <motion.div className="planets"></motion.div>
            <motion.div className="stars"></motion.div>
        </div>
    )
}

export default Parallax
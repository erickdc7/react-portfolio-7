import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                >
                    <h2>HARVEY TYLER</h2>
                    <h1>Web developer and UI designer</h1>

                    <div className="buttons">
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </div>

                    <img src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <div className="slidingTextContainer">
                Writer Content Creator Influencer
            </div>

            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
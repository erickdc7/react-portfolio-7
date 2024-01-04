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
                    <motion.h2 variants={textVariants}>
                        HARVEY TYLER
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web developer and UI designer
                    </motion.h1>

                    <motion.div
                        className="buttons"
                        variants={textVariants}
                    >
                        <motion.button>See the Latest Works</motion.button>
                        <button>Contact Me</button>
                    </motion.div>

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
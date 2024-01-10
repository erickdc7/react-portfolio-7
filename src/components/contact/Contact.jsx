import "./contact.scss"
import { motion } from "framer-motion"

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {
    return (
        <motion.div className="contact" variants={variants}>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
                <motion.div className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Address</h2>
                    <span>123 Hello Street New York</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Phone</h2>
                    <span>+1 234 5678</span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message" />
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact
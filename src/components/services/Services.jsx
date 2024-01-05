import "./services.scss"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer">
                <div className="title"></div>
            </motion.div>

            <motion.div className="listContainer"></motion.div>
        </motion.div>
    )
}

export default Services
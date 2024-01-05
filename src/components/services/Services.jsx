import "./services.scss"
import { motion } from "framer-motion"

const Services = () => {
    return (
        <motion.div className="services">
            <div className="textContainer">
                <p>
                    I focus on helping your brand grow <br />
                    and move forward
                </p>
                <hr />
            </div>

            <div className="titleContainer"></div>

            <div className="listContainer"></div>
        </motion.div>
    )
}

export default Services
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
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>

                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>For your</b> Business
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer"></motion.div>
        </motion.div>
    )
}

export default Services
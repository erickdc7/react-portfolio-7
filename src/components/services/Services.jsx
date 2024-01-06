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
                    <h1>
                        <b>For your</b> Business
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer">
                <motion.div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui odit alias asperiores quibusdam totam consequuntur? Nesciunt velit iste at!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias molestiae assumenda deserunt consectetur. Tempora maiores maxime voluptatem suscipit ea.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas delectus quo doloribus. Animi explicabo dicta expedita cupiditate rerum sequi sit.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non ipsam et nihil esse natus, voluptas voluptatem dicta ducimus! Officiis.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
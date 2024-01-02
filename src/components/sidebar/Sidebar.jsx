import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton"
import { motion } from "framer-motion"

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return (
        <motion.div className="sidebar">
            <div className="bg">
                <Links />
            </div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar
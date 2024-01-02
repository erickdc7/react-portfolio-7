import { useState } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton"

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="sidebar">
            <div className="bg">
                <Links />
            </div>
            <ToggleButton />
        </div>
    )
}

export default Sidebar
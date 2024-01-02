import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="bg">
                Links
            </div>
            <ToggleButton />
        </div>
    )
}

export default Sidebar
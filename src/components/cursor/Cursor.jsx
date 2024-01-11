import "./cursor.scss"
import { useState, useEffect } from "react"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    return (
        <div className="cursor"></div>
    )
}

export default Cursor
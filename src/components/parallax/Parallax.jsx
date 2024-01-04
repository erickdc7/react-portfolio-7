import "./parallax.scss"

const Parallax = ({ type }) => {
    return (
        <div className="parallax">
            <h1>
                {type === "services" ? "What We Do?" : "What We Did?"}
            </h1>
        </div>
    )
}

export default Parallax
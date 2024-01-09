import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let&apos;s work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Hello Street New York</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+1 234 5678</span>
                </div>
            </div>

            <div className="formContainer">
                <form>
                    <input type="text" placeholder="Name" />
                </form>
            </div>
        </div>
    )
}

export default Contact
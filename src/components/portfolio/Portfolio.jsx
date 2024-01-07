import "./portfolio.scss"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/2181230/pexels-photo-2181230.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium perferendis quasi labore cum quia officiis dolor, assumenda atque ipsa!",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/599650/pexels-photo-599650.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium perferendis quasi labore cum quia officiis dolor, assumenda atque ipsa!",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/2262628/pexels-photo-2262628.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium perferendis quasi labore cum quia officiis dolor, assumenda atque ipsa!",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/1926701/pexels-photo-1926701.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam accusantium perferendis quasi labore cum quia officiis dolor, assumenda atque ipsa!",
    },
]

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Featured Works</h1>
            </div>
            {
                items.map(item => (
                    <Single item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Portfolio
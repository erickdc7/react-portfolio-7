import { motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggeredChildren: 0.1
        }
    },
    close: {
        transition: {
            staggeredChildren: 0.05,
            staggeredDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    close: {
        y: 50,
        opacity: 0,
    }
}

const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]

    return (
        <motion.div
            className="links"
            variants={variants}
        >
            {
                items.map(item => (
                    <motion.a href={`#${item}`} key={item}>
                        {item}
                    </motion.a>
                ))
            }
        </motion.div>
    )
}

export default Links
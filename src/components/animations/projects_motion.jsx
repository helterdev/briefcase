import { motion } from "framer-motion";
const Projects_Div = ({children}) => {
    return (
        <motion.div
        whileHover={{scale: 1.2}}>
            {children}
        </motion.div>
    )
}

export default Projects_Div;
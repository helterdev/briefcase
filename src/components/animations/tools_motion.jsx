import { motion } from "framer-motion";
const ToolsMotion = ({children}) => {
    return (
        <motion.li
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.9 }}
        className="tools-motion"
        >
            {children}
        </motion.li>
    )
}

export default ToolsMotion;
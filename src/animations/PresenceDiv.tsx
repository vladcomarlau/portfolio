import { motion } from "motion/react"

export default function PresenceDiv(props: any) {
    //key, 
    return (
        <motion.div className="lg:flex absolute" key={props.key}
            initial={{ x: -20, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ x: 20, opacity: 0, filter: "blur(20px)" }}
            transition={{ type: "spring", duration: 1 }}>
            {props.children}
        </motion.div>
    )
}
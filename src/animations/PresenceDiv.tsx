import { motion } from "motion/react"

export default function PresenceDiv(props: any) {
    //key, 
    return (
        <motion.div className="absolute w-full" key={props.key}
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{  opacity: 0, filter: "blur(20px)" }}
            transition={{ type: "spring", duration: 0.5 }}>
            {props.children}
        </motion.div>
    )
}
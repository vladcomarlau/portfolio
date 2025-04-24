import { motion } from "motion/react"

export default function PresenceDivSlide(props: any) {
    //key, 
    return (
        <motion.div className="absolute w-full" key={props.key}
            initial={{ y: 200, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: -200, opacity: 0}}
            transition={{ type: "spring", duration: 0.5 }}>
            {props.children}
        </motion.div>
    )
}
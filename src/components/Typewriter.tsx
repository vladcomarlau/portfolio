import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";

export const sentenceVariants: Variants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
};

export const letterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export interface TypewriterProps extends MotionProps {
    text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, ...rest }) => (
    <motion.p
        key={text}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        {...rest}
    >
        {text.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letterVariants}>
                {char}
            </motion.span>
        ))}
    </motion.p>
);

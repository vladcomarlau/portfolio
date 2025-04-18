import { motion } from "motion/react"

const Title = () => {
  return (
    <>
      <motion.div 
        initial={{y:-100, scale: 0.8, opacity: 0 }} 
        whileInView={{y:0, scale: 1.0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}>
        <div
          className="font-custom italic text-6xl md:text-8xl p-3 font-extrabold 
          rounded-box rounded-b-none text-shadow-md text-base-100
          md:mx-20 mx-5">
          VLAD-CONSTANTIN
          <div>
            COMARLAU
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Title

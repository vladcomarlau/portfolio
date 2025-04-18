import { motion } from "motion/react"

const Title = () => {
  return (
    <>
      <motion.div 
        initial={{y:-100, scale: 0.8, opacity: 0 }} 
        whileInView={{y:0, scale: 1.0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        style={{marginTop:"-40px"}}>
        <div
          className="font-gothic italic text-6xl md:text-8xl p-3 font-extrabold 
          rounded-box rounded-b-none text-shadow-md text-base-100
          md:mx-20 mx-5 mt-10">
          Vlad-Constantin
          <div>
            Comarlau
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Title

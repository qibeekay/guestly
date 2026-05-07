import { motion, type Variants } from "framer-motion";
import Button from "../props/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative max-w-360 mx-auto flex items-center overflow-hidden font-dm">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-32 w-96 h-96 bg-[#D4FF00]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#D4FF00]/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-209.25 px-4 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-[82.09px] text-white lg:leading-22.5 tracking-[-1.4px] font-medium"
          >
            Discover events that move your city, career, and community.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-[#EEEEEE] leading-[150%] sm:tracking-[0.18px]"
          >
            From sold-out concerts and creator meetups to business summits and
            weekend experiences, Guestly helps you find what matters—or host
            something people remember.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.div
              className="w-full sm:w-51.25"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button>Find Event Near You</Button>
            </motion.div>

            <motion.div
              className="w-full sm:w-51.25"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="white">Start Hosting</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

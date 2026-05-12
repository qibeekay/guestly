import React from "react";
import { motion, type Variants } from "framer-motion";

interface VendorFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface SectionProps {
  features: VendorFeature[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Sections({ features }: SectionProps) {
  return (
    <section className="bg-white">
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              {/* Icon Circle */}
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#e7e7e7] flex items-center justify-center mb-6 transition-colors duration-300"
              >
                <feature.icon className="text-dark transition-colors duration-300 w-6 h-6 sm:w-12 sm:h-12" />
              </motion.div>

              <h3 className="text-xl sm:text-3xl font-medium text-dark mb-3 leading-[100%] tracking-[-1px]">
                {feature.title}
              </h3>
              <p className="text-dark text-sm sm:text-[18px] leading-[150%]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

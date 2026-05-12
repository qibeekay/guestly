import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Heading from "../props/Heading";
import { getImageSrc } from "../../utils/imageUtils";
import { cities } from "../../utils/constant";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function CityCard({ city }: { city: (typeof cities)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  const imageScale = useTransform(mouseYSpring, [-0.5, 0.5], [1.08, 1.02]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      <div className="relative h-47 sm:h-85.5 rounded-xl overflow-hidden">
        {/* Background Image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: imageScale,
            translateZ: "40px",
          }}
        >
          <img
            src={getImageSrc(city.image)}
            alt={city.name}
            className="w-full h-full object-cover object-bottom "
          />
        </motion.div>

        {/* Gradient Overlay - Always visible */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Lime glow on hover */}
        <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/5 transition-colors duration-500" />

        {/* Top Right Arrow - 3D float */}
        <div
          className="absolute top-4 right-4 z-10"
          style={{ transform: "translateZ('80px')" }}
        >
          <div
            className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-sm
                       flex items-center justify-center
                       opacity-0 translate-x-2 -translate-y-2 scale-75
                       group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100
                       group-hover:border-lime group-hover:bg-lime/20
                       transition-all duration-500 ease-out"
          >
            <ArrowUpRight
              size={20}
              className="text-white group-hover:text-lime transition-colors"
            />
          </div>
        </div>
      </div>

      {/* text below */}
      <div className="mt-4 transform transition-transform duration-300 group-hover:translate-y-1">
        <h3 className="text-xl sm:text-[24px] font-medium text-dark group-hover:text-lime transition-colors duration-300 tracking-[-1px]">
          {city.name}
        </h3>
        <p className="mt-1 text-sm sm:text-base leading-[25.2px] text-dark">
          {city.tagline}
        </p>
      </div>
    </motion.div>
  );
}

export function BrowseByCity() {
  return (
    <section className="py-20 font-dm">
      <div className="mx-auto max-w-360 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Heading
            title="Browse by City"
            desc="Discover what's happening in your neighborhood"
          />
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ perspective: "1000px" }}
        >
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

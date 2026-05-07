import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Button from "../props/Button";
import { ArrowRightIcon, CalendarIcon, LocationIcon } from "../../utils/icons";
import { events } from "../../utils/constant";
import Heading from "../props/Heading";
import { getImageSrc } from "../../utils/imageUtils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function EventCard({ event }: { event: (typeof events)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  const imageScale = useTransform(mouseYSpring, [-0.5, 0.5], [1.06, 1.02]);

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
      {/* Image Container */}
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
            src={getImageSrc(event.image)}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Lime tint on hover */}
        <div className="absolute inset-0 bg-lime/0 group-hover:bg-lime/5 transition-colors duration-500" />
      </div>

      {/* Text Info Below */}
      <div className="mt-4 space-y-2 transform transition-transform duration-300 group-hover:translate-y-1">
        <h3 className="text-2xl sm:text-[32px] font-medium text-dark transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base text-dark sm:leading-[25.2px]">
          {event.description}
        </p>

        {/* Tags Row */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="inline-flex w-fit items-center gap-1.5 px-2 py-1 text-sm sm:text-base sm:leading-[25.2px] bg-[#D6F8EE] text-dark">
            <CalendarIcon />
            {event.date}
          </span>
          <span className="inline-flex w-fit items-center gap-1.5 px-2 py-1 text-sm sm:text-base sm:leading-[25.2px] bg-[#D6F8EE] text-dark">
            <LocationIcon />
            {event.location}
          </span>
        </div>

        {/* Get Ticket Button */}
        <div className="pt-2">
          <Button variant="secondary">Get Ticket</Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedEvents() {
  return (
    <section className="py-20 bg-white font-dm">
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
            title="Featured Events"
            desc="Discover what's happening around you"
            element={
              <button className="border-none bg-transparent cursor-pointer flex items-center gap-2.5 text-dark text-sm sm:text-base">
                See All
                <ArrowRightIcon />
              </button>
            }
          />
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-y-10"
          style={{ perspective: "1000px" }}
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import Heading from "../props/Heading";
import { Sections } from "../props/Section";
import { setupfeatures } from "../../utils/constant";

const BuiltForHigh = () => {
  return (
    <section className="py-10 font-dm">
      <div className="mx-auto max-w-360 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Heading title="Built for High-Growth Events" />
        </motion.div>

        <Sections features={setupfeatures} />
      </div>
    </section>
  );
};

export default BuiltForHigh;

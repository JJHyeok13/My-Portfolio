import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const MotionComponent = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;

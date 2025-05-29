import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  children: ReactNode;
  variants?: Variants;
  initial?: string;
  animate?: string;
};

const MotionComponent = ({ children, variants, initial, animate }: Props) => {
  return (
    <motion.div
      initial={initial ?? { opacity: 0, y: 50 }}
      animate={animate ?? { opacity: 1, y: 0 }}
      variants={variants}
      whileInView={!variants ? { opacity: 1, y: 0 } : undefined}
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

/** @jsxImportSource react */
import { motion } from "framer-motion";

const ContainerActionAnimated = ({ children }: any): any => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.8 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default ContainerActionAnimated;

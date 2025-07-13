/** @jsxImportSource react */
import { motion } from "framer-motion";

const ButtonCircleAnimated = ({ children }: any): any => {
  return (
    <motion.div
      whileHover={{
        rotate: 45,
        backgroundColor: "#f0f2f5",
        color: "#161513",
      }}
      transition={{ duration: 0.4 }}
      className="border border-white h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default ButtonCircleAnimated;

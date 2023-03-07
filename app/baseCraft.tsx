"use client";
import { motion } from "framer-motion";
import { RiSpaceShipFill } from "react-icons/ri";

type Props = {};

function baseCraft({}: Props) {
return (
  <div>
    <motion.div
      initial={{ y: 600, opacity: 0, scale: 0.4 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1.5,
        color: ["#ffff", "rgb(74 29 150 / 0.7)"],
      }}
      transition={{ duration: 1 }}
    >
      <RiSpaceShipFill className="animate-bounce drop-shadow-2xl" />
    </motion.div>
  </div>
);
}

export default baseCraft;

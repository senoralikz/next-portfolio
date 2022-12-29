import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://i.imgur.com/B7hvrU8.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
      />
    </div>
  );
};

export default Skill;

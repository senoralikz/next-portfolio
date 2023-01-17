import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <motion.div
      className="flex"
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <Image
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
        alt=""
        width={96}
        height={96}
      />
    </motion.div>

    // <div className="flex">
    //   <motion.img
    //     initial={{
    //       x: directionLeft ? -200 : 200,
    //       opacity: 0,
    //     }}
    //     transition={{ duration: 1 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     src={urlFor(skill?.image).url()}
    //     className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
    //   />
    // </div>
  );
};

export default Skill;

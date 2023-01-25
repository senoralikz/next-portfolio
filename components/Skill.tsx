import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="flex flex-col">
      <Image
        src={urlFor(skill?.image).url()}
        className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain rounded-md"
        alt=""
        width={96}
        height={96}
      />
      <p className="text-base text-gray-400 text-center pt-3 hidden md:block">
        {skill?.title}
      </p>
    </div>
  );
};

export default Skill;

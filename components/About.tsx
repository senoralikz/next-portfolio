import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.imgur.com/Un6f48S.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Background</h4>
        <p className="text-base">
          Hello! My name is Alexander Morales. I was born and raised in
          Brooklyn, New York. Technology has always been an interest of mine.
          Since my younger days of importing cheats onto my Gameshark for my
          Gameboy using dial up modem to building my own computer. I decided to
          take my passion and go into software development. I have taken
          computer science classes and graduated from General Assembly&apos;s
          Software Engineering Immersive program to learn and develop the skills
          needed to not just get a job, but to also contribute to a team and be
          able to be part of something that will challenge me and help me grow
          as a software developer.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

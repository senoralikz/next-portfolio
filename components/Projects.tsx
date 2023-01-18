import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-6">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#008080]/80">
        {projects?.map((project) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <Link href={project?.linkToBuild} target="_blank">
                <h4 className="text-3xl md:text-4xl font-semibold text-center cursor-pointer">
                  {project?.title}
                </h4>
              </Link>
              <div className="flex items-center space-x-6 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                    className="h-10 w-10"
                    width={40}
                    height={40}
                  />
                ))}
              </div>

              <p className="text-lg text-center">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#008080]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

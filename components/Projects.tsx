import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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

      <div className="relative w-full snap-x snap-mandatory z-20">
        <Carousel
          infiniteLoop
          emulateTouch
          showStatus={false}
          showThumbs={false}
        >
          {projects?.map((project) => (
            <div
              key={project._id}
              className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 mt-4"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                className="shadow-2xl rounded-md"
              />
              <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                <div>
                  <Link
                    href={project?.linkToBuild}
                    target="_blank"
                    className="flex justify-center mx-auto"
                  >
                    <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-pointer">
                      {project?.title}
                    </h4>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Link>
                  <div className="flex justify-center items-center pr-8">
                    <SocialIcon
                      url={project?.linkToRepo}
                      fgColor="gray"
                      bgColor="transparent"
                    />
                    <Link
                      href={project?.linkToRepo}
                      target="_blank"
                      legacyBehavior
                    >
                      <h4 className="text-sm md:text-base text-center cursor-pointer underline">
                        Repo
                      </h4>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-6 justify-center">
                  {project?.technologies.map((technology) => (
                    <div key={technology._id}>
                      <Image
                        src={urlFor(technology?.image).url()}
                        alt=""
                        className="h-8 w-8 md:h-12 md:w-12 object-contain"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>

                <p className="md:text-lg text-center">{project?.summary}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full absolute top-[30%] bg-[#008080]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

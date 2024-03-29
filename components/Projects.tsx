import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
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
                            key={project?._id}
                            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 mt-4"
                        >
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project?.image).url()}
                                alt=""
                                className="shadow-2xl rounded-md max-w-lg max-h-fit"
                            />
                            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                                <div>
                                    <h4 className="text-2xl md:text-4xl font-semibold text-center">
                                        {project?.title}
                                    </h4>
                                    <div className="flex justify-center items-center pr-6 space-x-10">
                                        <div className="flex items-center cursor-pointer hover:underline">
                                            <SocialIcon
                                                url={project?.linkToRepo}
                                                fgColor="gray"
                                                bgColor="transparent"
                                                target={"_blank"}
                                            />
                                            <Link
                                                href={project?.linkToRepo}
                                                legacyBehavior
                                            >
                                                <a
                                                    target={"_blank"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <h4 className="text-sm md:text-base text-center cursor-pointer hover:underline">
                                                        Link to Repo
                                                    </h4>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex items-center cursor-pointer hover:underline">
                                            <Link
                                                href={project?.linkToBuild}
                                                legacyBehavior
                                            >
                                                <a
                                                    target={"_blank"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <ComputerDesktopIcon
                                                        href={
                                                            project?.linkToBuild
                                                        }
                                                        className="w-7 mr-2 text-gray-500"
                                                    />
                                                </a>
                                            </Link>
                                            <Link
                                                href={project?.linkToBuild}
                                                legacyBehavior
                                            >
                                                <a
                                                    target={"_blank"}
                                                    rel="noopener noreferrer"
                                                >
                                                    <h4 className="text-sm md:text-base text-center cursor-pointer hover:underline">
                                                        Link to Build
                                                    </h4>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-6 justify-center">
                                    {project?.technologies.map((technology) => (
                                        <div key={technology._id}>
                                            <Image
                                                src={urlFor(
                                                    technology?.image
                                                ).url()}
                                                alt=""
                                                className="h-8 w-8 md:h-12 md:w-12 object-contain rounded-md"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="w-screen md:w-fit px-1">
                                    <p className="md:text-lg text-center">
                                        {project?.summary}
                                    </p>
                                </div>
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

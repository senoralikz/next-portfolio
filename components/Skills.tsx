import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
    skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-6">
                Skills
            </h3>
            <div className="grid grid-cols-3 md:pt-20 md:grid-cols-4 gap-x-10 gap-y-6 md:gap-10">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill key={skill?._id} skill={skill} />
                ))}
                {skills
                    ?.slice(skills.length / 2, skills.length)
                    .map((skill) => (
                        <Skill key={skill?._id} skill={skill} />
                    ))}
            </div>
        </motion.div>
    );
};

export default Skills;

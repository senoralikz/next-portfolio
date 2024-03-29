import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
    pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `<Loading-${pageInfo?.name} />`,
            "<Professional-Google-User />",
            "<Destroyer-of-Bugs />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image
                className="relative rounded-full w-32 h-32 mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt=""
                height={128}
                width={128}
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#008080" />
                </h1>
                <div className="pt-5 flex justify-center md:block">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link
                        href={`${pageInfo?.resumeURL}?dl=`}
                        target="_blank"
                        download
                    >
                        <button className="heroButton">Resume</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

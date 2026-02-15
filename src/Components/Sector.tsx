"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SectorMember = ({
  imageLink,
  name,
  role,
  linkedin,
  textSize = "base",
}: {
  imageLink: string;
  name: string;
  role: string;
  linkedin: string;
  textSize?: "sm" | "base";
}) => {
  const nameClass = textSize === "sm" ? "text-sm lg:text-xl" : "text-xl lg:text-2xl";

  return (
    <motion.div className="my-0 flex flex-col items-center rounded-lg overflow-hidden text-white text-center w-max break:w-48">
      <img
        src={imageLink}
        alt={name}
        className="rounded-full w-32 h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 object-cover shadow-lg"
      />
      <div className="flex flex-col py-4 items-center">
        <p className={`${nameClass} flex items-center gap-2 justify-center font-semibold`}>
          {name}
          <Link
            href={linkedin || ""}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-gray-700 transition-colors duration-200" />
          </Link>
        </p>
      </div>
    </motion.div>
  );
};


export const Sector = ({
  sectorMembers,
  title,
  textSize = "base",
}: {
  sectorMembers: any;
  title: string;
  textSize?: "sm" | "base";
}) => {
  const titleClass = textSize === "sm" ? "text-lg lg:text-2xl" : "text-3xl lg:text-3xl";
  return (
    <motion.div
      className="bg-background text-white px-5 rounded-lg"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h2 className={`${titleClass} font-bold text-left my-8 pl-5`}>
        {title}
      </h2>
      <div className="flex flex-col break:flex-row items-center text-nowrap break:text-wrap w-full justify-evenly">
        {sectorMembers.map((member: any, idx: number) => (
          <SectorMember
            key={idx}
            name={member.name}
            role={member.role}
            imageLink={member.imageLink}
            linkedin={member.linkedin}
            textSize={textSize}
          />
        ))}
      </div>
    </motion.div>
  );
};

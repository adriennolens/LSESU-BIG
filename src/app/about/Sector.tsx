"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MemberType, SectorInterface } from "../../Types";

const SectorMember = ({ imageLink, name, role, linkedin }: MemberType) => {
  return (
    <div className="my-4 flex flex-col items-center rounded-lg text-white text-center w-max break:w-48">
      <div className="relative w-32 h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48">
        <Image
          src={imageLink}
          alt={name}
          fill
          className="rounded-full object-cover shadow-lg"
          sizes="(max-width: 768px) 128px, (max-width: 1280px) 160px, 192px"
          priority
        />
      </div>
      <div className="flex flex-col py-4 items-center">
        <p className="text-xl lg:text-xl flex items-center gap-2 justify-center font-semibold whitespace-nowrap">
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
    </div>
  );
};

export const Sector = ({ sectorMembers, title }: SectorInterface) => {
  return (
    <div className="bg-background text-white px-5 rounded-lg">
      <h2 className="text-3xl lg:text-3xl font-bold text-left my-10 pl-5">
        {title}
      </h2>
      <div className="flex flex-col break:flex-row items-center text-nowrap break:text-wrap w-full justify-evenly">
        {sectorMembers.map((member: MemberType, idx: number) => (
          <SectorMember
            key={idx}
            email={member.email}
            name={member.name}
            role={member.role}
            imageLink={member.imageLink}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

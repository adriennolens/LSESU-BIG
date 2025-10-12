import React from "react";
import {
  FaNetworkWired,
  FaBriefcase,
  FaUniversity,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BenefitInterface } from "../Types";
import Link from "next/link";

const Benefit = ({ title, description, icon }: BenefitInterface) => {
  return (
    <div className="p-8 min-h-[14rem] min-w-[23rem] rounded-lg flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-transparent hover:border-white hover:bg-[#10224d] transition-all duration-300 ease-in-out px-4">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl md:text-2xl font-bold mb-2 whitespace-nowrap">
        {title}
      </h2>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

const MembershipBenefits = () => {
  const benefits = [
    {
      title: "Exclusive networking sessions",
      description:
        "Networking events to connect members with industry professionals and like-minded students.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Top-tier recruitment opportunities",
      description:
        "Recruitment events, CV drop-ins, and info sessions from the leading financial firms.",
      icon: <FaBriefcase />,
    },
    {
      title: "Application workshops",
      description:
        "Technical training sessions, CV reviews, and panel events for all job programmes.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Inter-university competitions",
      description:
        "Varsity-level stock pitches and M&A competitions organised with universities across the globe.",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section className="text-white pt-32 pb-32">
      <h1>Membership Benefits</h1>
      <div className="relative w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-16">
        {benefits.map((benefit, i) => (
          <Benefit
            key={i}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
      <div className="text-center mt-20">
        <p className="text-xl px-5 ml:px-0">
          If you want to learn more about membership benefits, get in touch via
          our Instagram page!
        </p>
        <Link
          href="https://www.instagram.com/lsesubig/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 px-4 py-2 rounded border-2 border-white">
            Get In Touch
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MembershipBenefits;

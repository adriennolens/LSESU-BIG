"use client";
import { useState, useRef, useEffect } from "react";
import {
  homeImage,
  aboutUsImage,
  eventsImage,
  mentorshipImage,
  resourcesImage,
  trackerImage,
  galleryImage,
} from "../../public";
import marshallImage from "../../public/marshall.jpg";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = window.innerHeight * scroll;
    }
  }, [scroll]);

  return (
    <>
      <Navbar setScroll={setScroll} />
      <div
        className="absolute pt-0 w-screen h-max md:h-screen overflow-y-scroll hidden break:flex flex-col transition-all duration-200 brightness-[70%]"
        ref={divRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {[
          homeImage,
          aboutUsImage,
          eventsImage,
          mentorshipImage,
          resourcesImage,
          galleryImage,
          marshallImage,
          trackerImage,
        ].map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt="Image"
            className={`${
              idx !== 0 ? "hidden md:block" : ""
            } w-screen h-52 md:h-screen object-cover flex-shrink-0`}
            width={1280}
            height={720}
          />
        ))}
      </div>
      <header className="relative h-max md:h-screen w-full z-30 flex items-center justify-center bg-background/30">
        <div className="hidden md:flex flex-col items-center text-white rounded-t-lg py-7 px-10 ">
          <h1 className="text-center flex flex-col mb-5">
            <span className="text-5xl">London School of Economics</span>
            <span className="text-7xl">Business & Investment Group</span>
          </h1>
          <p className="text-center text-lg mm:text-2xl mm:mt-3">
            Europe's premier finance and business society
          </p>
          <button
            className="px-8 py-4 text-xl mt-3"
            onClick={() =>
              window.open(
                "https://www.lsesu.com/communities/societies/group/big/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            BECOME A MEMBER
          </button>
        </div>
      </header>
      <div className="mt-52 md:hidden flex flex-col items-center text-background rounded-t-lg py-7 px-10 bg-white">
        <h1 className="text-center flex flex-col mb-5">
          <span className="text-xl mm:text-2xl ml:text-4xl mb-1 ">
            London School of Economics
          </span>
          <span className="text-xl mm:text-3xl ml:text-5xl">
            Business & Investment Group
          </span>
        </h1>
        <p className="text-center text-lg mm:text-2xl mm:mt-3">
          Europe's premier finance and business society
        </p>
        <button
          className="px-3 py-2 text-lg mm:px-5 mm:py-4 mm:text-xl mt-3"
          onClick={() =>
            window.open(
              "https://www.lsesu.com/communities/societies/group/big/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          BECOME A MEMBER
        </button>
      </div>
    </>
  );
};

export default Header;

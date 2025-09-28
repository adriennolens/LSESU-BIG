import React from "react";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components";
import Image from "next/image";
import trackerImage from "../../../public/trackerImage.jpg";
import hirehuubImage from "../../../public/hirehuub.png";
import Link from "next/link";

const Tracker = async () => {
  return (
    <main className="bg-white">
      <header className="relative">
        <Navbar />
        <Image
          src={trackerImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          BIG Tracker
        </h1>
      </header>
      <div className="">
        <h1 className="text-background pt-16 mb-0 bg-white text-3xl lg:text-3xl font-bold text-center flex-1">
          <span className="block">
            LSESU BIG is excited to announce the release of our 
          </span>
          <span className="block py-4 lg:text-4xl">
            <b>2025/26 Application Tracker</b>,
          </span> 
          <span className="block">
            proudly in collaboration with  
          <Image
            src={hirehuubImage}
            className="inline-block w-[24vh] h-auto object-cover z-0 brightness-100"
            alt=""
          />
          </span>
        </h1>
      </div>
      <div className="text-center pt-8 pb-16">
        <Link
          href="https://hirehuub.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-4 text-1xl">Access the Tracker</button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Tracker;

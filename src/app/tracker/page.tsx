import React from "react";
import Navbar from "../../Components/Navbar";
import { Number, Footer } from "../../Components";
import { FaCalendarAlt, FaUserTie, } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { IoTime } from "react-icons/io5";
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
      <section className="pt-0">
        <h1 className="text-background pt-16 mb-0 bg-white text-3xl lg:text-3xl font-bold text-center flex-1">
            <span className="block">
              LSESU BIG is excited to announce the release of our 
            </span>
            <span className="block pt-5 lg:text-4xl">
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
        <div className="text-center pt-8 pb-16">
          <Link
            href="https://hirehuub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 text-1xl">Access the Tracker</button>
          </Link>
        </div>
      </section>
      <section className="pt-0 bg-background text-white pb-1 text-center">
        <h1 className="text-4xl pt-16">What we offer.</h1>
        <p className="text-2xl">This year, the BIG x HireHuub platform becomes your one-stop shop for all things recruitment - 
          <br></br>from discovering opportunities to preparing and tracking every step of the process.</p>

        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-1 mm:gap-10 mb-32 w-max mx-auto">
          <Number
            text={
              <>
                40,000+ <br /> Internships
              </>
            }
            icon={<FaUserTie />}
            description={
              "HireHuub provides fast-tracking opportunities, making it the complete recruitment toolkit to break into high finance."
            }
          />
          <Number
            text={
              <>
                15,000+ <br /> Online Assessments
              </>
            }
            icon={<MdAssessment />}
            description={
              "HireHuub integrates AI-powered CV grading, online assessments, and interview simulations."
            }
          />
          <Number
            text={
              <>
                Updates every <br /> 10 minutes
              </>
            }
            icon={<IoTime />}
            description={
              "We are the fastest job tracker on the market. We spot applications earlier than anyone else."
            }
          />
        </div>
      </section>
      <section className="pt-0 py-16 text-center">
      <h1 className="text-4xl pt-16">What you get access to.</h1>
      </section>
      <Footer />
    </main>
  );
};

export default Tracker;

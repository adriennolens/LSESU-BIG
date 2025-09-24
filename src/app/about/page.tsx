// @ts-nocheck
"use client";
import { Sector } from "@/app/about/Sector";
import { team } from "../../Database";
import Dropdown from "../../Components/Dropdown";
import Football from "../../Components/Football";
import { useState } from "react";
import Image from "next/image";
import aboutUsImage from "../../../public/about_us.jpeg";
import { Footer, Navbar } from "../../Components";
// test
const AboutUs = () => {
  const [year, setYear] = useState("2025/26");

  return (
    <main className="bg-white">
      <header className="relative pb-5">
        <Navbar />
        <Image
          src={aboutUsImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Our Committee
        </h1>
      </header>

      <section className="pt-10">
        <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row px-10 justify-center items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-center my-10 flex-1">
            Executive Committee
          </h2>
          <div className="">
            <Dropdown
              state={year}
              setState={setYear}
              options={["2025/26", "2024/25", "2023/24", "2022/23", "2021/22"]}
            />
          </div>
        </div>

        <hr className="border-gray-300 my-4" />
        <Football
          members={team[year as keyof typeof team]["executiveMembers"]}
          pattern={team[year as keyof typeof team]["pattern"]}
        />
      </section>
      <section>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-10 mb-10">
          Division Heads
        </h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5 pb-20 justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-screen gap-2 px-10 xl:px-20">
            {Object.keys(team[year as keyof typeof team]["heads"]).map(
              (role: any, idx: number) =>
                team[year as keyof typeof team]["heads"][role].length > 0 && (
                  <Sector
                    sectorMembers={
                      team[year as keyof typeof team]["heads"][role]
                    }
                    title={role}
                    key={idx}
                  />
                )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUs;

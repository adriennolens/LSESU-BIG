"use client";
import { useState } from "react";
import { Footer, Navbar } from "../../Components";
import Image from "next/image";
import resourcesImage from "../../../public/resources.jpeg";
import Resource from "./Resource";
import { resources } from "../../Database";
import { ResourceInterface } from "../../Types";
import Dropdown from "../../Components/Dropdown";

const Resources = () => {
  const [category, setCategory] = useState("First Year Applications");
  return (
    <main>
      <header className="relative">
        <Navbar />
        <Image
          src={resourcesImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt="Resources Background"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Resources
        </h1>
      </header>
      <section className="py-16 bg-white flex flex-col items-center justify-center">
        <p className="text-lg md:text-2xl mb-10 px-5 ml:px-10 md:px-28 lg:px-56 xl:px-96 text-center">
          Our resource drive have been accessed by 50,000+ students and have
          helped our members land roles across Europe at the most competitive
          firms.
        </p>
        <div className="flex justify-end ml:w-3/4">
          <Dropdown
            state={category}
            setState={setCategory}
            options={[
              "First Year Applications",
              "CV & Cover Letter Advice",
              "AC & Interview Advice",
              "Consulting",
              "Excel Models & PowerPoint Decks",
              "Books",
              "M&A Group - Deal Snapshots",
            ]}
          />
        </div>
        <div className="w-full px-4 mx-10">
          <div className="flex flex-col items-center ml:grid ml:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            {(resources["resources"] as ResourceInterface[])
              .filter((resource) => {
                return resource.category === category;
              })
              .map((resource, index) => {
                return (
                  <Resource
                    key={index}
                    link={resource.link}
                    thumbnail={resource.thumbnail}
                  />
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;

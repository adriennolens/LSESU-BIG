import React from "react";
import { GalleryEventInterface } from "@/Types";
import { Photo } from "@/Components/Gallery";
import { gallery } from "@/Database";
import { Footer, Navbar } from "@/Components";
import Image from "next/image";
import { galleryImage } from "../../../public";

const page = () => {
  const events = gallery.gallery.concat(gallery.homepage);
  return (
    <main className="bg-white">
      <header className="relative pb-5">
        <Navbar />
        <Image
          src={galleryImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Gallery
        </h1>
      </header>
      <section className="bg-white text-black border-b border-white m-0 py-0">
        <div className="w-full flex flex-wrap justify-center my-20">
          {events.map((event: GalleryEventInterface, idx: number) => (
            <div className="flex-initial" key={idx}>
              <Photo
                imageLink={event.imageLink}
                link={event.postLink}
                title={event.title}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;

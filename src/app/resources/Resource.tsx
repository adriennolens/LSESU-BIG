import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ResourceInterface {
  link: string;
  thumbnail?: string;
}

const Resource = ({ link, thumbnail }: ResourceInterface) => {
  return (
    <Link
      href={link}
      className="p-0 cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center justify-center w-max rounded-xl overflow-hidden border-4 border-black gap-4 mx-10 my-10 hover:scale-[1.02] transition-all duration-100 cursor-pointer">
        <div>
          {thumbnail ? (
            <Image
              src={thumbnail}
              className="w-[230px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
              width={400}
              height={400}
              alt="Resource Thumbnail"
            />
          ) : (
            <div className="bg-gray-700 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] aspect-[7/8]"></div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Resource;

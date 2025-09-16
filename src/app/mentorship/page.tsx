import TestimonialShowcase from "@/app/mentorship/TestimonialShowcase";
import { FaChartLine, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { TestimonialInterface } from "../../Types";
import { NumberInterface } from "../../Types";
import mentorShipImage from "../../../public/mentorship.jpg";
import Image from "next/image";
import { Footer, Navbar } from "../../Components";
import Link from "next/link";

const Number = ({ text, icon, description }: NumberInterface) => {
  return (
    <div className="rounded-lg bg-background text-white flex flex-col items-center justify-center p-6 group cursor-pointer select-none h-max">
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-2xl">{text}</div>
      <div className="h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 mt-4 text-center text-xl">
        {description}
      </div>
    </div>
  );
};

const Mentorship = async () => {
  const testimonials: TestimonialInterface[] = [
    {
      description:
        "Mentorship at BIG provided me with the guidance and support I needed to take full advantage of all the experiences my first year at university had to offer.",
    },
    {
      description:
        "Learning from a mentor who had successfully navigated the financial industry was crucial in helping me secure early career opportunities.",
    },
    {
      description:
        "This program helped me form valuable relationships with other students who share similar goals and interests.",
    },
  ];
  const mentors = [{}, {}, {}];
  return (
    <main className="">
      <header className="relative">
        <Navbar />
        <Image
          src={mentorShipImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          MENTORSHIP
        </h1>
      </header>
      <header className="px-4 md:px-10 lg:px-20 xl:px-40 lg:pt-10 flex flex-col items-center py-10 lg:pb-20 bg-white">
        <div className="flex flex-col md:flex-row gap-5 ">
          <Link
            href="https://forms.gle/8cPVdGQuLdW4xPbY6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4">Apply to be a mentee</button>
          </Link>
          <Link
            href="https://forms.gle/S376x3JaD6XwaSJB8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 ">Apply to be a mentor</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-h-52 h-52 mb-96 md:mb-20 text-center">
          <Number
            text="80+ Spring Week Offers"
            icon={<FaChartLine />}
            description="BIG has a mentor for each possible spring week."
          />
          <Number
            text="Revamped to mentorship families"
            icon={<FaCalendarAlt />}
            description="A new approach to strengthen connections and build deeper mentor-mentee partnerships"
          />
          <Number
            text="35 mentors"
            icon={<FaUsers />}
            description="Our 30+ mentors are second and third year LSE students from a range of disciplines"
          />
        </div>
      </header>
      <section className="bg-background text-white pt-20 pb-10">
        <h1 className="text-3xl lg:text-6xl font-bold text-center">
          Testimonials
        </h1>
        <TestimonialShowcase testimonials={testimonials} />
      </section>
      <section className="bg-white pt-20 pb-10">
        <h1 className="text-3xl lg:text-6xl font-bold text-center mb-4">
          Mentors
        </h1>
        <p className="ml:text-lg md:text-xl px-10 md:px-32 lg:px-80 py-10 text-center">
          Our team of over 30 mentors comes from diverse backgrounds and
          nationalities. They have successfully secured highly competitive roles
          within the financial industry, drawing from diverse academic
          backgrounds, including economics, STEM, and non-finance disciplines.
          With offers from more than 50 firms, they bring a wealth of knowledge
          and insight to support others in navigating this industry.
        </p>{" "}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <Link
            href="https://forms.gle/8cPVdGQuLdW4xPbY6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4">Apply to be a mentee</button>
          </Link>
          <Link
            href="https://forms.gle/S376x3JaD6XwaSJB8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 ">Apply to be a mentor</button>
          </Link>
        </div>
        {/* <MentorShowcase mentors={mentors} /> */}
      </section>
      <Footer />
    </main>
  );
};

export default Mentorship;

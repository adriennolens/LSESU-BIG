// @ts-nocheck
"use client";
import { Sector } from "../../Components/Sector";
import { team } from "../../Database";
import Football from "../../Components/Football";
import { useState } from "react";
import Image from "next/image";
import marshallImage from "../../../public/marshall.jpg";
import lseTalkImage from "../../../public/lse_talk.jpg";
import ubsImage from "../../../public/ubs.png";
import { Footer, Navbar } from "../../Components";

const offerings = [
    {
        title: "Bootcamp Training",
        description:
            "New equity research trainees are trained in equity research fundamentals, financial statement analysis, valuation methodologies (DCF, comparable companies, precedent transactions), and investment thesis construction over an intensive multi-week programme.",
    },
    {
        title: "Stock Pitch Competition Training",
        description:
            "Analysts develop and present full investment theses to panels of experienced judges. Teams build complete financial models, conduct sensitivity analyses, and defend their recommendations under live Q&A - preparing them for national inter-university competitions.",
    },
    {
        title: "Networking Opportunities",
        description:
            "Gain access to exclusive chances to speak to industry professionals and receive detailed feedback.",
    },
    {
        title: "Research Mentorship",
        description:
            "Each trainee is paired with a senior team member who provides guidance on research methodology, model construction, and presentation skills. Our mentors have experience across investment banking, asset management, and quantitative trading.",
    },
    {
        title: "Exclusive Partnerships",
        description:
            "BIG Capital's partnership with UBS gives our analysts access to the HOLT equity screening and valuation platform, providing institutional-grade tools to support our investment decisions.",
    },
];

const BigCapital = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-white">
            <header className="relative">
            <Navbar />
            <Image
                src={marshallImage}
                className="w-full h-[75vh] object-cover z-0 brightness-50"
                alt=""
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
                BIG Capital
            </h1>
            </header>
            <section className="pt-0 px-10 text-center">
                <h1 className="text-background pt-16 mb-0 bg-white text-3xl lg:text-3xl font-bold text-center flex-1">
                    What we are
                </h1>
                <p className="text-lg md:text-2xl pt-8 pb-16 leading-relaxed px-2 md:px-64">
                    BIG Capital is LSE's student-managed investment fund, launched in 2023 under
                    the LSESU Business & Investment Group. Our analysts conduct fundamental and
                    quantitative research across equities and fixed income, using institutional tools
                    including Bloomberg and UBS HOLT. We pitch to panels of industry
                    professionals and compete against top university funds nationally. Our fund is
                    comprised of over 12 analysts and 15 bootcamp trainees, with plans for expansion
                    in the future.
                </p>
            </section>

            <section className="w-full py-12 lg:px-10 bg-background text-white">
                <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-24">
                    
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
                        <p className="text-base md:text-lg leading-relaxe lg:pr-20">
                            All of our members are highly accomplished, with many
                            going on to win stock pitch competitions and land roles
                            at highly competitive firms, including Point72, Goldman
                            Sachs and Citadel.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed lg:pr-20">
                            Our analysts use institutional-grade tools for equity
                            screening and valuation. Each term, sector teams identify
                            the most compelling investment opportunities and pitch to
                            panels of industry professionals. New members join through
                            our Bootcamp programme, receiving training in financial
                            modelling, valuation, and thesis construction from senior
                            analysts with experience across investment banking, asset
                            management, hedge funds, and quantitative trading.
                        </p>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 gap-2">
                        {team["2025/26"]["bigCapitalHeads"]["BIG Capital"].map((member, idx) => (
                            <Sector
                            key={idx}
                            title={member.role}
                            sectorMembers={[member]}
                            textSize="sm"
                            />
                        ))}
                    </div>

                </div>
            </section>

            <section className="pt-0 py-0 text-center relative z-30">
                <div className="flex flex-col md:flex-row items-stretch w-full md:h-[75vh]">
                    <div className="md:w-1/2 px-6 md:px-24 py-10 md:py-16 flex flex-col justify-center md:h-[75vh] overflow-y-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-left">What we offer</h1>

                        <div className="text-left">
                            {offerings.map((item, index) => (
                                <div key={index} className="border-b border-gray-300">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="bg-white hover:bg-white hover:scale-100 hover:shadow-none transition-none text-background w-full flex items-center justify-between py-3 md:py-4 text-left cursor-pointer"
                                    >
                                        <span className="text-base md:text-lg font-bold pr-4">{item.title}</span>
                                        <span
                                            className={`text-2xl font-light transition-transform duration-300 flex-shrink-0 ${
                                                openIndex === index ? "rotate-45" : ""
                                            }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                                            openIndex === index
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-sm text-background leading-relaxed pb-4">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative h-[50vh] md:h-auto w-full">
                        <Image
                            src={lseTalkImage}
                            alt=""
                            className="object-cover object-right brightness-50"
                            fill
                        />
                    </div>
                </div>
            </section>
            
            <section className="w-full py-20 lg:px-10 bg-background text-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold lg:pr-24">Our Partnerships</h2>
                        <p className="text-base md:text-lg leading-relaxed lg:pr-24">
                            BIG Capital has partnered with UBS to provide our analysts with 
                            access to the HOLT valuation and equity screening platform: the 
                            same tool used by institutional investors globally to identify 
                            mispriced securities and assess fundamental value. This partnership 
                            gives our team a distinct analytical edge in building data-driven 
                            investment theses.
                        </p>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 relative overflow-visible">
                        <Image
                            src={ubsImage}
                            alt=""
                            width={800}
                            height={500}
                            className="rounded-lg w-full h-auto relative z-20"
                        />
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-[2000px] h-[500px] bg-white rotate-[-45deg] rounded-full" />
                        </div>
                    </div>

                </div>
            </section>
            <div className="relative z-30">
                <Footer />
            </div>
        </main>
    );
};

export default BigCapital;

import "./globals.css";
import { speakers, sponsors, gallery, logos } from "../Database";
import {
  FaUsers,
  FaCalendarAlt,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";
import Header from "../Components/Header";

import {
  SpeakerShowcase,
  MediaLogo,
  Features,
  Number,
  Gallery,
  Sponsors,
  MembershipBenefits,
  Footer,
} from "../Components";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-white">
        <h1>Who we are</h1>
        <p className="ml:text-lg md:text-xl px-10 md:px-32 lg:px-72 text-center">
          The LSESU Business and Investment Group (BIG) is the largest and most
          active society at the LSE, offering students support in pursuing
          careers in finance. Formed in 2019, as a merger of LSE’s two most
          influential societies, BIG provides access to essential career
          resources, networking opportunities, and skill development. With tools
          such as the Application Tracker and a strong community of mentorship,
          BIG helps its members secure highly competitive roles and thrive in
          their professional journeys.
        </p>
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-1 mm:gap-10 mb-32 w-max mx-auto">
          <Number
            text="900+ members"
            icon={<FaUsers />}
            description={
              " With the most members of any LSE society, we represent all degree subjects and backgrounds"
            }
          />
          <Number
            text="50+ events"
            icon={<FaCalendarAlt />}
            description={
              "Our countless panel events ensures that there is always something exciting to attend"
            }
          />
          <Number
            text="10K+ followers"
            icon={<FaUserFriends />}
            description={
              "Our social media presence ensures our members are always up to date with upcoming events"
            }
          />
          <Number
            text="10+ sponsors"
            icon={<FaHandshake />}
            description={
              "Our sponsors bridge the gap between university and industry by providing exclusive networking sessions"
            }
          />
        </div>
        <h1>Our Ventures</h1>
        <Features />
      </section>
      <SpeakerShowcase showcaseSpeakers={speakers.images} />
      <Sponsors sponsors={sponsors.sponsors} />
      <MembershipBenefits />
      <section className="bg-white">
        <h1>Alumni Destinations</h1>
        <div className="">
          <div className="grid mm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center mx-auto w-max gap-4">
            {logos["logos"].map((icon, idx) => (
              <MediaLogo icon={icon} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-black border-b border-white mb-10">
        <h1>Gallery</h1>
        <Gallery events={gallery.homepage} scrollToggle={5200} />
      </section>
      <Footer />
    </main>
  );
}

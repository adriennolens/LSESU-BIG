import Logo from "./Logo";
import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-fontColor py-8">
      <div className="container mx-auto flex flex-col items-center lg:grid lg:grid-cols-3 gap-8">
        <div className="w-full flex flex-col items-center text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">
            <Logo />
          </h3>
          <p>Empowering the next generation of leaders.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
            Quick Links
          </h3>
          <ul className="flex lg:flex-col lg:items-start gap-2 flex-wrap items-center justify-center lg:justify-start">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/membership" className="hover:underline">
                Membership
              </Link>
            </li>
            <li>
              <Link href="tracker">BIG Tracker</Link>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="mb-5">
            <p>LSE Students' Union</p>
            <p>Houghton Street</p>
            <p>London</p>
            <p>WC2A 2AE</p>
          </div>
          <p>Email: business-investment@lsesu.org</p>
          <div className="w-full flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2026 LSESU BIG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

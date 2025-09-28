"use client";
import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Profile from "./Profile";

type MenuListProps = {
  href: string;
  name: string;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setScroll?: React.Dispatch<React.SetStateAction<number>>;
  idx?: number;
};

const MenuList = ({
  href,
  name,
  setOpenMenu,
  setScroll,
  idx,
}: MenuListProps) => {
  return (
    <Link
      href={href}
      className="px-20 py-7 md:py-10 hover:bg-white hover:text-background font-bold flex items-center"
      onClick={() => setOpenMenu(false)}
      onMouseEnter={() =>
        (setScroll && idx && setScroll(idx)) ||
        (idx === 0 && setScroll && setScroll(0))
      }
    >
      {name}
    </Link>
  );
};

const Menu = ({
  setScroll,
}: {
  setScroll?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <aside>
      <div
        className={`absolute overflow-x-hidden overflow-y-scroll bg-background top-0 h-screen right-0 transition-all duration-200 pt-32 ${
          openMenu ? "w-screen lg:w-[500px]" : "w-0"
        }`}
      >
        <IoClose
          onClick={() => setOpenMenu(false)}
          className="absolute right-20 top-16 text-5xl text-red-700 cursor-pointer"
        />
        <ul className="text-white grid grid-rows-6 w-full h-full duration-200 ">
          {[
            ["/", "Home"],
            ["/about", "About Us"],
            ["/events", "Events"],
            ["/mentorship", "Mentorship"],
            ["/resources", "Resources"],
            ["/gallery", "Gallery"],
            ["/tracker", "BIG Tracker"],
          ].map((item, idx) => (
            <MenuList
              href={item[0]}
              name={item[1]}
              setOpenMenu={setOpenMenu}
              setScroll={setScroll}
              idx={idx}
              key={idx}
            />
          ))}
        </ul>
      </div>
      <IoMenu
        className="md:ml-10 cursor-pointer text-4xl xl:text-5xl"
        onClick={() => setOpenMenu(true)}
      />
    </aside>
  );
};
const Navbar = ({
  setScroll,
}: {
  setScroll?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [navBackground, setNavBackground] = useState("transparent");
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.innerWidth < 500) {
        setNavBackground("background");
      } else if (window.innerWidth < 700) {
        if (window.scrollY >= 200) {
          setNavBackground("background");
        } else {
          setNavBackground("transparent");
        }
      } else {
        if (window.scrollY >= 650) {
          setNavBackground("background");
        } else {
          setNavBackground("transparent");
        }
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div
      className={`w-full z-40 fixed justify-between top-0 text-fontColor bg-${navBackground} flex flex-col md:flex-row py-7 xl:py-10 px-20 items-center z-30`}
    >
      <Logo />
      <div className="flex gap-4 items-center text-4xl">
        <Socials />

        <button
          className="px-3 py-2 text-base hidden md:block"
          onClick={() =>
            window.open(
              "https://www.lsesu.com/communities/societies/group/big/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Join Us
        </button>
        {/* <div>
          <Profile />
        </div> */}
        <Menu setScroll={setScroll} />
      </div>
    </div>
  );
};

export default Navbar;

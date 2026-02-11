"use client";
import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const DropDownLi = ({
  setState,
  liYear,
  setOpen,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  liYear: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li
      className="py-4 px-5 text-xl hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        setState(liYear);
        setOpen(false); // Close the dropdown after selecting
      }}
    >
      {liYear}
    </li>
  );
};

const Dropdown = ({
  state,
  setState,
  options,
  size = "default",
}: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  size?: "small" | "default";
}) => {
  const [open, setOpen] = useState(false);
  const sizeStyles = {
    small: "px-3 py-2 text-sm md:px-6 md:py-3 md:text-lg",
    default: "px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl",
  };
  return (
    <div>
      <div className="relative">
        <button
          className={`inline-flex items-center gap-2 rounded-md bg-background text-white font-semibold shadow-lg focus:outline-none ${sizeStyles[size]}`}
          onClick={() => setOpen(!open)}
        >
          {state}
          <FaChevronDown className="md:w-6 md:h-6 w-4 h-4 text-white" />
        </button>

        <ul
          className={`origin-top absolute top-full w-max right-0 mt-2 rounded-lg shadow-lg bg-white focus:outline-none transition-all duration-200 ease-out overflow-hidden z-50 ${
            open ? `h-[${60 * options.length}px]` : "h-0 ring-0"
          }`}
        >
          {options.map((option, index) => (
            <DropDownLi
              setState={setState}
              liYear={option}
              setOpen={setOpen}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

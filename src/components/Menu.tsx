import { useState } from "react";
import { MdOutlineMenu, MdMenu } from "react-icons/md";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full justify-between items-center p-2 ">
      <div className="flex items-center w-full p-2">
        <img className="w-[70px]" src="/Logo.png" alt="Logo" />
      </div>
      <button
        className="text-3xl text-white sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdMenu /> : <MdOutlineMenu />}
      </button>
      <ul className="hidden w-full items-center sm:flex sm:gap-5 sm:justify-end text-white font-medium text-sm p-2">
        <li>
          <a href="#Home" className="hover:text-indigo-500 transition-all">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-indigo-500 transition-all">
            About
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="hover:text-indigo-500 transition-all"
          >
            Experience
          </a>
        </li>
        <li>
          <a href="#Stacks" className="hover:text-indigo-500 transition-all">
            Stacks
          </a>
        </li>
        <li>
          <a href="#Projects" className="hover:text-indigo-500 transition-all">
            Projects
          </a>
        </li>
      </ul>
      <ul
        className={`absolute top-18 left-0 w-full h-dvh bg-[#1c1c1e] flex flex-col gap-5 p-10 text-white font-medium text-sm sm:hidden
          transform transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }`}
      >
        <li>
          <a
            href="#Home"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-500 transition-all"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-500 transition-all"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-500 transition-all"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Stacks"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-500 transition-all"
          >
            Stacks
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-500 transition-all"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

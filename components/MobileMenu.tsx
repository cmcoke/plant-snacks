"use client";

import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const avertaSemibold = localFont({ src: "../fonts/Averta-Semibold.woff2" });

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* hamburger icon */}
      <button className="col-start-2 col-end-3  text-gray-700 w-5 h-5 relative focus:outline-none bg-[#f4f2f0] xl:hidden" onClick={() => setOpen(!open)}>
        <span className="sr-only">Open main menu</span>
        <div className=" w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`}></span>
          <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "opacity-0" : ""}`}></span>
          <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`}></span>
        </div>
      </button>

      {/* mobile nav */}
      <nav className={`${open ? "" : "hidden"} absolute z-[110] overflow-hidden w-screen h-[calc(100vh_-_9.6rem)] m-0 p-0 left-0 top-full bg-white`}>
        <ul>
          <li className="min-h-[1rem] m-0 px-[clamp(0.75rem,0.687rem_+_0.313vw,0.938rem)]  py-[clamp(0.5rem,0.11rem_+_1.949vw,1.6rem)] landscape:py-[.1rem]  border-t-[#e1dcd6] border-t border-solid">
            <Link href="/" className={`${avertaSemibold.className}  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c]`}>
              shop
            </Link>
          </li>
          <li className="min-h-[1rem] m-0 px-[clamp(0.75rem,0.687rem_+_0.313vw,0.938rem)] py-[clamp(0.5rem,0.11rem_+_1.949vw,1.6rem)] landscape:py-[.1rem]  border-t-[#e1dcd6] border-t border-solid">
            <Link href="/" className={`${avertaSemibold.className}  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c]`}>
              about us
            </Link>
          </li>
          <li className="min-h-[1rem] m-0 px-[clamp(0.75rem,0.687rem_+_0.313vw,0.938rem)] py-[clamp(0.5rem,0.11rem_+_1.949vw,1.6rem)] landscape:py-[.1rem]  border-t-[#e1dcd6] border-t border-solid">
            <Link href="/" className={`${avertaSemibold.className}  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c]`}>
              find us
            </Link>
          </li>
          <li className="min-h-[1rem] m-0 px-[clamp(0.75rem,0.687rem_+_0.313vw,0.938rem)] py-[clamp(0.5rem,0.11rem_+_1.949vw,1.6rem)] landscape:py-[.1rem]  border-y-[#e1dcd6] border-y border-solid">
            <Link href="/" className={`${avertaSemibold.className}  text-[1rem] leading-[2.4rem] tracking-[0.25px] no-underline text-[#312a2c]`}>
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MobileMenu;

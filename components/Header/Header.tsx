"use client";

import Brand from "../Models/Brand";
import SandwichMenu from "./SandwichMenu";
import Navigation from "../Models/Navigation";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full sticky top-0 py-8.75 z-100 bg-white md:py-16">
        <div className="w-[87.2%] mx-auto flex items-center justify-between md:w-[89.713%] xl:w-[77.222%]">
          <Brand color="#333136" />
          <div>
            <div className="md:hidden">
              <SandwichMenu isOpen={isOpen} handleOnClick={handleOnClick} />
            </div>
            <div className="hidden md:inline-block">
              <Navigation color={"#333136"} />
            </div>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isOpen} />
    </>
  );
}

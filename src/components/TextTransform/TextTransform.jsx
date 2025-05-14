import React from "react";
import { FlipWords } from "./Flip-words";

export function FlipWordsDemo() {
  const words = ["Personal", "Wedding", "Fashion", "exhibitions", "Concerts & Shows"];

  return (
    <div className="lg:h-[10rem] sm:h-[5rem]   flex font-extrabold justify-center items-center px-4">
      <b> <div
         className="lg:text-4xl sm:text-[24px]  mx-auto font-normal text-gray-90 dark:text-neutral-400">
       <center> Plan unforgettable
        <FlipWords className="text-[#ee393e]" words={words} /> Events with ease!
         </center>
      </div></b>
    </div>
  );
}

export default FlipWordsDemo;
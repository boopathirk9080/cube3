// "use client";

// import { motion } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { AuroraBackground } from "../SectionHead/Aurora-background";
// import SplitText from "../SectionHead/SplitText";
// import Aurora from "../AuroraBg/Aurora";
// export function ServicesHead() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const container = textRef.current;
//     if (!container) return;

//     // Select all span elements inside the container
//     const spans = container.querySelectorAll("span");
//     let letterCount = 0;

//     spans.forEach((span) => {
//       const char = span.textContent || "";
//       if (char.trim() === "") {
//         // Keep default/black for spaces
//         span.style.color = "#000000";
//       } else {
//         // Apply color logic for the first 5 letters
//         span.style.color = letterCount < 4 ? "#000000" : "#ef4949";
//         letterCount++;
//       }
//     });
//   }, []);

//   return (
//     <div className="bg-gradient-to-t from-[#ffffff] via-[#d6cccc] to-[#661717] mb-10 " >
//          <Aurora
//         colorStops={["#e23", "#e32", "#FF3232"]}
//         blend={0.5}
//         amplitude={1.0}
//         speed={0.5}
//       />
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4  "
//       >
//         <div
//           ref={textRef}
//           className="text-2xl md:text-4xl font-bold text-center"
//         >
//           <SplitText
//             text="OUR SERVICES"
//             className="inline-block"
//             delay={150}
//             animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//             animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//             easing="easeOutCubic"
//             threshold={0.2}
//             rootMargin="-50px"
//           />

//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default ServicesHead;







import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "../SectionHead/SplitText";
import sun from "../assets/logo/sun.svg";

export function ServicesHead() {
  const textRef = useRef(null);

  useEffect(() => {
    const container = textRef.current;
    if (!container) return;

    const spans = container.querySelectorAll("span");
    let letterCount = 0;

    spans.forEach((span) => {
      const char = span.textContent || "";
      if (char.trim() === "") {
        span.style.color = "#000000";
      } else {
        span.style.color = letterCount < 5 ? "#ffff" : "#ffff";
        letterCount++;
      }
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-80 pt-35  md:h-[20rem] lg:pt-20 rounded-b-lg flex items-center justify-center">
      {/* Arrow Pattern Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10"></div> */}

        {/* Animated Sun SVG */}
        <motion.div
          className="absolute inset-[-10px] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
          animate={{
            scale: [1, 1.2],
            // rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={sun} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/5"></div>
      </div>

      {/* Content with Beams */}
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div ref={textRef} className="text-2xl md:text-4xl font-bold text-center relative z-10">
          <SplitText
            text="OUR SERVICES"
            className="inline-block"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesHead;

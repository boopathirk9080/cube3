"use client";


// import { AuroraBackground } from "./Aurora-background";

// export function AuroraBackgroundDemo() {


//   return (
//     <AuroraBackground className="bg-gradient-to-t from-[#ffffff] via-[#d6cccc] to-[#661717] " >
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
//             text="ABOUT CUBE3 EVENTS"
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
//     </AuroraBackground>
//   );
// }

// export default AuroraBackgroundDemo;




// import React from "react";
// import { BackgroundBeamsWithCollision } from "./Background-beams-with-collision";
// import { motion } from "framer-motion";
// import  { useEffect, useRef } from "react";
// import SplitText from "./SplitText";
// export function AboutHead() {
//    const textRef = useRef(null);

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
//         span.style.color = letterCount < 6 ? "#ef4949" : "#000000";
//         letterCount++;
//       }
//     });
//   }, []);
//   return (
//     <BackgroundBeamsWithCollision>
//      <div

//         className="relative flex flex-col gap-4 items-center justify-center px-4  "
//       >
//         <div
//           ref={textRef}
//           className="text-2xl md:text-4xl font-bold text-center"
//         >
//           <SplitText
//             text="ABOUT CUBE3 EVENTS"
//             className="inline-block"
//             delay={150}
//             animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//             animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//             easing="easeOutCubic"
//             threshold={0.2}
//             rootMargin="-50px"
//           />

//         </div>
//       </div>
//     </BackgroundBeamsWithCollision>
//   );
// }
// export default AboutHead;













// import React from "react";
// import { BackgroundBeamsWithCollision } from "./Background-beams-with-collision";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import SplitText from "./SplitText";

// export function AboutHead() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const container = textRef.current;
//     if (!container) return;

//     const spans = container.querySelectorAll("span");
//     let letterCount = 0;

//     spans.forEach((span) => {
//       const char = span.textContent || "";
//       if (char.trim() === "") {
//         span.style.color = "#000000";
//       } else {
//         span.style.color = letterCount < 6 ? "#ef4949" : "#000000";
//         letterCount++;
//       }
//     });
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">

//       {/* Pattern Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/5"></div>
//       </div>

//       {/* Content with Beams */}
//       <BackgroundBeamsWithCollision>

//         <div className="relative flex flex-col gap-4 items-center justify-center px-4">
//           <div
//             ref={textRef}
//             className="text-2xl md:text-4xl font-bold text-center relative z-10"
//           >
//             <SplitText
//               text="ABOUT CUBE3 EVENTS"
//               className="inline-block"
//               delay={150}
//               animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//               animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//               easing="easeOutCubic"
//               threshold={0.2}
//               rootMargin="-50px"
//             />
//           </div>
//         </div>
//       </BackgroundBeamsWithCollision>
//     </div>
//   );
// }

// export default AboutHead;









// import React from "react";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import SplitText from "./SplitText";
// import sun from "../assets/logo/sun.svg";
// export function AboutHead() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const container = textRef.current;
//     if (!container) return;

//     const spans = container.querySelectorAll("span");
//     let letterCount = 0;

//     spans.forEach((span) => {
//       const char = span.textContent || "";
//       if (char.trim() === "") {
//         span.style.color = "#000000";
//       } else {
//         span.style.color = letterCount < 6 ? "#ffff" : "#000000";
//         letterCount++;
//       }
//     });
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden h-50 md:h-[20rem] lg:pt-20 pt-20   rounded-b-lg   flex items-center  justify-center ">

//       {/* Arrow Pattern Background Layer */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10"></div>
//         <div className="absolute inset-0 opacity-100 bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)]" 
//              ><img src={sun} alt="" />
//         </div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/5"></div>
//       </div>

//       {/* Content with Beams */}
//       <>
//         <div className="relative flex flex-col gap-4 items-center justify-center px-4">
//           <div
//             ref={textRef}
//             className="text-2xl md:text-4xl font-bold text-center relative z-10"
//           >
//             <SplitText
//               text="ABOUT CUBE3 EVENTS"
//               className="inline-block"
//               delay={150}
//               animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
//               animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
//               easing="easeOutCubic"
//               threshold={0.2}
//               rootMargin="-50px"
//             />
//           </div>
//         </div>
//       </>
//     </div>
//   );
// }

// export default AboutHead;








import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import sun from "../assets/logo/sun.svg";

export function AboutHead() {
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
        span.style.color = letterCount < 6 ? "#fff" : "##c92d2d";
        letterCount++;
      }
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-50 md:h-[20rem] lg:pt-20 pt-20 rounded-b-lg flex items-center justify-center">
      {/* Arrow Pattern Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10"></div> */}

        {/* Animated Sun SVG */}
        <motion.div
          className="absolute inset-[-10px] bg-[size:150px_150px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
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
            text="ABOUT CUBE3 EVENTS"
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

export default AboutHead;

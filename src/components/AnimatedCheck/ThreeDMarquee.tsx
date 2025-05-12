// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./Cardhook";

// export function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-6xl h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           Make things float in air
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 lg:text-xl sm:text-2xl text-justify lg:max-w-2x mt-2 dark:text-neutral-300"
//         >
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius ab
//           quia harum perspiciatis, modi maiores ipsam animi error, numquam odio
//           aspernatur molestiae labore fugit nesciunt id voluptate laboriosam
//           delectus!
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <img
//             src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as="a"
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//            <CardItem
//             translateZ={20}
//             as="a"
//             href="contact"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             <button>
//               Check it
//             </button>
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// }
// export default ThreeDCardDemo;



"use client";

import React from "react";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  return (
    <div className="min-h-full pb-5 flex items-center justify-center bg-white px-4 dark:bg-black">
      <motion.div
        className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-6xl h-auto rounded-xl p-6 border"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-neutral-600 dark:text-white">
          Our Team
        </h2>
        <div className="text-neutral-500 lg:text-xl sm:text-2xl text-justify lg:max-w-2x mt-2 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius ab
          quia harum perspiciatis, modi maiores ipsam animi error, numquam odio
          aspernatur molestiae labore fugit nesciunt id voluptate laboriosam
          delectus!
        </div>
        <div className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>
        <div className="flex justify-between items-center mt-20">
          <div className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </div>
          <div className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            <button className=" cursor-pointer " >Check it</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ThreeDCardDemo;

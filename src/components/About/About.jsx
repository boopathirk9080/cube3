// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { about } from '../data/data';

// function About() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="bg-gradient-to-b from-[#112240] to-[#324c72] min-h-screen flex items-center px-6 sm:px-12 py-16">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
//         {about.map((val, i) => (
//           <React.Fragment key={i}>
//             <img src={val.coverpik} alt="" />
//             {/* Left Side - Profile Image */}
//             <div className="flex justify-center" data-aos="fade-right">
//               <img
//                 src={val.profilepik}
//                 alt="Profile"
//                 className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-xl border-4 border-[#64ffda] transform hover:scale-105 transition duration-500"
//               />
//             </div>

//             {/* Right Side - About Content */}
//             <div className="md:col-span-2 text-center md:text-left space-y-4" data-aos="fade-left">
//               <h2 className="text-3xl font-bold text-[#64ffda]">About Me</h2>
//               <p className="text-lg text-[#8892b0] leading-relaxed">{val.desc}</p>
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default About;





import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { about } from "../data/data";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center px-6 sm:px-12 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${about[0].coverpik})` }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center w-full">
        {about.map((val, i) => (
          <React.Fragment key={i}>
            <div className="flex justify-center" data-aos="fade-right">
              <img
                src={val.profilepik}
                alt="Profile"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-xl border-4 border-[#64ffda] transform hover:scale-105 transition duration-500"
              />
            </div>

            <div className="md:col-span-2 text-center md:text-left space-y-4" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
              <h2 className="text-3xl font-bold text-[#64ffda] ">About Me</h2>
              <p className="text-lg text-white leading-relaxed">{val.desc}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default About;

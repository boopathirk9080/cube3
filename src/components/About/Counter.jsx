// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// const CounterData = [
//     { value: 2, label: "Years in Business", desc: "Creating the successful path" },
//     { value: 56, label: "Projects Delivered", desc: "In last 2 years" },
//     { value: 28, label: "Happy Clients", desc: "Working for your success" },
// ];

// function Counter() {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     // Counter animation
//     const [counts, setCounts] = useState(CounterData.map(() => 0));

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCounts((prevCounts) =>
//                 prevCounts.map((count, i) =>
//                     count < CounterData[i].value ? count + 1 : count
//                 )
//             );
//         }, 20);

//         return () => clearInterval(interval);
//     }, []);

//     return (

//         <section className=" flex items-center sm:pb-[50px]  lg:h-[100%]  justify-center  px-6 sm:px-2.5  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#e8e8e849]">

//             <div className="  mx-auto text-center">
//                 <br />
//                 <br />
//                 <h2 className="text-4xl font-bold text-black " data-aos="fade-up">
//                     Achievements
//                 </h2>
//                 <p className="text-black text-2xl max-w-2xl py-6 mx-auto" data-aos="fade-up">
//                     We handle every aspect of your event with precision and creativity,
//                     ensuring a seamless experience from start to finish.
//                 </p>
//                 {/* Counter Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 pb-[30px]   md:grid-cols-3 gap-10">
//                     {CounterData.map((item, index) => (
//                         <div key={index} className="p-6  rounded-lg bg-[#5e6c84] shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up">
//                             <h3 className="text-5xl font-bold text-[#3795c4] mb-2">
//                                 {counts[index]}+
//                             </h3>
//                             <p className="text-xl text-white font-semibold">{item.label}</p>
//                             <p className="text-gray-300 mt-2">{item.desc}</p>
//                         </div>
//                     ))}
//                     {/* <br /> */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Counter;


import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CounterData = [
  { value: 5, label: "Years in Business", desc: "Creating the successful path" },
  { value: 56, label: "Projects Delivered", desc: "In last 2 years" },
  { value: 28, label: "Happy Clients", desc: "Working for your success" },
];

function Counter() {
  const [counts, setCounts] = useState(CounterData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: false
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          AOS.refresh();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startTimeRef.current = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current;
        const progress = Math.min(elapsed / 3000, 1); // 3-second duration
        
        setCounts(CounterData.map(item => 
          Math.floor(item.value * progress)
        ));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure final exact values
          setCounts(CounterData.map(item => item.value));
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="flex items-center sm:pb-[50px] lg:h-[100%] justify-center px-6 sm:px-2.5 bg-gradient-to-t from-[#fbd6d7] to-[#f8f8f8]"
    >
      <div className="mx-auto text-center">
        <br />
        <br />
        <h2 className="text-4xl font-bold text-black " data-aos="fade-up">
          Achievements
        </h2>
        <p className="text-black text-2xl max-w-2xl py-6 mx-auto" data-aos="fade-up">
          We handle every aspect of your event with precision and creativity,
          ensuring a seamless experience from start to finish.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 pb-[30px] md:grid-cols-3 gap-16">
          {CounterData.map((item, index) => (
            <div 
              key={index} 
              className="px-20 py-8 rounded-lg bg-[#a3161a0d] shadow-lg transform hover:scale-105 transition duration-300" 
              data-aos="fade-up"
              data-aos-delay={index * 150} // Staggered animations
            >
              <h3 className="text-6xl font-bold text-[#990f11c5] mb-2">
                {counts[index]}+
              </h3>
              <p className="text-3xl text-black font-semibold">{item.label}</p>
              <p className="text-gray-700 text-xl mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
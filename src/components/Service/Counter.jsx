import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CounterData = [
    { value: 2, label: "Years in Business", desc: "Creating the successful path" },
    { value: 56, label: "Projects Delivered", desc: "In last 2 years" },
    { value: 28, label: "Happy Clients", desc: "Working for your success" },
];

function Counter() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Counter animation
    const [counts, setCounts] = useState(CounterData.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prevCounts) =>
                prevCounts.map((count, i) =>
                    count < CounterData[i].value ? count + 1 : count
                )
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        
        <section className=" flex items-center sm:pb-[50px]  lg:h-[100%] justify-center rounded-b-3xl px-6 sm:px-2.5  bg-gradient-to-b from-[#020d1c] via-[#081b2f] to-[#0e2952]">
           
            <div className="  mx-auto text-center">
                <br />
                <br />
                <h2 className="text-4xl font-bold text-white mb-8" data-aos="fade-up">
                    Achievements
                </h2>

                {/* Counter Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 pb-[30px] md:grid-cols-3 gap-10">
                    {CounterData.map((item, index) => (
                        <div key={index} className="p-6  rounded-lg bg-[#112240] shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up">
                            <h3 className="text-5xl font-bold text-[#3795c4] mb-2">
                                {counts[index]}+
                            </h3>
                            <p className="text-xl text-white font-semibold">{item.label}</p>
                            <p className="text-gray-300 mt-2">{item.desc}</p>
                        </div>
                    ))}
                    {/* <br /> */}
                </div>
            </div>
        </section>
    );
}

export default Counter;

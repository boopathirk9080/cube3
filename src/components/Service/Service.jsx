


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../data/data";
import { Card, CardContent, Typography } from "@mui/material";
import Counter from "./Counter";

function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 bg-gradient-to-b from-[#070433] via-[#02121e] to-[#010810]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-gray-300 mb-12">We provide high-quality services tailored to your needs.</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card style={{ backgroundColor: "#2c5c74" }}
              key={index}

              className="shadow-lg @theme {
  --color-regal-blue: #243c5a; 
} rounded-xl   bg-opacity-80 backdrop-blur-md border border-[#13273a] transform hover:scale-105 hover:shadow-blue-500/70 transition duration-300"
              data-aos="fade-up"
            >
              <div >
                <CardContent className="flex flex-col   items-center  text-center p-6">
                  <div className=" text-5xl mb-4">{React.createElement(service.icon)}</div>
                  <Typography variant="h6" className="text-[#b6bac8] font-semibold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-[#b6bac]8 mt-2">
                    {service.desc}
                  </Typography>
                </CardContent>
              </div>

            </Card>
          ))}
        </div>
      </div>
      <Counter />
    </section>
  );
}

export default Service;

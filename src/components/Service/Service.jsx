import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { services } from "./services";
import ServiceDetailsModal from "./ServiceDetailsModal";
import { FlipWords } from "../TextTransform/Flip-words";
import { CgArrowTopLeftR } from "react-icons/cg";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import Aos from "aos";

const ServicesSection = () => {
  useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            offset: 100
        });
        
        return () => Aos.refresh();
    }, []);
  const words = [
    "Personal",
    "Wedding",
    "Fashion",
    "Exhibitions",
    "Concerts",
    "Shows",
  ];
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ← NEW: how many items are visible
  const [visibleCount, setVisibleCount] = useState(3);
  const sentinelRef = useRef(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // ← NEW: observe the “sentinel” div to load one more item when it scrolls into view
  useEffect(() => {
    if (visibleCount >= services.length) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((c) => Math.min(c + 1, services.length));
        }
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    if (sentinelRef.current) io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [visibleCount]);

  return (
    <section
      // id="services"
      className="bg-gradient-to-t from-[#fdeced] to-[#fbd6d7] py-8  md:pyb-32 scroll-smooth" // ← smooth scroll
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="text-3xl md:text-4xl max-w-2xl text-[#000] font-montserrat font-bold mb-4">
            We Craft <FlipWords className=" text-[#ee393e]" words={words} />Celebrations
          </h2> */}
          {/* <center> */}
          <h2 className="text-3xl lg:block hidden sm:text-4xl sm:ml-[20px] lg:text-center text-left md:text-5xl text-[#000] font-montserrat font-bold mb-4">
            {/* Desktop View */}
            <span className="hidden sm:inline">
              We Craft{" "}
              <span>
                {" "}
                <FlipWords className="text-[#ee393e] inline" words={words} />
              </span>{" "}
              Celebrations
            </span>
          </h2>
          <h2 className="text-5xl block lg:hidden bg-[#ee393f16] w-[100%] py-3 rounded-2xl  sm:text-4xl sm:ml-[15px] lg:text-center text-left md:text-5xl text-[#000] font-montserrat font-bold mb-4">
            {/* Mobile View */}
            <span className="block  ">
              <span className="pl-5">We</span>
              <br />
              <span className="pl-5">Craft</span>
              <br />
              <span>
                <FlipWords
                  className="text-[#ee393e] ml-0 px-5 block mt-2"
                  words={words}
                />
              </span>{" "}
              <span className="text-5xl pl-5 "> Celebrations</span>
            </span>
          </h2>

          {/* </center> */}
          <p className="text-[#000000] px-5 lg:text-center text-left max-w-2xl mx-auto">
            We handle every aspect of your event with precision and creativity,
            ensuring a seamless experience from start to finish.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:px-18 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.slice(0, visibleCount).map((service) => (
            <motion.div
              key={service.id}
              className="bg-[#f8b0b2] hover:bg-[#f8a9ab] p-3 rounded-[24px]  shadow-2xl   hover:shadow-[#fafafa]   hover:border-[#ef4949] transition-all duration-300 h-full group cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              onClick={() => handleServiceClick(service)}
            >
              {/* …all your existing inner markup untouched… */}
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ef4949] to-transparent opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8" /> */}
              <div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl h-auto"
                />
              </div>
              <div className="text-[#ef4949] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas fa-${service.icon}`} />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3 text-black group-hover:text-[#fdeced] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#000] mb-6">{service.description}</p>
              <div className="flex justify-between items-center">
                <motion.button
                  className="text-[#ef4949] inline-flex items-center font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn more <i className="fas fa-arrow-right ml-2 text-sm" />
                </motion.button>
                <div className="w-10 h-10 text-[#000000]  bg-[#ef4949]  font-bold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-10 group-hover:translate-x-0">
                  {/* <i className="fas fa-plus text-[#ef4949]" />
                   */}
                  {/* <CgArrowTopLeftR /> */}
                  <BsBoxArrowUpLeft className="" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#ef4949] w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

          {/* ← NEW: sentinel to trigger loading next item */}
          <div ref={sentinelRef} className="h-1" />
        </motion.div>
      </div>

      <ServiceDetailsModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ServicesSection;

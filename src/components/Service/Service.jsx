import { motion } from "framer-motion"
import React, { useState, useEffect, useRef } from "react";
import { services } from "./services";
import ServiceDetailsModal from "./ServiceDetailsModal";

const ServicesSection = () => {
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
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
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
      className="bg-[#e8e8e849] py-20 md:py-32 scroll-smooth"   // ← smooth scroll
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-[#000] font-montserrat font-bold mb-4">
            Our <span className="text-[#ef4949]">Services</span>
          </h2>
          <p className="text-[#000000] max-w-2xl mx-auto">
            We handle every aspect of your event with precision and creativity,
            ensuring a seamless experience from start to finish.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.slice(0, visibleCount).map((service) => (
            <motion.div
              key={service.id}
              className="bg-[#ffff] p-3 rounded-xl  shadow-2xl   hover:shadow-[#fafafa]   hover:border-[#ef4949] transition-all duration-300 h-full group cursor-pointer relative overflow-hidden"
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
                <img src={service.image} alt={service.title} className="w-full h-auto" />
              </div>
              <div className="text-[#ef4949] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas fa-${service.icon}`} />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3 text-black group-hover:text-[#ef4949] transition-colors">
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
                <div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-10 group-hover:translate-x-0">
                  <i className="fas fa-plus text-[#ef4949]" />
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

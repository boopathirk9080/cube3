import { motion } from "framer-motion";
import base1 from '../assets/missionvision/mission.jpg'
const AboutBase = () => {
  return (
    <div className="pt-10 pb-10" >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          <span className="text-[#ef4949]">About</span>
        </h2>
        <p className="text-black max-w-2xl p-5 text-lg sm:text-2xl mx-auto">
          We handle every aspect of your event with precision and creativity,
          ensuring a seamless experience from start to finish.
        </p>
      </motion.div>
      <section className="relative w-full max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl flex flex-col md:flex-row items-center py-8 px-4  md:py-12 md:px-8 overflow-hidden gap-8x">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Side Content */}
          <div className=" lg:w-[400px] lg:h-[400px] sm:w-full sm:h-[400px]  mx-auto">
            <img
              src={base1}
              alt="Digital Ecosystem"
              className="  object-cover rounded-xl shadow-xl"
            />
          </div>
         

          {/* Right Side Image */}
           <div className="w-full lg:w-1/2 px-8 space-y-8">
            <h2 className="text-4xl font-bold text-[#ef4949] leading-tight text-left lg:text-left">
              Shaping Tomorrow's Digital Ecosystems
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify lg:text-justify">
              We architect intelligent solutions at the nexus of innovation and sustainability.
              Harnessing AI and human-centric design, we transform complex challenges into
              seamless digital experiences that propel businesses into new dimensions of success.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default AboutBase;

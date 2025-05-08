import { motion } from "framer-motion";

const AboutCard = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // const backgroundImage =
  //   "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="bg-[#ffff] py-20 md:py-32 mt-0 z-0">
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
        <p className="text-black max-w-2xl mx-auto">
          We handle every aspect of your event with precision and creativity,
          ensuring a seamless experience from start to finish.
        </p>
      </motion.div>
      <motion.div
        className="max-w-max mx-auto rounded-xl shadow-md overflow-hidden md:max-w-7xl m-4 relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 w-[1200px]" />
        {/* <img
          src={backgroundImage}
          alt="Team background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}

        {/* Content */}
        <div className="relative z-10 md:flex">
          <div className="p-8 backdrop-blur-sm bg-white md:bg-transparent">
            <motion.div animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {/* <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                About Us
              </div> */}
              <p className="mt-2 text-gray-700 md:text-gray-900">
                Discover our story and the passionate team behind our success.
                We're dedicated to delivering exceptional value and innovative
                solutions to our clients. Discover our story and the passionate
                team behind our success. We're dedicated to delivering
                exceptional value and innovative solutions to our clients.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
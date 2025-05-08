import React from 'react';
import { motion } from "framer-motion";

function ValueAddition() {
    return (
        <div id='valueaddition' className="bg-[#ffff] py-20 md:py-32 mt-0 z-0">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl text-black font-montserrat font-bold mb-4">
                    Value <span className="text-[#ef4949]">Addition</span>
                </h2>
                <p className="text-black max-w-2xl mx-auto">
                    We handle every aspect of your event with precision and creativity,
                    ensuring a seamless experience from start to finish.
                </p>
            </motion.div>
            <div className="text-gray-600 text-left max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg">
                <p>Cube3 Events doesn’t start or stop with just product promotions or photo albums. A host of value-added services are offered to our valuable customers and ….just to mention some of these……</p>
                <div className="mt-4 space-y-2">
                    <p>Celebrity management for all events</p>
                    <p>Event venues / marketing / production / fabrication / catering / streaming / security / manpower</p>
                    <p>Delegate Management</p>
                    <p>Tourist activities – heritage walks, photo walks, food walks, ethnic walks etc.</p>
                    <p>Corporate gift management (including cost-effective sourcing)</p>
                </div>
            </div>
        </div>
    );
}

export default ValueAddition;

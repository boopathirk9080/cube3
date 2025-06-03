"use client";
import WorldMap from "./world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
    return (
        <div className="   w-[100%]  h-[100vh]">
            <div className=" mx-auto text-center ">
                <p className="font-bold text-xl md:text-4xl dark:text-white pt-8 text-black mb-4">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >OUR{" "}
                        <span className="text-neutral-400">
                            {"CONNECTIONS".split("").map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    className="inline-block"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </motion.div>
                </p>
                <p className="text-sm md:text-lg px-5 text-neutral-500 max-w-2xl mx-auto lg:mb-0 mb-8">
                    Break free from traditional boundaries. Work from anywhere, at the
                    comfort of your own studio apartment. Perfect for Nomads and
                    Travellers.
                </p>

                {/* Map Container */}

                {/* <div className=" lg:block hidden  relative w-full h-[60vh] lg:h-[80vh] aspect-video overflow-hidden md:overflow-visible">
                    <div className=" md:transform-none transform lg:scale-100 scale-120 origin-center mt-[10px] lg:mt-[0px] lg:pt-0 pt:5 lg:pb-0 pb-45">
                        <WorldMap
                            dots={[
                                {
                                    start: { lat: -100.5, lng: -35.4937, name: "Tamil Nadu" },
                                    end: { lat: 34.0522, lng: -118.2437, name: "Kerala" },
                                },
                                {
                                    start: { lat: 80.2008, lng: -149.4937, name: "Tamil Nadu" },
                                    end: { lat: -15.7975, lng: -47.8919, name: "Bangalore" },
                                },
                                {
                                    start: { lat: -15.7975, lng: -47.8919, name: "TamilNadu " },
                                    end: { lat: 38.7223, lng: -9.1393, name: "Lisbon" },
                                },
                                {
                                    start: { lat: 51.5074, lng: -0.1278, name: "London" },
                                    end: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                    end: { lat: 43.1332, lng: 131.9113, name: "Vladivostok" },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                    end: { lat: -1.2921, lng: 36.8219, name: "Nairobi" },
                                },
                            ]}
                        />
                    </div>

                </div>

                <div className=" lg:hidden block relative w-full h-[60vh] lg:h-[80vh] aspect-video overflow-hidden md:overflow-visible">
                    <div className="  md:transform-none transform lg:scale-100 scale-120 origin-center mt-[10px] lg:mt-[0px] lg:pt-0 pt:5 lg:pb-0 pb-45">
                        <WorldMap 
                            dots={[
                                {
                                    start: { lat: -100.5, lng: -35.4937, name: "Tamil Nadu" },
                                    end: { lat: 34.0522, lng: -118.2437, name: "Kerala" },
                                },
                                {
                                    start: { lat: 80.2008, lng: -149.4937, name: "Tamil Nadu" },
                                    end: { lat: -15.7975, lng: -47.8919, name: "Bangalore" },
                                },
                                {
                                    start: { lat: -15.7975, lng: -47.8919, name: "TamilNadu " },
                                    end: { lat: 38.7223, lng: -9.1393, name: "Lisbon" },
                                },
                                {
                                    start: { lat: 51.5074, lng: -0.1278, name: "London" },
                                    end: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                    end: { lat: 43.1332, lng: 131.9113, name: "Vladivostok" },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209, name: "New Delhi" },
                                    end: { lat: -1.2921, lng: 36.8219, name: "Nairobi" },
                                },
                            ]}
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default WorldMapDemo;



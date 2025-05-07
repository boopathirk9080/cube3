// "use client";
// import WorldMap from "./world-map";
// import { motion } from "motion/react";

// export function WorldMapDemo() {
//   return (
//     <div className=" py-40 dark:bg-black bg-white w-full">
//       <div className="max-w-7xl mx-auto text-center">
//         <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
//           Remote{" "}
//           <span className="text-neutral-400">
//             {"Connectivity".split("").map((word, idx) => (
//               <motion.span
//                 key={idx}
//                 className="inline-block"
//                 initial={{ x: -10, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.04 }}>
//                 {word}
//               </motion.span>
//             ))}
//           </span>
//         </p>
//         <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
//           Break free from traditional boundaries. Work from anywhere, at the
//           comfort of your own studio apartment. Perfect for Nomads and
//           Travellers.
//         </p>
//       </div>
//       <WorldMap
//         dots={[
//           {
//             start: {
//               lat: 64.2008,
//               lng: -149.4937,
//             }, // Alaska (Fairbanks)
//             end: {
//               lat: 34.0522,
//               lng: -118.2437,
//             }, // Los Angeles
//           },
//           {
//             start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
//             end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//           },
//           {
//             start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//             end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
//           },
//           {
//             start: { lat: 51.5074, lng: -0.1278 }, // London
//             end: { lat: 28.6139, lng: 77.209 }, // New Delhi
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//             end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//             end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
//           },
//         ]} />
//     </div>
//   );
// }
// export default WorldMapDemo;





// src/components/WorldMapDemo.jsx
// "use client";
// import WorldMap from "./world-map";
// import { motion } from "motion/react";

// export function WorldMapDemo() {
//   return (
//     <div className="py-40 dark:bg-black bg-white w-full">
//       <div className="max-w-7xl mx-auto text-center">
//         <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
//           Remote{" "}
//           <span className="text-neutral-400">
//             {"Connectivity".split("").map((word, idx) => (
//               <motion.span
//                 key={idx}
//                 className="inline-block"
//                 initial={{ x: -10, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.04 }}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </span>
//         </p>
//         <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
//           Break free from traditional boundaries. Work from anywhere, at the
//           comfort of your own studio apartment. Perfect for Nomads and
//           Travellers.
//         </p>
//       </div>
//       <WorldMap
//         dots={[
//           {
//             start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
//             end:   { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
//           },
//           {
//             start: { lat: 64.2008, lng: -149.4937, label: "Alaska" },
//             end:   { lat: -15.7975, lng: -47.8919,  label: "Brasília" },
//           },
//           {
//             start: { lat: -15.7975, lng: -47.8919,  label: "Brasília" },
//             end:   { lat: 38.7223, lng: -9.1393,    label: "Lisbon" },
//           },
//           {
//             start: { lat: 51.5074, lng: -0.1278,    label: "London" },
//             end:   { lat: 28.6139, lng: 77.209,     label: "New Delhi" },
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209,     label: "New Delhi" },
//             end:   { lat: 43.1332, lng: 131.9113,   label: "Vladivostok" },
//           },
//           {
//             start: { lat: 28.6139, lng: 77.209,     label: "New Delhi" },
//             end:   { lat: -1.2921, lng: 36.8219,    label: "Nairobi" },
//           },
//         ]}
//       />
//     </div>
//   );
// }
// export default WorldMapDemo;











"use client";
import WorldMap from "./world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
    return (
        <div className=" py-40 dark:bg-black bg-white w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Remote{" "}
                    <span className="text-neutral-400">
                        {"Connectivity".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Break free from traditional boundaries. Work from anywhere, at the
                    comfort of your own studio apartment. Perfect for Nomads and
                    Travellers.
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                            name: "Alaska",
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                            name: "Los Angeles",
                        }, // Los Angeles
                    },
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                            name: "Alaska",
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: -15.7975,
                            lng: -47.8919,
                            name: "Brasília",
                        }, // Brazil (Brasília)
                    },
                    {
                        start: {
                            lat: -15.7975,
                            lng: -47.8919,
                            name: "Brasília",

                        }, // Brazil (Brasília)
                        end: {
                            lat: 38.7223,
                            lng: -9.1393,
                            name: "Lisbon",

                        }, // Lisbon
                    },
                    {
                        start: {
                            lat: 51.5074,
                            lng: -0.1278,
                            name: "London",
                        }, // London
                        end: {
                            lat: 28.6139,
                            lng: 77.209,
                            name: "New Delhi",
                        }, // New Delhi
                    },
                    {
                        start: {
                            lat: 28.6139,
                            lng: 77.209,
                            name: "New Delhi",

                        }, // New Delhi
                        end: {
                            lat: 43.1332,
                            lng: 131.9113,
                            name: "Vladivostok",
                        }, // Vladivostok
                    },
                    {
                        start: {
                            lat: 28.6139,
                            lng: 77.209,
                            name: "New Delhi",

                        }, // New Delhi
                        end: {
                            lat: -1.2921,
                            lng: 36.8219,
                            name: "Nairobi",

                        }, // Nairobi
                    },
                ]} />
            {/* <WorldMap
                dots={[
                    // Indian Connections
                    {
                        start: { lat: 11.6643, lng: 78.1460, name: "Salem" },
                        end: { lat: 43.6532, lng: -79.3832, name: "Toronto" }
                    },
                    {
                        start: { lat: 11.0168, lng: 76.9558, name: "Coimbatore" },
                        end: { lat: -33.8688, lng: 151.2093, name: "Sydney" }
                    },
                    {
                        start: { lat: 13.0827, lng: 80.2707, name: "Chennai" },
                        end: { lat: 49.2827, lng: -123.1207, name: "Vancouver" }
                    },
                    {
                        start: { lat: 28.6139, lng: 77.2090, name: "Delhi" },
                        end: { lat: -37.8136, lng: 144.9631, name: "Melbourne" }
                    },
                    {
                        start: { lat: 19.0760, lng: 72.8777, name: "Mumbai" },
                        end: { lat: 52.5200, lng: 13.4050, name: "Berlin" }
                    },

                    // Additional International Connections
                    {
                        start: { lat: 51.5074, lng: -0.1278, name: "London" },
                        end: { lat: 35.6762, lng: 139.6503, name: "Tokyo" }
                    },
                    {
                        start: { lat: 40.7128, lng: -74.0060, name: "New York" },
                        end: { lat: 48.8566, lng: 2.3522, name: "Paris" }
                    },
                    {
                        start: { lat: 55.7558, lng: 37.6173, name: "Moscow" },
                        end: { lat: 22.3193, lng: 114.1694, name: "Hong Kong" }
                    },
                    {
                        start: { lat: -26.2041, lng: 28.0473, name: "Johannesburg" },
                        end: { lat: -33.9249, lng: 18.4241, name: "Cape Town" }
                    }
                ]}
            /> */}
        </div>
    );
}
export default WorldMapDemo;


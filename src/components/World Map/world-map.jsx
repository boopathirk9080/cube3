
// "use client";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import logo from '../assets/logo/cube3.png';
// import IndiaMap from '../assets/indiamap/india-map.svg'
// export function WorldMap({
//     dots = [],
//     lineColor = "#0ea5e9"
// }) {
//     const svgRef = useRef(null);
//     const inView = useInView(svgRef, { once: true, amount: 0.2 });
 

//     const projectPoint = (lat, lng) => {
//         const x = (lng + 180) * (800 / 360);
//         const y = (90 - lat) * (400 / 180);
//         return { x, y };
//     };

//     const createCurvedPath = (start, end) => {
//         const midX = (start.x + end.x) / 2;
//         const midY = Math.min(start.y, end.y) - 50;
//         return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//     };

//     return (
//         <div className="w-full  dark:bg-black  rounded-lg relative  font-sans">
//             <img
//                 src={IndiaMap}
//                 className="h-full lg:h-[90vh] w-full  pointer-events-none select-none"
//                 alt="world map"
//                 draggable={false}
//             />
//             <svg
//                 ref={svgRef}
//                 viewBox="-45 -120 950 450"
//                 className="w-full h-full absolute inset-0 pointer-events-none select-none"
//             >
//                 <defs>
//                     <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="white" stopOpacity="0" />
//                         <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="100%" stopColor="white" stopOpacity="0" />
//                     </linearGradient>
//                     <div className="lg:hidden sm:block">
//                         <symbol id="location-pin" viewBox="0 0 24 24">
//                             <image
//                                 href={logo}
//                                 width="24"
//                                 height="24"
//                                 preserveAspectRatio="xMidYMid meet"
//                             />
//                         </symbol>
//                     </div>

//                     <div className="lg:block sm:hidden">
//                         <symbol id="location-pin" viewBox="0 0 44 44">
//                             <image
//                                 href={logo}
//                                 width="44"
//                                 height="44"
//                                 preserveAspectRatio="xMidYMid meet"
//                             />
//                         </symbol>
//                     </div>

//                     <style>{`
//                         .city-label {
//                             opacity: 0;
//                             transition: opacity 0.2s ease;
//                             pointer-events: none;
//                         }
//                         .pin-group:hover .city-label {
//                             opacity: 1;
//                         }
//                     `}</style>
//                 </defs>

//                 {dots.map((dot, i) => {
//                     const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//                     const endPoint = projectPoint(dot.end.lat, dot.end.lng);

//                     return (
//                         <g key={`path-group-${i}`}>
//                             <motion.path
//                                 d={createCurvedPath(startPoint, endPoint)}
//                                 fill="none"
//                                 stroke="url(#path-gradient)"
//                                 strokeWidth="1.6"
//                                 initial={{ pathLength: 0 }}
//                                 animate={inView ? { pathLength: 1 } : {}}
//                                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//                             />

//                             {/* Start Location */}
//                             <g transform={`translate(${startPoint.x},${startPoint.y})`}>
//                                 <motion.g
//                                     className="pin-group sm:hidden lg:block "
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                     style={{ pointerEvents: "auto" }}
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                     />

//                                     <text
//                                         className="city-label font-bold "
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={"#d02e32"}
//                                         textAnchor="middle"
//                                     >
//                                         {dot.start.name}
//                                     </text>
//                                 </motion.g>
//                                 <motion.g
//                                     className="pin-group sm:block lg:hidden"
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                     style={{ pointerEvents: "auto" }}
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-18"
//                                         y="-24"
//                                         width="44"
//                                         height="44"
//                                     />

//                                     <text
//                                         className="city-label font-bold "
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={"#d02e32"}
//                                         textAnchor="middle"
//                                     >
//                                         {dot.start.name}
//                                     </text>
//                                 </motion.g>
//                             </g>

//                             {/* End Location */}
//                             <g transform={`translate(${endPoint.x},${endPoint.y})`}>
//                                 <motion.g
//                                     className="pin-group lg:block sm:hidden "
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                     style={{ pointerEvents: "auto" }}

//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                     />
//                                     <text
//                                         className="city-label font-bold"
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={"#d02e32"}
//                                         textAnchor="middle"

//                                     >
//                                         {dot.end.name}
//                                     </text>
//                                 </motion.g>
//                                 <motion.g
//                                     className="pin-group sm:block lg:hidden"
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                     style={{ pointerEvents: "auto" }}

//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-18"
//                                         y="-24"
//                                         width="44"
//                                         height="44"
//                                     />
//                                     <text
//                                         className="city-label font-bold"
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={"#d02e32"}
//                                         textAnchor="middle"

//                                     >
//                                         {dot.end.name}
//                                     </text>
//                                 </motion.g>
//                             </g>
//                         </g>
//                     );
//                 })}
//             </svg>
//         </div>
//     );
// }

// export default WorldMap;














"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import logo from '../assets/logo/cube3.png';
import IndiaMap from '../assets/indiamap/india-map.svg'

export function WorldMap({
    dots = [],
    lineColor = "#0ea5e9"
}) {
    const svgRef = useRef(null);
    const inView = useInView(svgRef, { once: true, amount: 0.2 });
 

    const projectPoint = (lat, lng) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (start, end) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full  dark:bg-black  rounded-lg relative  font-sans">
            <img
                src={IndiaMap}
                className="h-full lg:h-[90vh] w-full  pointer-events-none select-none"
                alt="world map"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="-45 -120 950 450"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Fixed gradient definition for mobile compatibility */}
                    <linearGradient 
                        id="path-gradient" 
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    
                    <symbol id="location-pin-small" viewBox="0 0 24 24">
                        <image
                            href={logo}
                            width="24"
                            height="24"
                            preserveAspectRatio="xMidYMid meet"
                        />
                    </symbol>

                    <symbol id="location-pin-large" viewBox="0 0 44 44">
                        <image
                            href={logo}
                            width="44"
                            height="44"
                            preserveAspectRatio="xMidYMid meet"
                        />
                    </symbol>

                    <style>{`
                        .city-label {
                            opacity: 0;
                            transition: opacity 0.2s ease;
                            pointer-events: none;
                        }
                        .pin-group:hover .city-label {
                            opacity: 1;
                        }
                    `}</style>
                </defs>

                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);

                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1.6"
                                initial={{ pathLength: 0 }}
                                animate={inView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
                            />

                            {/* Start Location */}
                            <g transform={`translate(${startPoint.x},${startPoint.y})`}>
                                <motion.g
                                    className="pin-group lg:block sm:hidden"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin-small"
                                        x="-12"
                                        y="-24"
                                        width="24"
                                        height="24"
                                    />
                                    <text
                                        className="city-label font-bold"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={"#d02e32"}
                                        textAnchor="middle"
                                    >
                                        {dot.start.name}
                                    </text>
                                </motion.g>
                                <motion.g
                                    className="pin-group sm:block lg:hidden"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin-large"
                                        x="-18"
                                        y="-24"
                                        width="44"
                                        height="44"
                                    />
                                    <text
                                        className="city-label font-bold"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={"#d02e32"}
                                        textAnchor="middle"
                                    >
                                        {dot.start.name}
                                    </text>
                                </motion.g>
                            </g>

                            {/* End Location */}
                            <g transform={`translate(${endPoint.x},${endPoint.y})`}>
                                <motion.g
                                    className="pin-group lg:block sm:hidden"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin-small"
                                        x="-12"
                                        y="-24"
                                        width="24"
                                        height="24"
                                    />
                                    <text
                                        className="city-label font-bold"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={"#d02e32"}
                                        textAnchor="middle"
                                    >
                                        {dot.end.name}
                                    </text>
                                </motion.g>
                                <motion.g
                                    className="pin-group sm:block lg:hidden"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin-large"
                                        x="-18"
                                        y="-24"
                                        width="44"
                                        height="44"
                                    />
                                    <text
                                        className="city-label font-bold"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={"#d02e32"}
                                        textAnchor="middle"
                                    >
                                        {dot.end.name}
                                    </text>
                                </motion.g>
                            </g>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

export default WorldMap;
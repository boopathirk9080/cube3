

// "use client";
// import { useRef } from "react";
// import { motion } from "motion/react";
// import { useInView } from "framer-motion";            // ← added
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";

// export function WorldMap({
//     dots = [],
//     lineColor = "#0ea5e9"
// }) {
//     const svgRef = useRef(null);
//     const inView = useInView(svgRef, { once: true, amount: 0.2 });  // ← added

//     const map = new DottedMap({ height: 100, grid: "diagonal" });
//     const { theme } = useTheme();

//     const svgMap = map.getSVG({
//         radius: 0.22,
//         color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//         shape: "circle",
//         backgroundColor: theme === "dark" ? "black" : "white",
//         // src: "https://assets.aceternity.com/logo-dark.png",
//     });

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
//         <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
//             <img
//                 src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//                 className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//                 alt="world map"
//                 draggable={false}
//             />
//             {/* <img
//                 ref={svgRef}
//                 viewBox="0 0 800 400"
//                 className="w-full h-full absolute inset-0 pointer-events-none select-none"
//                 src="../assets/logo/cube-events-logo.png" alt="" /> */}
//             <svg
//                 ref={svgRef}                                   // ← observe this for inView
//                 viewBox="0 0 800 400"
//                 className="w-full h-full absolute inset-0 pointer-events-none select-none"
//             >
//                 {dots.map((dot, i) => {
//                     const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//                     const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//                     return (
//                         <g key={`path-group-${i}`}>
//                             <motion.path
//                                 d={createCurvedPath(startPoint, endPoint)}
//                                 fill="none"
//                                 stroke="url(#path-gradient)"
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 whileInView={inView ? { pathLength: 1 } : {}}
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//                             />
//                         </g>
//                     );
//                 })}

//                 <defs>
//                     <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="white" stopOpacity="0" />
//                         <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="100%" stopColor="white" stopOpacity="0" />
//                     </linearGradient>
//                 </defs>

//                 {dots.map((dot, i) => {
//                     const s = projectPoint(dot.start.lat, dot.start.lng);
//                     const e = projectPoint(dot.end.lat, dot.end.lng);
//                     return (
//                         <g key={`points-group-${i}`}>
//                             <motion.circle
//                                 cx={s.x} cy={s.y} r="2" fill={lineColor}
//                                 initial={{ opacity: 0 }}
//                                 whileInView={inView ? { opacity: 1 } : {}}
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 transition={{ delay: i * 0.5 }}
//                             />
//                             <motion.circle
//                                 cx={s.x} cy={s.y} r="2" fill={lineColor} opacity="0.5"
//                                 initial={{ r: 2, opacity: 0 }}
//                                 whileInView={inView ? { r: 8, opacity: 0 } : {}}
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
//                             />
//                             <motion.circle
//                                 cx={e.x} cy={e.y} r="2" fill={lineColor}
//                                 initial={{ opacity: 0 }}
//                                 whileInView={inView ? { opacity: 1 } : {}}
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 transition={{ delay: i * 0.5 }}
//                             />
//                             <motion.circle
//                                 cx={e.x} cy={e.y} r="2" fill={lineColor} opacity="0.5"
//                                 initial={{ r: 2, opacity: 0 }}
//                                 whileInView={inView ? { r: 8, opacity: 0 } : {}}
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
//                             />
//                         </g>
//                     );
//                 })}
//             </svg>
//         </div>
//     );
// }

// export default WorldMap;





// src/components/world-map.jsx
// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";

// export function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9"
// }) {
//   const svgRef = useRef(null);
//   const inView = useInView(svgRef, { once: true, amount: 0.2 });

//   const map = new DottedMap({ height: 100, grid: "diagonal" });
//   const { theme } = useTheme();
//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//     shape: "circle",
//     backgroundColor: theme === "dark" ? "black" : "white",
//   });

//   const projectPoint = (lat, lng) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (start, end) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
//       <img
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//         alt="world map"
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {/* flight paths */}
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%"   stopColor="white"      stopOpacity="0" />
//             <stop offset="5%"   stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%"  stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white"      stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {dots.map((dot, i) => {
//           const start = projectPoint(dot.start.lat, dot.start.lng);
//           const end   = projectPoint(dot.end.lat,   dot.end.lng);
//           return (
//             <g key={`group-${i}`}>
//               {/* path */}
//               <motion.path
//                 d={createCurvedPath(start, end)}
//                 fill="none"
//                 stroke="url(#path-gradient)"
//                 strokeWidth="1"
//                 initial={{ pathLength: 0 }}
//                 whileInView={inView ? { pathLength: 1 } : {}}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//               />

//               {/* start label */}
//               <text
//                 x={start.x}
//                 y={start.y - 10}                     /* offset above point */
//                 className="text-xs fill-current text-black pointer-events-none"
//               >
//                 {dot.start.label}
//               </text>

//               {/* end label */}
//               <text
//                 x={end.x}
//                 y={end.y - 10}
//                 className="text-xs fill-current text-black pointer-events-none"
//               >
//                 {dot.end.label}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }

// export default WorldMap;













// "use client";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";
// import logo from '../assets/logo/cube3.png'
// export function WorldMap({
//     dots = [],
//     lineColor = "#0ea5e9"
// }) {
//     const svgRef = useRef(null);
//     const inView = useInView(svgRef, { once: true, amount: 0.2 });
//     const map = new DottedMap({ height: 100, grid: "diagonal" });
//     const { theme } = useTheme();

//     const svgMap = map.getSVG({
//         radius: 0.22,
//         color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//         shape: "circle",
//         backgroundColor: theme === "dark" ? "black" : "white",
//     });

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
//         <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
//             <img
//                 src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//                 className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//                 alt="world map"
//                 draggable={false}
//             />
//             <svg
//                 ref={svgRef}
//                 viewBox="0 0 800 400"
//                 className="w-full h-full absolute inset-0 pointer-events-none select-none"
//             >
//                 <defs>
//                     <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="white" stopOpacity="0" />
//                         <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="100%" stopColor="white" stopOpacity="0" />
//                     </linearGradient>
//                     <symbol id="location-pin" viewBox="0 0 24 24">
//                         {/* <circle cx="12" cy="12" r="3" fill={lineColor} /> */}
//                         <img src={logo} alt="" />
//                         {/* <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /> */}
//                     </symbol>
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
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 animate={inView ? { pathLength: 1 } : {}}
//                                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//                             />

//                             {/* Start Location */}
//                             <g transform={`translate(${startPoint.x},${startPoint.y})`}>
//                                 <motion.g
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                         fill={lineColor}
//                                     />
//                                     <text
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={lineColor}
//                                         textAnchor="middle"
//                                     >
//                                         {dot.start.name}
//                                     </text>
//                                 </motion.g>
//                             </g>

//                             {/* End Location */}
//                             <g transform={`translate(${endPoint.x},${endPoint.y})`}>
//                                 <motion.g
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                         fill={lineColor}
//                                     />
//                                     <text
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={lineColor}
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


// "use client";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";
// import logo from '../assets/logo/cube3.png';

// export function WorldMap({
//     dots = [],
//     lineColor = "#0ea5e9"
// }) {
//     const svgRef = useRef(null);
//     const inView = useInView(svgRef, { once: true, amount: 0.2 });
//     const map = new DottedMap({ height: 100, grid: "diagonal" });
//     const { theme } = useTheme();

//     const svgMap = map.getSVG({
//         radius: 0.22,
//         color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//         shape: "circle",
//         backgroundColor: theme === "dark" ? "black" : "white",
//     });

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
//         <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
//             <img
//                 src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//                 className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//                 alt="world map"
//                 draggable={false}
//             />
//             <svg
//                 ref={svgRef}
//                 viewBox="0 0 800 400"
//                 className="w-full h-full absolute inset-0 pointer-events-none select-none"
//             >
//                 <defs>
//                     <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="white" stopOpacity="0" />
//                         <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//                         <stop offset="100%" stopColor="white" stopOpacity="0" />
//                     </linearGradient>
//                     <symbol id="location-pin" viewBox="0 0 24 24">
//                         <image 
//                             href={logo} 
//                             width="24" 
//                             height="24" 
//                             preserveAspectRatio="xMidYMid meet"
//                         />
//                     </symbol>
//                 </defs>

//                 {/* Rest of the code remains exactly the same */}
//                 {dots.map((dot, i) => {
//                     const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//                     const endPoint = projectPoint(dot.end.lat, dot.end.lng);

//                     return (
//                         <g key={`path-group-${i}`}>
//                             <motion.path
//                                 d={createCurvedPath(startPoint, endPoint)}
//                                 fill="none"
//                                 stroke="url(#path-gradient)"
//                                 strokeWidth="1"
//                                 initial={{ pathLength: 0 }}
//                                 animate={inView ? { pathLength: 1 } : {}}
//                                 transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//                             />

//                             {/* Start Location */}
//                             <g transform={`translate(${startPoint.x},${startPoint.y})`}>
//                                 <motion.g
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                     />
//                                     <text
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={lineColor}
//                                         textAnchor="middle"
//                                     >
//                                         {dot.start.name}
//                                     </text>
//                                 </motion.g>
//                             </g>

//                             {/* End Location */}
//                             <g transform={`translate(${endPoint.x},${endPoint.y})`}>
//                                 <motion.g
//                                     initial={{ scale: 0, opacity: 0 }}
//                                     animate={inView ? { scale: 1, opacity: 1 } : {}}
//                                     transition={{ delay: i * 0.5, duration: 0.3 }}
//                                     style={{ cursor: 'pointer' }}
//                                     className="pin-group"
//                                 >
//                                     <use
//                                         href="#location-pin"
//                                         x="-12"
//                                         y="-24"
//                                         width="24"
//                                         height="24"
//                                     />
//                                     <text
//                                         x="0"
//                                         y="30"
//                                         fontSize="12"
//                                         fill={lineColor}
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
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import logo from '../assets/logo/cube3.png';

export function WorldMap({
    dots = [],
    lineColor = "#0ea5e9"
}) {
    const svgRef = useRef(null);
    const inView = useInView(svgRef, { once: true, amount: 0.2 });
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const { theme } = useTheme();

    const svgMap = map.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: theme === "dark" ? "black" : "white",
    });

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
        <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
                alt="world map"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="0 -50 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <symbol id="location-pin" viewBox="0 0 24 24">
                        <image 
                            href={logo} 
                            width="24" 
                            height="24" 
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
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={inView ? { pathLength: 1 } : {}}
                                transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
                            />

                            {/* Start Location */}
                            <g transform={`translate(${startPoint.x},${startPoint.y})`}>
                                <motion.g
                                    className="pin-group"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin"
                                        x="-12"
                                        y="-24"
                                        width="24"
                                        height="24"
                                    />
                                    <text
                                        className="city-label"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={lineColor}
                                        textAnchor="middle"
                                    >
                                        {dot.start.name}
                                    </text>
                                </motion.g>
                            </g>

                            {/* End Location */}
                            <g transform={`translate(${endPoint.x},${endPoint.y})`}>
                                <motion.g
                                    className="pin-group"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: i * 0.5, duration: 0.3 }}
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <use
                                        href="#location-pin"
                                        x="-12"
                                        y="-24"
                                        width="24"
                                        height="24"
                                    />
                                    <text
                                        className="city-label"
                                        x="0"
                                        y="30"
                                        fontSize="12"
                                        fill={lineColor}
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
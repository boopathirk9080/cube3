"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { AuroraBackground } from "../SectionHead/Aurora-background";
import SplitText from "../SectionHead/SplitText";

export function BlogHead() {
  const textRef = useRef(null);

  useEffect(() => {
    const container = textRef.current;
    if (!container) return;

    // Select all span elements inside the container
    const spans = container.querySelectorAll("span");
    let letterCount = 0;

    spans.forEach((span) => {
      const char = span.textContent || "";
      if (char.trim() === "") {
        // Keep default/black for spaces
        span.style.color = "#000000";
      } else {
        // Apply color logic for the first 5 letters
        span.style.color = letterCount < 4 ? "#000000" : "#ef4949";
        letterCount++;
      }
    });
  }, []);

  return (
    <AuroraBackground className="bg-gradient-to-t from-[#ffffff] via-[#d6cccc] to-[#661717]" >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4  "
      >
        <div
          ref={textRef}
          className="text-2xl md:text-4xl font-bold text-center"
        >
          <SplitText
            text="OUR BLOGS"
            className="inline-block"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default BlogHead;
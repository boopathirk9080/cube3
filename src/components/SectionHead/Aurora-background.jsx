"use client";;
import { cn } from "./utils";
import React from "react";
import './section.css'
export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <main>
            <div
                className={cn(
                    "transition-bg relative flex pt-[20vh] pb-[5vh] flex-col items-center justify-center  text-slate-950 dark:bg-zinc-900",
                    className
                )}
                {...props}>
                <div
                    className="absolute inset-0 overflow-hidden"
                    //   style={
                    //     {
                    //       "--aurora":
                    //         "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",

                    //       "--dark-gradient":
                    //         "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",

                    //       "--white-gradient":
                    //         "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

                    //       "--blue-300": "#ef4949",
                    //       "--blue-400": "#f58b97",
                    //       "--blue-500": "#f7a1ac",
                    //       "--indigo-300": "#ed2e64",
                    //       "--violet-200": "#ef4747",
                    //       "--black": "#ee366e",
                    //       "--white": "#fff",
                    //       "--transparent": "transparent"
                    //     }
                    //   }
                    style={{
                        "--aurora": "repeating-linear-gradient(100deg, #ef4949 10%, #f58b97 15%, #f7a1ac 20%, #ed2e64 25%, #ef4747 30%)",
                        "--dark-gradient": "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
                        "--white-gradient": "repeating-linear-gradient(100deg, #ef4949 0%, #ed2e64 7%, transparent 10%, transparent 12%, #ef4747 16%)",
                        "--blue-300": "#ef4949",
                        "--blue-400": "#f58b97",
                        "--blue-500": "#f7a1ac",
                        "--indigo-300": "#ed2e64",
                        "--violet-200": "#ef4747",
                        "--black": "#ee366e",
                        "--white": "#fff",
                        "--transparent": "transparent"
                    }}
                >
                  
                </div>
                {children}
            </div>
        </main>
    );
};
export default AuroraBackground;
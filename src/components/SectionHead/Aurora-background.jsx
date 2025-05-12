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
                    "transition-bg relative flex pt-[20vh] pb-[5vh] flex-col items-center justify-center bg-[#fff] text-slate-950 dark:bg-zinc-900",
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
                    <div
                        //   I'm sorry but this is what peak developer performance looks like // trigger warning
                        className={cn(
                            `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}></div>
                </div>
                {children}
            </div>
        </main>
    );
};
export default AuroraBackground;
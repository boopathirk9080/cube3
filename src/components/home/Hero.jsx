import Typewriter from "typewriter-effect";
import { home } from "../data/data";
import Cv from '../assets/boopathi.pdf';
import { Email } from "@mui/icons-material";

function Hero() {
    return (
        <div className="bg-gradient-to-b from-[#324c72] to-[#385881] w-full min-h-screen flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-x-hidden">
            {home.map((val, i) => (
                <div key={i} className="max-w-3xl w-full space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Heading Section */}
                    <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#64ffda] tracking-wide uppercase">
                            {val.text}
                        </h3>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6]">
                            <Typewriter
                                options={{
                                    strings: [val.name, val.post, val.design, val.edit],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[#8892b0] leading-relaxed max-w-2xl mx-auto">
                        {val.desc}
                    </p>

                    {/* Email */}
                    <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg text-[#6184c0]">
                        <Email className="text-[#64ffda] text-lg sm:text-xl" />
                        <span>{val.email}</span>
                    </div>

                    {/* CV Button */}
                    <button
                        className="mt-4 sm:mt-6 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg shadow-md hover:bg-[#ff3366] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = Cv;
                            link.download = "boopathi.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download CV
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Hero;
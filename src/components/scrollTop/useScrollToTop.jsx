import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Smooth scroll to top on route change
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
};

export default useScrollToTop;

import React from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";

interface ComingSoonProps {
    title: string;
    description: string;
}

// Navigation Components (matching homepage style)
function ButtonNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/";

    return (
        <motion.div
            className="h-[24px] relative shrink-0 w-[43.141px] cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/")}
        >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.141px]">
                <motion.p
                    className={`absolute ${isActive ? "font-['Inter:Semi_Bold',sans-serif] font-semibold" : "font-['Inter:Medium',sans-serif] font-medium"} leading-[24px] left-[22.5px] not-italic text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre`}
                    animate={{ color: isActive ? "#FF8559" : "#364153" }}
                    whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Home
                </motion.p>
            </div>
        </motion.div>
    );
}

function LinkNav() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/programs";

    return (
        <motion.div
            className="h-[24px] relative shrink-0 w-[69.945px] cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/programs")}
        >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.945px]">
                <motion.p
                    className={`absolute ${isActive ? "font-['Inter:Semi_Bold',sans-serif] font-semibold" : "font-['Inter:Medium',sans-serif] font-medium"} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
                    animate={{ color: isActive ? "#FF8559" : "#364153" }}
                    whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Programs
                </motion.p>
            </div>
        </motion.div>
    );
}

function LinkNav2() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/products";

    return (
        <motion.div
            className="h-[24px] relative shrink-0 w-[65.281px] cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/products")}
        >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.281px]">
                <motion.p
                    className={`absolute ${isActive ? "font-['Inter:Semi_Bold',sans-serif] font-semibold" : "font-['Inter:Medium',sans-serif] font-medium"} leading-[24px] left-[33.5px] not-italic text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre`}
                    animate={{ color: isActive ? "#FF8559" : "#364153" }}
                    whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Products
                </motion.p>
            </div>
        </motion.div>
    );
}

function LinkNav3() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/testimonials";

    return (
        <motion.div
            className="h-[24px] relative shrink-0 w-[89.945px] cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/testimonials")}
        >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.945px]">
                <motion.p
                    className={`absolute ${isActive ? "font-['Inter:Semi_Bold',sans-serif] font-semibold" : "font-['Inter:Medium',sans-serif] font-medium"} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
                    animate={{ color: isActive ? "#FF8559" : "#364153" }}
                    whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    Testimonials
                </motion.p>
            </div>
        </motion.div>
    );
}

function LinkNav4() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === "/about";

    return (
        <motion.div
            className="h-[24px] relative shrink-0 w-[67.383px] cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/about")}
        >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.383px]">
                <motion.p
                    className={`absolute ${isActive ? "font-['Inter:Semi_Bold',sans-serif] font-semibold" : "font-['Inter:Medium',sans-serif] font-medium"} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
                    animate={{ color: isActive ? "#FF8559" : "#364153" }}
                    whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
                    transition={{ duration: 0.2 }}
                >
                    About Us
                </motion.p>
            </div>
        </motion.div>
    );
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    let message = "Check back soon for more updates!";
    if (location.pathname === "/programs") {
        message = "Check back soon for our full program catalog!";
    } else if (location.pathname === "/products") {
        message = "Check back soon for our full product catalog!";
    } else if (location.pathname === "/testimonials") {
        message = "Check back soon for more inspiring stories!";
    }

    return (
        <div className="bg-white w-full mx-auto relative min-h-screen">
            {/* Header Section */}
            <section className="relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
                {/* Logo */}
                <div
                    className="absolute h-[55px] left-[40px] top-[35px] w-[250px] z-20 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img
                        alt="Primiya's Art Academy"
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imgTigerCalligraphy11Sid177}
                    />
                </div>

                {/* Navigation */}
                <div
                    className="absolute content-stretch flex gap-[24px] h-[40px] items-center right-[40px] top-[35px] z-20"
                    data-name="Container"
                >
                    <ButtonNav />
                    <LinkNav4 />
                    <LinkNav />
                    <LinkNav2 />
                    <LinkNav3 />
                </div>

                {/* Simple decorative element - minimal */}
                <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] bg-[#FFE5DC] rounded-full opacity-50" />
                <div className="absolute left-[-60px] bottom-[-60px] w-[220px] h-[220px] bg-[#D1E231] rounded-full opacity-40" />
                <div className="absolute right-[120px] bottom-[50px] w-[120px] h-[120px] bg-[#FF8559] rounded-full opacity-30" />

                {/* Hero Title */}
                <div className="text-center w-full flex flex-col items-center justify-center  max-w-[900px] px-8 relative z-10" style={{ paddingBottom: "20px", height: "100vh" }}>
                    <motion.h1
                        className="font-['Kaushan_Script:Regular',sans-serif] text-[72px] text-[#101828] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        className="w-[100px] h-[3px] bg-[#FF8559] mx-auto rounded-full mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="font-['Montserrat:Regular',sans-serif] text-[18px] text-[#4a5565] leading-[30px] text-center max-w-[700px] mx-auto mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>

                    <motion.p
                        className="font-['Montserrat:Medium',sans-serif] text-[18px] text-[#4a5565] mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {message}
                    </motion.p>

                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="inline-block px-6 py-2 rounded-full bg-[#FFF5F0] border border-[#FF8559]/30 text-[#FF8559] font-['Montserrat:SemiBold',sans-serif] text-[16px]">
                            Coming Soon! 🎨
                        </span>
                    </motion.div>

                    <motion.button
                        className="bg-[#D1E231] text-[#101828] px-10 py-4 rounded-full font-['Inter:SemiBold',sans-serif] text-[16px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/")}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Back to Home
                    </motion.button>
                </div>
            </section>
        </div>
    );
}

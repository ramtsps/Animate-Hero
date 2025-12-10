import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Products", path: "/products" },
        { name: "Testimonials", path: "/testimonials" },
    ];

    return (
        <div className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="w-40 h-12 cursor-pointer relative"
                    onClick={() => navigate("/")}
                >
                    <img
                        alt="Primiya's Art Academy"
                        className="w-full h-full object-contain"
                        src={imgTigerCalligraphy11Sid177}
                    />
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <motion.div
                                key={link.name}
                                className="relative cursor-pointer"
                                whileHover={{ y: -2 }}
                                onClick={() => navigate(link.path)}
                            >
                                <p className={`font-['Inter:Bold',sans-serif] font-bold ${isActive ? 'text-[#FF8559]' : 'text-[#364153]'} text-[16px] hover:text-[#FF8559] transition-colors`}>
                                    {link.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/enrollment")}
                    className="bg-[#FF8559] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#ff7043] transition-colors cursor-pointer"
                >
                    Enroll Now
                </motion.button>
            </div>
        </div>
    );
}

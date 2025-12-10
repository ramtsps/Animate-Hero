import React from "react";
import { useNavigate } from "react-router-dom";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";

export default function Footer() {
    const navigate = useNavigate();

    const navLinks = [
        { name: "Home", path: "/" }, { name: "About Us", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Products", path: "/products" },
        { name: "Testimonials", path: "/testimonials" },

    ];

    return (
        <div className="w-full h-[458px] bg-[#101828] relative overflow-hidden shrink-0" style={{ paddingTop: "50px" }}>
            <div className="mx-auto w-[1232px] pt-[106px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] gap-[48px]">
                {/* Logo & Description */}
                <div className="flex flex-col items-start ">
                    <div
                        className=" w-[191px] relative cursor-pointer" style={{ height: "35px", marginBottom: "20px" }}
                        onClick={() => navigate("/")}
                    >
                        <img
                            alt="Primiya's Art Academy"
                            className="absolute inset-0 w-full h-full object-contain"
                            src={imgTigerCalligraphy11Sid177}
                        />
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#99a1af] text-[16px] tracking-[-0.3125px] w-[235px]">
                        Nurturing creativity and artistic expression in young minds since 2008.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-[16px] items-start">
                    <h4 className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] text-white tracking-[-0.3125px]">
                        Quick Links
                    </h4>
                    <div className="flex flex-col gap-[8px] items-start">
                        {navLinks.map((link) => (
                            <div key={link.name} className="h-[24px] w-full">
                                <p
                                    className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#99a1af] text-[16px] tracking-[-0.3125px] cursor-pointer hover:text-white transition-colors"
                                    onClick={() => navigate(link.path)}
                                >
                                    {link.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-[16px] items-start">
                    <h4 className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] text-white tracking-[-0.3125px]">
                        Contact
                    </h4>
                    <div className="flex flex-col gap-[8px] items-start">
                        {[
                            "123 Art Street",
                            "Seattle, WA 98101",
                            "contact@primiyasart.com",
                            "(555) 123-4567"
                        ].map((text, i) => (
                            <div key={i} className="h-[24px] w-full">
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#99a1af] text-[16px] tracking-[-0.3125px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col gap-[16px] items-start">
                    <h4 className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[16px] text-white tracking-[-0.3125px]">
                        Follow Us
                    </h4>
                    <div className="flex gap-[16px] items-start">
                        {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                            <div
                                key={i}
                                className="bg-[#1e2939] rounded-full size-[40px] flex items-center justify-center cursor-pointer hover:bg-[#2d3b4f] transition-colors"
                            >
                                <Icon className="text-white w-[20px] h-[20px]" strokeWidth={1.5} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

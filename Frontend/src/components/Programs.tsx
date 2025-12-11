import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import { ContainerSid } from "../imports/HeroSectionSid171";
import Screen7 from "../imports/Screen7";
import Footer from "../imports/Footer";
export default function Programs() {
    const navigate = useNavigate();

    return (<>
        <div className="bg-white w-full mx-auto relative " style={{ height: "700px", }}>
            {/* Header Section */}
            <section className="relative h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
                {/* Logo */}
                <div
                    className="absolute h-[74px] left-[54px] top-[44px] w-[341px] cursor-pointer"
                    data-name="tiger-calligraphy11_sid_1:77"
                    onClick={() => navigate("/")}
                >
                    <img
                        alt="Primiya's Art"
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imgTigerCalligraphy11Sid177}
                    />
                </div>
                <div className="z-20">
                    <ContainerSid />
                </div>

                {/* Simple decorative element - minimal */}
                <div className="absolute right-[-80px] top-[-80px] w-[300px] h-[300px] bg-[#FFE5DC] rounded-full opacity-50" />
                <div className="absolute left-[-60px] bottom-[-60px] w-[220px] h-[220px] bg-[#D1E231] rounded-full opacity-40" />
                <div className="absolute right-[120px] bottom-[50px] w-[120px] h-[120px] bg-[#FF8559] rounded-full opacity-30" />

                {/* Hero Title */}
                <div className="text-center w-full flex flex-col items-center justify-center  max-w-[900px] px-8 relative z-10" style={{ paddingBottom: "20px", height: "100vh" }}>
                    <motion.h1
                        className="font-['Kaushan_Script:Regular',sans-serif] text-[96px] text-[#101828] "
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Programs
                    </motion.h1>

                    <motion.div
                        className="w-[100px] h-[3px] bg-[#FF8559] mx-auto rounded-full mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="font-['Montserrat:Regular',sans-serif]  text-[#4a5565] leading-[36px] text-center max-w-[800px] mx-auto mb-4"
                        style={{ fontSize: "24px" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Explore our creative art programs designed to inspire and nurture young artists.
                    </motion.p>

                    <motion.p
                        className="font-['Montserrat:Medium',sans-serif] text-[20px] text-[#4a5565] mb-10 leading-[32px] max-w-[800px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: "20px" }}
                    >
                        Whether you are a beginner looking to explore your creativity or an aspiring artist wanting to refine your skills, our diverse range of classes offers something for everyone. Join us to learn, create, and grow!
                    </motion.p>

                    <motion.button
                        className="bg-[#D1E231] text-[#101828] px-10 py-4 rounded-full font-['Inter:SemiBold',sans-serif] text-[16px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ fontSize: "20px" }}
                    >
                        View Courses
                    </motion.button>
                </div>
            </section>

        </div>
        <Screen7 />
        <Footer />
    </>
    );
}

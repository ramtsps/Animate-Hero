import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import Footer from "../imports/Footer";
import imgPrimiyaAboutPhoto1 from "../assets/ee1fca0c7d7699b7ef50155560fabf3cdd6b17a7.png";
import { motion } from "motion/react";
import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

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

export default function AboutUs() {
  return (
    <div className="bg-white w-full mx-auto relative">
      {/* Header Section */}
      <section className="relative h-[375px] bg-white overflow-hidden">
        {/* Logo */}
        <div className="absolute h-[55px] left-[40px] top-[35px] w-[250px] z-20">
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
        <div className="absolute left-1/2 top-[190px] transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[900px] px-8">
          <motion.h1
            className="font-['Kaushan_Script:Regular',sans-serif] text-[56px] text-[#101828] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Primiya's Art
          </motion.h1>
          <motion.p
            className="font-['Montserrat:Regular',sans-serif] text-[16px] text-[#4a5565] leading-[28px] text-center max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Founded by artist and educator Primiya, Primiya's Art began as a modest community workshop with a bunch of curious young minds and a handful of brushes.
          </motion.p>
          <motion.div
            className="w-[80px] h-[2.5px] bg-[#FF8559] mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </section>


      {/* The Artist Behind the Vision */}
      <section className="relative py-16 px-[60px] bg-[#FFF5F0]">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-[1fr_auto] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Momo_Trust_Display:Regular',sans-serif] text-[40px] text-[#101828] mb-5 leading-[48px]">
                The Artist Behind<br />the Vision
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-[#4a5565] leading-[26px] mb-4">
                Primiya's journey began not with a gallery, but with a classroom. As both an artist and a teacher, she saw firsthand how art could unlock a child's imagination, build resilience, and foster emotional intelligence.
              </p>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-[#4a5565] leading-[26px] mb-4">
                Her passion for nurturing creativity led her to create a space where children could not only learn techniques—but discover themselves. From sketching in notebooks to mentoring students, Primiya's philosophy has always been simple:
              </p>
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[17px] text-[#FF8559] leading-[26px] italic">
                "Art is not just a skill—it's a language of self-expression."
              </p>
            </motion.div>

            {/* Decorative accent */}
            <motion.div
              className="w-[300px] h-[380px]   relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <div className="absolute inset-6 border-3 border-white/30 rounded-[20px]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-['Rubik_Bubbles:Regular',sans-serif] text-[38px] text-white/90 text-center">
                  Primiya
                </p>
              </div> */}
              <img src={imgPrimiyaAboutPhoto1} alt="Primiya" className="w-full h-auto object-cover drop-shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-16 px-[60px] bg-white">
        <div className="max-w-[960px] mx-auto">
          <motion.h2
            className="font-['Momo_Trust_Display:Regular',sans-serif] text-[40px] text-[#101828] text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="font-['Montserrat:Regular',sans-serif] text-[16px] text-[#4a5565] leading-[28px] text-center mb-10 max-w-[750px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            At Primiya's Art, we believe that every child is an artist waiting to be heard. Our mission is to provide a nurturing, inclusive environment where children can:
          </motion.p>

          {/* Mission Points Grid */}
          <div className="grid grid-cols-2 gap-5 max-w-[850px] mx-auto">
            {[
              { emoji: "🎨", text: "Explore their creativity freely", color: "FF8559" },
              { emoji: "✏️", text: "Develop artistic skills across mediums", color: "D1E231" },
              { emoji: "💪", text: "Build confidence through self-expression", color: "D1E231" },
              { emoji: "🧠", text: "Cultivate critical thinking and problem-solving", color: "FF8559" },
              { emoji: "❤️", text: "Strengthen emotional awareness and empathy", color: "FF8559" },
              { emoji: "🖌️", text: "Express themselves authentically", color: "D1E231" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-3 p-5 rounded-[18px] border-2`}
                style={{
                  backgroundColor: index % 2 === 0 ? '#FFF5F0' : '#F9FFED',
                  borderColor: `#${item.color}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-[26px] flex-shrink-0">{item.emoji}</span>
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-[#4a5565] leading-[22px] pt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative py-16 px-[60px] bg-gradient-to-b from-white to-[#FFF5F0]">
        <div className="max-w-[960px] mx-auto">
          <motion.h2
            className="font-['Momo_Trust_Display:Regular',sans-serif] text-[40px] text-[#101828] text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <motion.p
            className="font-['Montserrat:Regular',sans-serif] text-[16px] text-[#4a5565] leading-[28px] text-center mb-12 max-w-[750px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Whether it's painting, drawing, mixed media, or digital art, our programs are designed to meet children where they are—and help them grow.
          </motion.p>

          {/* Offerings Grid */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { title: "Weekly Classes", desc: "Ages 4–16", color: "FF8559" },
              { title: "Holiday Workshops", desc: "Seasonal programs", color: "D1E231" },
              { title: "Summer Camps", desc: "Intensive sessions", color: "FF8559" },
              { title: "Portfolio Development", desc: "for aspiring artists", color: "D1E231" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-[20px] p-5 text-center shadow-sm border-b-4"
                style={{
                  borderBottomColor: `#${item.color}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `#${item.color}` }}
                >
                  <span className="text-[22px]">
                    {index === 0 ? "📅" : index === 1 ? "🎉" : index === 2 ? "☀️" : "🎨"}
                  </span>
                </div>
                <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[16px] text-[#101828] mb-1">
                  {item.title}
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-[#4a5565]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Community Events */}
          <motion.div
            className="mt-10 bg-gradient-to-r from-[#FF8559] via-[#FF8559] to-[#D1E231] rounded-[24px] p-7 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <p className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-white mb-1.5">
                Plus: Community Art Events & Exhibitions! 🌟
              </p>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/90">
                Showcasing our young artists' incredible work
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-16 px-[60px] bg-[#101828]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2
            className="font-['Kaushan_Script:Regular',sans-serif] text-[44px] text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why It Matters
          </motion.h2>
          <motion.p
            className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/80 leading-[28px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Art education isn't just about creating beautiful things. It's about building creative thinkers, empathetic leaders, and confident individuals.
          </motion.p>
          <motion.p
            className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-[#FF8559] leading-[28px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Primiya's Art, we're proud to be part of that journey.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-[60px] bg-gradient-to-b from-[#FFF5F0] to-white">
        <div className="max-w-[650px] mx-auto text-center">
          <motion.h2
            className="font-['Kaushan_Script:Regular',sans-serif] text-[40px] text-[#101828] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Creating?
          </motion.h2>
          <motion.p
            className="font-['Montserrat:Regular',sans-serif] text-[16px] text-[#4a5565] leading-[26px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join our creative community and watch your child's artistic journey unfold.
          </motion.p>
          <motion.button
            className="bg-[#FF8559] text-white px-10 py-4 rounded-full font-['Inter:Medium',sans-serif] text-[15px] cursor-pointer shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 133, 89, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Explore Our Programs
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <div className="h-[358px]">
        <Footer />
      </div>
    </div>
  );
}
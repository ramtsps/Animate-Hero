import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../imports/Footer";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import { ContainerSid } from "../imports/HeroSectionSid171";
export default function CourseDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF5F2] to-white">
      {/* Logo */}
      <div style={{ backgroundColor: "white", width: "100%" }}>


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
      </div>
      <div className="flex-grow" style={{ width: "100%", marginTop: "150px" }} >
        {/* Header with back button */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate("/programs")}
            className="flex items-center gap-2 cursor-pointer text-[#4a5565] hover:text-[#FF8559] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Programs</span>
          </button>

          {/* Enhanced Hero Section with Animations */}
          <div className="relative mb-16 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-20 w-16 h-16"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <PaintBrushIcon />
            </motion.div>

            <motion.div
              className="absolute top-20 right-60 w-12 h-12"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <PaletteIcon />
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-10 w-20 h-20"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <StarIcon />
            </motion.div>

            <motion.div
              className="absolute top-32 right-96 w-10 h-10"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <SparkleIcon />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 bg-gradient-to-r from-[#FF8559]/10 to-[#D1E231]/10 rounded-[3rem] p-12 border-4 border-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-[#101828] mb-4" style={{ fontSize: "48px" }}>Acrylic Painting for Kids</h1>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D1E231] text-[#101828] px-4 py-2 rounded-full">
                    Ages 6-12
                  </span>
                  <span className="bg-white text-[#FF8559] px-4 py-2 rounded-full border-2 border-[#FF8559]">
                    12 Sessions
                  </span>
                </div>

                <p className="text-[#4a5565] text-xl max-w-3xl mb-6">
                  A comprehensive painting course designed to unlock creativity and build fundamental art skills in a fun, supportive environment.
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#FF8559]/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF8559]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#4a5565]">Duration</div>
                      <div className="text-[#101828]">90 min/session</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#D1E231]/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#101828]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#4a5565]">Class Size</div>
                      <div className="text-[#101828]">8-12 students</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#FF8559]/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF8559]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-[#4a5565]">Level</div>
                      <div className="text-[#101828]">Beginner Friendly</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center" style={{ marginTop: "20px" }}>
                  <button
                    onClick={() => navigate("/enrollment")}
                    className="bg-[#FF8559] cursor-pointer text-white px-12 py-4 rounded-full hover:bg-[#ff7043] transition-all hover:shadow-lg transform hover:scale-105"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* What Students Will Learn */}
          <section className="mb-16">
            <h2 className="text-[#101828] mb-8 font-semibold" style={{ fontSize: "36px" }}>What Students Will Learn</h2>
            <div className="grid gap-6">
              <LearningItem text="Learn essential techniques including color mixing, layering, blending, and brushwork." />
              <LearningItem text="Understand composition basics—how shapes, balance, and layout bring a painting to life." />
              <LearningItem text="Explore value and texture to create depth and visual interest." />
              <LearningItem text="Complete 4–6 finished paintings with step-by-step guidance." />
              <LearningItem text="Develop their own creative voice through creative exercises and personal choices." />
              <LearningItem text="Strengthen artistic problem-solving skills while experimenting safely and confidently." />
              <LearningItem text="Build a joyful, supportive relationship with the painting process—fostering lifelong creativity." />
            </div>
          </section>

          {/* Materials Provided */}
          <section className="mb-16">
            <h2 className="text-[#101828] mb-8 font-semibold" style={{ fontSize: "36px" }}>Materials Provided in Class</h2>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0f0f0]">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                <MaterialItem text="Student-grade acrylic paint set (red, blue, yellow, black, white)" />
                <MaterialItem text="Optional metallic or neon accent colors" />
                <MaterialItem text="Synthetic brush set (flat, round, detail)" />
                <MaterialItem text="Brush sizes: small (0–2), medium (6–8), large (10–12)" />
                <MaterialItem text="Acrylic paper pad or canvas boards (9×12 or 11×14)" />
                <MaterialItem text="Optional stretched canvas for final project" />
                <MaterialItem text="Plastic or reusable palette" />
                <MaterialItem text="Palette knife" />
                <MaterialItem text="Water container (non-breakable)" />
                <MaterialItem text="Rag or paper towels" />
                <MaterialItem text="Pencil and eraser" />
                <MaterialItem text="Apron or old shirt" />
                <MaterialItem text="Masking tape" />
                <MaterialItem text="Sponge or toothbrush for texture" />
              </div>
            </div>
          </section>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/enrollment")}
              className="bg-[#FF8559] cursor-pointer text-white px-12 py-4 rounded-full hover:bg-[#ff7043] transition-all hover:shadow-lg transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

function LearningItem({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-start bg-white rounded-2xl p-6 shadow-sm border border-[#f0f0f0] hover:border-[#FF8559] transition-colors">
      <div className="shrink-0 w-6 h-6 rounded-full bg-[#D1E231] flex items-center justify-center mt-1">
        <svg
          className="w-4 h-4 text-[#101828]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-[#4a5565] flex-1" style={{ fontSize: "18px" }}>{text}</p>
    </div>
  );
}

function MaterialItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="shrink-0 w-2 h-2 rounded-full bg-[#FF8559] mt-2" />
      <p className="text-[#4a5565]">{text}</p>
    </div>
  );
}

function PaintBrushIcon() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
      {/* Paintbrush handle */}
      <path
        d="M10 54 L30 34 L35 39 L15 59 Z"
        fill="#FF8559"
        stroke="#FF8559"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Paintbrush ferrule */}
      <rect
        x="28"
        y="28"
        width="12"
        height="10"
        transform="rotate(-45 34 33)"
        fill="#D1E231"
        stroke="#101828"
        strokeWidth="1.5"
      />
      {/* Paintbrush bristles */}
      <path
        d="M35 28 L45 18 L48 21 L38 31 Z"
        fill="#4a5565"
        stroke="#101828"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Paint drip */}
      <motion.circle
        cx="12"
        cy="52"
        r="2"
        fill="#FF8559"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      {/* Palette shape */}
      <path
        d="M24 4C13 4 4 13 4 24c0 8 5 15 12 18 2 1 3-1 3-2 0-2-1-3-1-5 0-3 2-6 5-6 4 0 6 3 6 6 0 2-1 4-2 6-1 2 0 3 2 3 9-2 15-10 15-19 0-11-9-20-20-20z"
        fill="#D1E231"
        stroke="#101828"
        strokeWidth="2"
      />
      {/* Paint blobs */}
      <circle cx="15" cy="15" r="3" fill="#FF8559" />
      <circle cx="24" cy="12" r="3" fill="#4a5565" />
      <circle cx="33" cy="15" r="3" fill="#FF8559" />
      <circle cx="14" cy="26" r="2.5" fill="#101828" />
      <circle cx="32" cy="28" r="2.5" fill="#D1E231" stroke="#101828" strokeWidth="1" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
      {/* Main star */}
      <path
        d="M40 10 L45 30 L65 30 L50 42 L55 62 L40 50 L25 62 L30 42 L15 30 L35 30 Z"
        fill="#D1E231"
        stroke="#FF8559"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner highlight */}
      <circle cx="40" cy="35" r="5" fill="#FF8559" opacity="0.6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      {/* Large sparkle */}
      <path
        d="M20 5 L22 18 L20 20 L18 18 Z"
        fill="#D1E231"
        stroke="#D1E231"
        strokeWidth="1"
      />
      <path
        d="M20 20 L22 22 L20 35 L18 22 Z"
        fill="#D1E231"
        stroke="#D1E231"
        strokeWidth="1"
      />
      <path
        d="M5 20 L18 22 L20 20 L18 18 Z"
        fill="#FF8559"
        stroke="#FF8559"
        strokeWidth="1"
      />
      <path
        d="M20 20 L22 18 L35 20 L22 22 Z"
        fill="#FF8559"
        stroke="#FF8559"
        strokeWidth="1"
      />
      {/* Small sparkles */}
      <circle cx="10" cy="10" r="2" fill="#D1E231" />
      <circle cx="30" cy="10" r="1.5" fill="#FF8559" />
      <circle cx="30" cy="30" r="2" fill="#D1E231" />
    </svg>
  );
}
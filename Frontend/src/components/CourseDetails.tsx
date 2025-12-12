import { ArrowLeft, DollarSign, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../imports/Footer";
import imgTigerCalligraphy11Sid177 from "../assets/4307a49e690f6e0d5b4cc3f5e241fcaa2617c523.png";
import { ContainerSid } from "../imports/HeroSectionSid171";
import classPhoto1 from "figma:asset/8cc697d30d2be02662c7202d22efca79e3dee1c1.png";
import classPhoto2 from "figma:asset/1d80dbd42779716e151bd12763c4342c5a87ad3b.png";
import classPhoto3 from "figma:asset/0108c56a73d24a70bde527db59ed661b46bee587.png";
import classPhoto4 from "figma:asset/7ed415331eae513d41186746f3ac11a88f113398.png";
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
                    8 Weeks
                  </span>
                </div>

                <p className="text-[#4a5565] text-xl max-w-3xl mb-6">
                  A journey into acrylics where you’ll learn foundational techniques and grow your creative voice. From color mixing to composition, each step leads you toward finished paintings you’ll be proud of.
                </p>



                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#D1E231]/30 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#101828]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#4a5565]">Course Fee</div>
                      <div className="text-[#101828]">$120 - $180</div>
                    </div>
                  </div>

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

          {/* Class Schedule and Location Section */}
          <section className="mb-16" style={{ marginTop: "40px" }}>
            <h2 className="text-[#101828] mb-8 font-semibold text-center" style={{ fontSize: "36px" }}>
              Class Schedule & Locations
            </h2>

            {/* Info Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0f0f0] mb-8 relative overflow-hidden flex flex-row">
              <div className="flex-1 p-4 flex flex-col justify-center items-center text-center">
                <p className="text-[#101828] font-bold text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Acrylic classes start January 5th!
                </p>
                <p className="text-[#4a5565]" style={{ fontSize: "16px" }}>
                  Classes begin on Monday, Jan 5th. Each session runs for <span className="text-[#FF8559] font-bold">8 weeks</span>.
                </p>
              </div>
              <div className="w-[10%] bg-[#FFF5F2] rounded-l-full absolute right-0 top-0 bottom-0 h-full"></div>
            </div>

            {/* Locations */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-[#f0f0f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF8559] rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg">W</div>
                  <div>
                    <h3 className="text-[#101828] font-bold text-lg mb-1">Walpole Location</h3>
                    <p className="text-[#4a5565] text-sm">501 Centre Lane, 501, Walpole - 02081</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#f0f0f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D1E231] rounded-full flex items-center justify-center shrink-0 text-[#101828] font-bold text-lg">M</div>
                  <div>
                    <h3 className="text-[#101828] font-bold text-lg mb-1">Medway Location</h3>
                    <p className="text-[#4a5565] text-sm">57 Ellis Street, Medway – 02053</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="bg-white rounded-3xl shadow-lg border border-[#f0f0f0] overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
                  <thead>
                    <tr style={{ background: "linear-gradient(90deg, #FF8559 0%, #ff7043 100%)" }}>
                      <th style={{ padding: "20px", color: "white", textAlign: "left", fontWeight: "600", borderBottom: "4px solid #e0e0e0", width: "15%" }}>Day</th>
                      <th style={{ padding: "20px", color: "white", textAlign: "left", fontWeight: "600", borderBottom: "4px solid #e0e0e0", width: "15%" }}>Location</th>
                      <th style={{ padding: "20px", color: "white", textAlign: "center", fontWeight: "600", borderBottom: "4px solid #e0e0e0", width: "23%" }}>2:00 PM - 3:30 PM</th>
                      <th style={{ padding: "20px", color: "white", textAlign: "center", fontWeight: "600", borderBottom: "4px solid #e0e0e0", width: "23%" }}>5:00 PM - 6:00 PM</th>
                      <th style={{ padding: "20px", color: "white", textAlign: "center", fontWeight: "600", borderBottom: "4px solid #e0e0e0", width: "23%" }}>6:30 PM - 7:45 PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "20px", fontWeight: "600", color: "#101828" }}>Monday</td>
                      <td style={{ padding: "20px", color: "#4a5565" }}>Walpole</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 3 and 4</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 5 and 6</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 7 to 10</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}>
                      <td style={{ padding: "20px", fontWeight: "600", color: "#101828" }}>Tuesday</td>
                      <td style={{ padding: "20px", color: "#4a5565" }}>Medway</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#9aa2b1" }}>-</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 5 and 6</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 7 to 10</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "20px", fontWeight: "600", color: "#101828" }}>Wednesday</td>
                      <td style={{ padding: "20px", color: "#4a5565" }}>Walpole</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 3 and 4</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 11 to 15+</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 11 to 15+</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}>
                      <td style={{ padding: "20px", fontWeight: "600", color: "#101828" }}>Thursday</td>
                      <td style={{ padding: "20px", color: "#4a5565" }}>Medway</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#9aa2b1" }}>-</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 11 to 15+</td>
                      <td style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>Age 11 to 15+</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "20px", fontWeight: "600", color: "#101828" }}>Fri, Sat & Sun</td>
                      <td style={{ padding: "20px", color: "#101828", fontWeight: "600" }}>Paint Party</td>
                      <td colSpan={3} style={{ padding: "20px", textAlign: "center", color: "#4a5565" }}>
                        Starts at <span className="font-bold text-[#000000]">$350</span> per booking (up to 10 guests) - <span className="italic">Anytime</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </section>

          {/* Continuous Scrolling Photo Gallery */}
          <section className="mb-16 overflow-hidden">
            <h2 className="text-[#101828] mb-8 font-semibold text-center" style={{ fontSize: "36px" }}>
              Class Highlights
            </h2>
            <div className="relative">
              {/* Scrolling container */}
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -2240],
                }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set of images */}
                <ScrollingImage
                  src={classPhoto1}
                  alt="Student painting in art class"
                />
                <ScrollingImage
                  src={classPhoto2}
                  alt="Kids showing their artwork"
                />
                <ScrollingImage
                  src={classPhoto3}
                  alt="Student working on painting"
                />
                <ScrollingImage
                  src={classPhoto4}
                  alt="Students painting together"
                />
                <ScrollingImage
                  src={classPhoto1}
                  alt="Student painting in art class"
                />
                <ScrollingImage
                  src={classPhoto2}
                  alt="Kids showing their artwork"
                />

                {/* Duplicate set for seamless loop */}
                <ScrollingImage
                  src={classPhoto3}
                  alt="Student working on painting"
                />
                <ScrollingImage
                  src={classPhoto4}
                  alt="Students painting together"
                />
                <ScrollingImage
                  src={classPhoto1}
                  alt="Student painting in art class"
                />
                <ScrollingImage
                  src={classPhoto2}
                  alt="Kids showing their artwork"
                />
                <ScrollingImage
                  src={classPhoto3}
                  alt="Student working on painting"
                />
                <ScrollingImage
                  src={classPhoto4}
                  alt="Students painting together"
                />
              </motion.div>
            </div>
          </section>

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

          {/* Payment Details */}
          <section className="mb-16">
            <h2 className="text-[#101828] mb-8 font-semibold" style={{ fontSize: "36px" }}>Payment Details</h2>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0f0f0] flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-[#FF8559] to-[#ff7043] rounded-2xl p-8 text-white max-w-2xl w-full shadow-lg">
                <Sparkles className="w-8 h-8 mx-auto mb-4" />
                <p className="font-['Montserrat:Regular',sans-serif] text-xl mb-3">Ready to Start Your Art Journey?</p>
                <p className="text-lg opacity-95 mb-2 font-['Montserrat:Regular',sans-serif]">
                  Course Fee: <span className="font-bold">$120 - $180</span>
                </p>
                <p className="text-lg opacity-95 mb-6 font-['Montserrat:Regular',sans-serif]">
                  To clear your payment, please Zelle to the number below:
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 inline-block">
                  <div className="flex items-center justify-center gap-3">
                    <ZelleIcon className="w-6 h-6" />
                    <p className="text-2xl font-bold">
                      617-639-6666
                    </p>
                  </div>
                </div>
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

function ScrollingImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="relative shrink-0 w-80 h-80 rounded-2xl shadow-lg overflow-hidden border-4 border-white hover:scale-105 transition-transform">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ZelleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8H16L8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
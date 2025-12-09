import imgHerosectionimage2Sid173 from "figma:asset/55a702aebd4dd5dc9c222e79bbfafe3eef8b62ea.png";
import imgHeroSectionBoy1 from "figma:asset/5db4ed778a3683b0e541ae7c90385a057824f901.png";
import imgCloud21Sid176 from "figma:asset/5067e5bebc1266ad56f290b6ed65541d30e9202c.png";
import imgTigerCalligraphy11Sid177 from "figma:asset/267698921917187a8c7b48052763446f125148e1.png";
import imgBrush1Sid178 from "figma:asset/c297e8dc31d099744b989d9b7b9d0b1a6556510e.png";
import imgCanvas1Sid179 from "figma:asset/bdb2f700e89bb85027a826b8f018c24c46d698bc.png";
import imgColors1Sid180 from "figma:asset/826e25e8c616f9e3182c74fc8d9dd0bacf386e02.png";
import imgPaint1Sid181 from "figma:asset/94bbe4efff0e0e8d5b2e5dab1c9f94b8eb4beb49.png";
import imgPencil1Sid182 from "figma:asset/787f86f5413186bb1036ef5e0a13ddb6048f88bc.png";
import imgCloud1Sid1100 from "figma:asset/e508772fdfec0ccbbccbfd0b34f98cdc0a318a6e.png";
import { motion } from "motion/react";
import React from "react";

function IconSid() {
  return (
    <motion.div
      className="absolute left-[117.05px] size-[20px] top-[20px]"
      data-name="Icon_sid_1:106"
      initial={{ opacity: 0, x: -10 }}
      whileHover={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon_sid_1:106">
          <path
            d="M7.5 15L12.5 10L7.5 5"
            id="Vector_sid_1:107"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function ButtonSid() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="absolute bg-[#FF8559] h-[60px] left-[-60px] rounded-[1.67772e+07px] top-[427px] w-[169.055px] cursor-pointer overflow-hidden"
      data-name="Button_sid_1:104"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.p
        className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[16px] text-center text-nowrap text-white top-[17.5px] tracking-[-0.3125px] whitespace-pre"
        animate={{
          left: isHovered ? "50%" : "50%",
          x: isHovered ? "-70%" : "-50%",
        }}
        transition={{ duration: 0.3 }}
      >
        Enroll Now
      </motion.p>
      <motion.div
        className="absolute left-[117.05px] size-[20px] top-[20px]"
        data-name="Icon_sid_1:106"
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="Icon_sid_1:106">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              id="Vector_sid_1:107"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.66667"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

function TextSid() {
  return (
    <div
      className="absolute h-[90px] left-[931px] top-[193px] w-[592px]"
      data-name="Text_sid_1:103"
    >
      <ButtonSid />
      <p className="absolute font-['Kaushan_Script:Regular',sans-serif] leading-[90px] left-[-60px] not-italic text-[#101828] text-[72px] text-nowrap top-[21.5px] tracking-[0.123px] whitespace-pre">
        Unleash your
      </p>
    </div>
  );
}

function TextSid1() {
  return (
    <div
      className="absolute h-[90px] left-[871px] top-[303px] w-[592px]"
      data-name="Text_sid_1:109"
    >
      <p className="absolute font-['Momo_Trust_Display:Regular',sans-serif] leading-[90px] left-0 not-italic text-[#101828] text-[64px] text-nowrap top-[1.5px] tracking-[0.123px] whitespace-pre">{`Child's Creativity at`}</p>
    </div>
  );
}

function TextSid2() {
  return (
    <div
      className="absolute h-[90px] left-[871px] top-[393px] w-[592px]"
      data-name="Text_sid_1:112"
    >
      <p className="absolute font-['Rubik_Bubbles:Regular',sans-serif] leading-[90px] left-0 not-italic text-[72px] text-nowrap text-white top-[1.5px] whitespace-pre">{`Primiya's Art`}</p>
    </div>
  );
}

function ParagraphSid() {
  return (
    <div
      className="absolute h-[84px] left-[871px] top-[493px] w-[576px]"
      data-name="Paragraph_sid_1:114"
    >
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[20px] top-0 tracking-[-0.4492px] w-[532px]">
        Join our vibrant art academy where children explore
        painting, drawing, sculpture, and creative expression
        under expert guidance.
      </p>
    </div>
  );
}

import { useNavigate, useLocation } from "react-router-dom";

function ButtonSid1() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/";

  return (
    <motion.div
      className="h-[24px] relative shrink-0 w-[43.141px] cursor-pointer"
      data-name="Button_sid_1:117"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate("/")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.141px]">
        <motion.p
          className={`absolute font-['Inter:Semi_Bold',sans-serif] ${isActive ? 'font-semibold' : 'font-medium'} text-white leading-[24px] left-[22.5px] not-italic text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Home
        </motion.p>
      </div>
    </motion.div>
  );
}

function LinkSid() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/programs";

  return (
    <motion.div
      className="h-[24px] relative shrink-0 w-[69.945px] cursor-pointer"
      data-name="Link_sid_1:119"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate("/programs")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[69.945px]">
        <motion.p
          className={`absolute font-['Inter:Medium',sans-serif] ${isActive ? 'font-semibold text-[#FF8559]' : 'font-medium text-[#364153]'} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
          whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
          transition={{ duration: 0.2 }}
        >
          Programs
        </motion.p>
      </div>
    </motion.div>
  );
}

function ButtonSid2() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/products";

  return (
    <motion.div
      className="h-[24px] relative shrink-0 w-[65.281px] cursor-pointer"
      data-name="Button_sid_1:121"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate("/products")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.281px]">
        <motion.p
          className={`absolute font-['Inter:Medium',sans-serif] ${isActive ? 'font-semibold text-[#FF8559]' : 'font-medium text-[#364153]'} leading-[24px] left-[33.5px] not-italic text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre`}
          whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
          transition={{ duration: 0.2 }}
        >
          Products
        </motion.p>
      </div>
    </motion.div>
  );
}

function LinkSid1() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/testimonials";

  return (
    <motion.div
      className="h-[24px] relative shrink-0 w-[89.945px] cursor-pointer"
      data-name="Link_sid_1:123"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate("/testimonials")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[89.945px]">
        <motion.p
          className={`absolute font-['Inter:Medium',sans-serif] ${isActive ? 'font-semibold text-[#FF8559]' : 'font-medium text-[#364153]'} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
          whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
          transition={{ duration: 0.2 }}
        >
          Testimonials
        </motion.p>
      </div>
    </motion.div>
  );
}

function LinkSid2() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/about";

  return (
    <motion.div
      className="h-[24px] relative shrink-0 w-[67.383px] cursor-pointer"
      data-name="Link_sid_1:126"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate("/about")}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.383px]">
        <motion.p
          className={`absolute font-['Inter:Medium',sans-serif] ${isActive ? 'font-semibold text-[#FF8559]' : 'font-medium text-[#364153]'} leading-[24px] left-0 not-italic text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre`}
          whileHover={{ scale: 1.05, color: isActive ? "#FF8559" : "#101828" }}
          transition={{ duration: 0.2 }}
        >
          About Us
        </motion.p>
      </div>
    </motion.div>
  );
}

function ButtonSid3() {
  return (
    <div
      className="basis-0 bg-[#ec951a] grow h-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0"
      data-name="Button_sid_1:125"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[63.5px] not-italic text-[16px] text-center text-nowrap text-white top-[7.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">
          Enroll Now
        </p>
      </div>
    </div>
  );
}

function ContainerSid() {
  return (
    <div
      className="absolute content-stretch flex gap-[32px] h-[40px] items-center left-[1067px] top-[47px] w-[521.367px]"
      data-name="Container_sid_1:116"
    >
      <ButtonSid1 />
      <LinkSid2 />
      <LinkSid />
      <ButtonSid2 />
      <LinkSid1 />
    </div>
  );
}

export default function HeroSectionSid() {
  return (
    <div
      className="bg-white relative size-full z-0"
      data-name="HeroSection_sid_1:71"
    >
      {/* Background with subtle wave effect */}
      <div
        className=" h-[1317px] left-0 top-[-205px] w-[1728px]"
        data-name="Herosectionimage2_sid_1:73"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none  object-cover pointer-events-none size-full"
          src={imgHerosectionimage2Sid173}
        />
      </div>

      {/* Boy character with subtle bounce */}
      <motion.div
        className="absolute h-[1543px] left-[-35px] top-[-100px] w-[1728px]"
        data-name="Hero section boy 1"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgHeroSectionBoy1}
        />
      </motion.div>

      {/* Cloud with parallax */}
      <motion.div
        className="absolute h-[82px] left-[955px] top-[458px] w-[129px]"
        data-name="cloud21_sid_1:76"
        animate={{
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCloud21Sid176}
        />
      </motion.div>

      {/* Logo - keep static */}
      <div
        className="absolute h-[74px] left-[54px] top-[44px] w-[341px]"
        data-name="tiger-calligraphy11_sid_1:77"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgTigerCalligraphy11Sid177}
        />
      </div>

      {/* Paintbrush - floating with rotation */}
      <motion.div
        className="absolute h-[120px] left-[468px] top-[283px] w-[107px]"
        data-name="brush1_sid_1:78"
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgBrush1Sid178}
        />
      </motion.div>

      {/* Canvas - floating with gentle sway */}
      <motion.div
        className="absolute h-[94px] left-[706px] top-[191px] w-[84px]"
        data-name="canvas1_sid_1:79"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCanvas1Sid179}
        />
      </motion.div>

      {/* Color palette - floating */}
      <motion.div
        className="absolute h-[112px] left-[1487px] top-[493px] w-[100px]"
        data-name="colors1_sid_1:80"
        animate={{
          y: [0, -18, 0],
          x: [0, -6, 0],
          rotate: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgColors1Sid180}
        />
      </motion.div>

      {/* Paint palette - floating */}
      <motion.div
        className="absolute h-[145px] left-[577px] top-[557px] w-[129px]"
        data-name="paint1_sid_1:81"
        animate={{
          y: [0, -14, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="size-full relative"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgPaint1Sid181}
          />
        </motion.div>
      </motion.div>

      {/* Pencil - floating with rotation drift */}
      <motion.div
        className="absolute flex h-[131.104px] items-center justify-center left-[1309px] top-[177px] w-[132.881px]"
        style={
          {
            "--transform-inner-width": "88.453125",
            "--transform-inner-height": "99.421875",
          } as React.CSSProperties
        }
        animate={{
          y: [0, -22, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="flex-none rotate-[231.576deg]"
          animate={{
            rotate: [231.576, 240, 231.576],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-[99.437px] relative w-[88.464px]"
            data-name="pencil1_sid_1:82"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgPencil1Sid182}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Cloud 1 - slow parallax */}
      <motion.div
        className="absolute h-[104px] left-[-28px] top-[231px] w-[165px]"
        data-name="cloud1_sid_1:100"
        animate={{
          x: [0, 60, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCloud1Sid1100}
        />
      </motion.div>

      {/* Cloud 3 - slow parallax */}
      <motion.div
        className="absolute h-[80px] left-[537px] top-[87px] w-[128px]"
        data-name="cloud3_sid_1:101"
        animate={{
          x: [0, 70, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCloud1Sid1100}
        />
      </motion.div>

      {/* Cloud 2 - slow parallax */}
      <motion.div
        className="absolute flex h-[92px] items-center justify-center left-[507px] top-[423px] w-[146px]"
        animate={{
          x: [0, 45, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="h-[92px] relative w-[146px]"
            data-name="cloud2_sid_1:102"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgCloud1Sid1100}
            />
          </div>
        </div>
      </motion.div>

      {/* Text elements - all static */}
      <TextSid />
      <TextSid1 />

      {/* Cloud 22 - slow parallax */}
      <motion.div
        className="absolute flex h-[82px] items-center justify-center left-[1148px] top-[645px] w-[129px]"
        animate={{
          x: [0, 55, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="h-[82px] relative w-[129px]"
            data-name="cloud22_sid_1:111"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgCloud21Sid176}
            />
          </div>
        </div>
      </motion.div>

      {/* Text and navigation - all static */}
      <TextSid2 />
      <ParagraphSid />
      <ContainerSid />
    </div>
  );
}
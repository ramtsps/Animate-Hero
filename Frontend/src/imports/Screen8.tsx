import svgPaths from "./svg-n3r8cvx8yo";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import imgContainer from "figma:asset/c6f676603b1bfb49551a118e136b769d0fc790af.png";
import imgPainting11 from "figma:asset/bc7cb3502a550628d48efea55cd47a860c2a12a3.png";

import imgPaintingEssentials from "figma:asset/d51d5d02abe59b36680dc5f1a59f1d2dd1e2dca5.png";
import imgWatercolorMagic1 from "figma:asset/5831220f4cdca6801135b2a216b0b0acce994bf8.png";

import imgWatercolorMagic2 from "figma:asset/b827b8a3b66f16c541e327937715cae3df07d4eb.png";
import imgCreativeDrawingPattern1 from "figma:asset/f701808e29955e5ea857dcf5ce828415e0873842.png";

import imgCreativeDrawing1 from "figma:asset/b58834e0752f12b0e0917de213f78d00e941d5d0.png";
import imgSculptureClayPattern1 from "figma:asset/dce9626bbcfc253edec8c3d4e7d94c782cc4b47e.png";

import imgSculptureClay1 from "figma:asset/f1fe0f33cab19244fc8833f7a6bf84a4a5b1b05a.png";

import imgMixedMediaArts1 from "figma:asset/4b2b1f40487cff4e30658199b781ef1e5c59d605.png";

import imgCreativeCrafts1 from "figma:asset/0f3f224082d834f7dd69b0ba30cca116fdcd3f20.png";

function Frame() {
  return (
    <div className="absolute left-[298px] size-[100px] top-[-12px]" />
  );
}

function Container() {
  return (
    <div
      className="absolute h-[226px] left-[46.66px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[60.07px] w-[389px]"
      data-name="Container"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full"
        src={imgContainer}
      />
      <div
        className="absolute h-[227px] left-[-2px] opacity-[0.34] top-0 w-[393px]"
        data-name="painting 1 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none mix-blend-luminosity object-50%-50% object-cover opacity-[0.29] pointer-events-none size-full"
          src={imgPainting11}
        />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div >
  );
}

function Container1() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          8-week program
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_57_1007)" id="Icon">
          <path
            d={svgPaths.pca5b500}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M13.3333 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14.6667 2.66667H12"
            id="Vector_3"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p22966600}
            id="Vector_4"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_1007">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $120-$180
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[10px] top-[24px] w-[341.328px]"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%-0.16px)] top-[60px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[365px]">
        Learn essential painting techniques with acrylics and
        watercolors. Perfect for beginners ages 6-12.
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-[94.7px] size-[20px] top-[14px]"
      data-name="Icon"
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
    </div>
  );
}

function Button() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#FF8559] h-[48px] left-[12px] rounded-[1.67772e+07px] top-[129px] w-[131px] cursor-pointer"
      data-name="Button"
      style={{ marginTop: "12px" }}
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[57.5px] not-italic text-[16px] text-center text-nowrap text-white top-[12px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre cursor-pointer">{`Explore `}</p>
      <Icon2 />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute h-[268px] left-[46.66px] top-[284.07px] w-[389.328px]"
      data-name="Container"
    >
      <Container3 />
      <Paragraph />
      <Button />
    </div>
  );
}

function PaintingEssentials() {
  return (
    <motion.div
      className="relative h-[472px] overflow-clip w-[551px]"
      data-name="Painting Essentials"
      initial="normal"
      whileHover="hover"
    >
      {/* Animated background container */}
      <div
        className="absolute h-[226px] left-[46.66px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[60.07px] w-[389px]"
        data-name="Container"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full"
          src={imgContainer}
        />
        <motion.div
          className="absolute opacity-[0.34]"
          data-name="painting 1 1"
          variants={{
            normal: {
              height: 227,
              left: -2,
              top: 0,
              width: 393,
            },
            hover: {
              height: 325,
              left: -86.66,
              top: -49.07,
              width: 562,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.40, 1.56, 0.64, 1],
          }}
        >
          <motion.img
            alt=""
            className="absolute inset-0 max-w-none mix-blend-luminosity object-50%-50% object-cover pointer-events-none size-full"
            src={imgPainting11}
            variants={{
              normal: { opacity: 0.29 },
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>

      <Container4 />



      {/* Main "Painting Essentials" image - rotates and scales on hover */}
      <motion.div
        className="absolute flex items-center justify-center"
        data-name="Painting Essentials"
        variants={{
          normal: {
            height: 226,
            width: 389,
            left: 32.82,
            top: 34.1,
          },

        }}
        style={
          {
            "--transform-inner-width": "389",
            "--transform-inner-height": "226",
          } as React.CSSProperties
        }
        transition={{
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <motion.div
          className="flex-none"
          variants={{
            normal: { rotate: 0 },
            hover: { rotate: -4 },
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="h-[226px] relative w-[389px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgPaintingEssentials}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Container5() {
  return (
    <div
      className="absolute h-[226px] left-[100px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[70px] w-[389px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389 226\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-0.0000015159 26.75 -46.043 -0.0000026086 195 104.5)\\\'><stop stop-color=\\\'rgba(228,154,155,0.7)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(232,117,141,0.85)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(235,80,127,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div
        className="absolute flex h-[557.643px] items-center justify-center left-[-144px] top-[-136px] w-[722.58px]"
        style={
          {
            "--transform-inner-width": "646.03125",
            "--transform-inner-height": "430.578125",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[12.227deg]">
          <div
            className="h-[430.586px] opacity-[0.58] relative w-[646.041px]"
            data-name="Watercolor Magic 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.61] pointer-events-none size-full"
              src={imgWatercolorMagic1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon3 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          6-week program
        </p>
      </div>
    </div>
  );
}



function Container7() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $110-$160
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[10px] top-[24px] w-[341.328px]"
      data-name="Container"
    >
      <Container6 />
      <Container7 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%-0.16px)] top-[60px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[365px]">
        Discover the beauty of watercolor painting with flow
        techniques, color blending, and composition.
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute h-[268px] left-[100px] top-[294px] w-[389.328px]"
      data-name="Container"
    >
      <Container8 />
      <Paragraph1 />
      <div
        className="absolute flex items-center justify-center left-[185.34px] size-0 top-[-145px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[16.494deg]">
          <div
            className="relative size-0"
            data-name="watercolor2 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgWatercolor21}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[186px] size-0 top-[-102.04px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[311.724deg]">
          <div
            className="relative size-0"
            data-name="watercolor3 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgWatercolor31}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[177px] size-0 top-[-125.1px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[336.771deg]">
          <div
            className="relative size-0"
            data-name="watercolor1 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgWatercolor11}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[190.35px] size-0 top-[-139px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[29.753deg]">
          <div
            className="relative size-0"
            data-name="watercolor4 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgWatercolor41}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[226px] left-0 top-[-224px] w-[389px]"
        data-name="Watercolor Magic 2"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgWatercolorMagic2}
        />
      </div>
    </div>
  );
}

function WatercolorMagic() {
  return (
    <motion.div
      className="relative h-[492px] overflow-clip w-[591px]"
      data-name="Watercolor Magic"
      initial="normal"
      whileHover="hover"
    >
      {/* Animated background container */}
      <div
        className="absolute h-[226px] left-[100px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[70px] w-[389px]"
        data-name="Container"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\\\'0 0 389 226\\\\' xmlns=\\\\'http://www.w3.org/2000/svg\\\\' preserveAspectRatio=\\\\'none\\\\'><rect x=\\\\'0\\\\' y=\\\\'0\\\\' height=\\\\'100%\\\\' width=\\\\'100%\\\\' fill=\\\\'url(%23grad)\\\\' opacity=\\\\'1\\\\'/><defs><radialGradient id=\\\\'grad\\\\' gradientUnits=\\\\'userSpaceOnUse\\\\' cx=\\\\'0\\\\' cy=\\\\'0\\\\' r=\\\\'10\\\\' gradientTransform=\\\\'matrix(-0.0000015159 26.75 -46.043 -0.0000026086 195 104.5)\\\\'><stop stop-color=\\\\'rgba(228,154,155,0.7)\\\\' offset=\\\\'0\\\\'/><stop stop-color=\\\\'rgba(232,117,141,0.85)\\\\' offset=\\\\'0.5\\\\'/><stop stop-color=\\\\'rgba(235,80,127,1)\\\\' offset=\\\\'1\\\\'/></radialGradient></defs></svg>')",
        }}
      >
        <div
          className="absolute flex h-[557.643px] items-center justify-center left-[-144px] top-[-136px] w-[722.58px]"
          style={
            {
              "--transform-inner-width": "646.03125",
              "--transform-inner-height": "430.578125",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[12.227deg]">
            <div
              className="h-[430.586px] opacity-[0.58] relative w-[646.041px]"
              data-name="Watercolor Magic 1"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.61] pointer-events-none size-full"
                src={imgWatercolorMagic1}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute h-[268px] left-[100px] top-[294px] w-[389.328px]"
        data-name="Container"
      >
        <Container8 />
        <Paragraph1 />



        {/* Main image - rotates on hover */}
        <motion.div
          className="absolute flex items-center justify-center"
          data-name="Watercolor Magic 2"
          variants={{
            normal: {
              width: 389,
              height: 226,
              left: 0,
              top: -224,
            },
            hover: {
              width: 406.25,
              height: 236.125,
              left: -8.625,
              top: -229.06,
            },
          }}
          style={
            {
              "--transform-inner-width": "389",
              "--transform-inner-height": "226",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.div
            className="flex-none"
            variants={{
              normal: { rotate: 0 },
              hover: { rotate: -5 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className="h-[226px] relative w-[389px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgWatercolorMagic2}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Container10() {
  return (
    <div
      className="absolute h-[226px] left-[89px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[49px] w-[389px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389 226\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-0.0000015159 26.75 -46.043 -0.0000026086 195 104.5)\\\'><stop stop-color=\\\'rgba(226,223,142,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(220,215,108,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(213,207,74,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(207,199,41,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(204,195,24,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(201,191,7,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div
        className="absolute flex h-[628.007px] items-center justify-center left-[-154px] top-[-186px] w-[742.166px]"
        style={
          {
            "--transform-inner-width": "643.171875",
            "--transform-inner-height": "371.515625",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[27.713deg]">
          <div
            className="h-[371.52px] opacity-[0.34] relative w-[643.173px]"
            data-name="creative drawing Pattern 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.29] pointer-events-none size-full"
              src={imgCreativeDrawingPattern1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon5 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          6-week program
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_57_1007)" id="Icon">
          <path
            d={svgPaths.pca5b500}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M13.3333 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14.6667 2.66667H12"
            id="Vector_3"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p22966600}
            id="Vector_4"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_1007">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $100-$150
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[99px] top-[297px] w-[341.328px]"
      data-name="Container"
    >
      <Container11 />
      <Container12 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%+8px)] top-[333px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[371px]">
        Explore imagination through sketching, cartooning, and
        illustration techniques for young artists.
      </p>
    </div>
  );
}

function CreativeDrawing() {
  return (
    <motion.div
      className="relative h-[472px] overflow-clip w-[551px]"
      data-name="Creative Drawing"
      initial="normal"
      whileHover="hover"
    >
      <Container10 />
      <Container13 />
      <Paragraph2 />



      {/* Main image - rotates on hover */}
      <motion.div
        className="absolute flex items-center justify-center"
        data-name="Creative Drawing 1"
        variants={{
          normal: {
            width: 389,
            height: 226,
            left: 89,
            top: 50,
          },
          hover: {
            width: 416.667,
            height: 242.083,
            left: 75.31,
            top: 41.96,
          },
        }}
        style={
          {
            "--transform-inner-width": "389",
            "--transform-inner-height": "226",
          } as React.CSSProperties
        }
        transition={{
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <motion.div
          className="flex-none"
          variants={{
            normal: { rotate: 0 },
            hover: { rotate: -8 },
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="h-[226px] relative w-[389px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgCreativeDrawing1}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Icon7() {
  return (
    <div
      className="absolute left-[94.7px] size-[20px] top-[14px]"
      data-name="Icon"
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
    </div>
  );
}

function Button1() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#FF8559] h-[48px] left-[674px] rounded-[1.67772e+07px] top-[640px] w-[131px] cursor-pointer"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[57.5px] not-italic text-[16px] text-center text-nowrap text-white top-[12px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="absolute left-[94.7px] size-[20px] top-[14px]"
      data-name="Icon"
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
    </div>
  );
}

function Button2() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#f30d11] h-[48px] left-[1141px] rounded-[1.67772e+07px] top-[640px] w-[131px] cursor-pointer"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[57.5px] not-italic text-[16px] text-center text-nowrap text-white top-[12px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="absolute left-[94.7px] size-[20px] top-[14px]"
      data-name="Icon"
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
    </div>
  );
}

function Button3() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#f30d11] h-[48px] left-0 rounded-[1.67772e+07px] top-0 w-[131px] cursor-pointer"
      data-name="Button"

    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function Button4() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#f30d11] h-[48px] left-[1143px] rounded-[1.67772e+07px] top-[1095px] w-[131px] cursor-pointer"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[57.5px] not-italic text-[16px] text-center text-nowrap text-white top-[12px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
      <Icon9 />
      <Button3 />
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="absolute left-[94.7px] size-[20px] top-[14px]"
      data-name="Icon"
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
    </div>
  );
}

function Button5() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course-details")}
      className="absolute bg-[#f30d11] h-[48px] left-[674px] rounded-[1.67772e+07px] top-[1095px] w-[131px] cursor-pointer"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[57.5px] not-italic text-[16px] text-center text-nowrap text-white top-[12px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
      <Icon10 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="absolute bg-[#aceea9] h-[226px] left-[81px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[60px] w-[389px]"
      data-name="Container"
    >
      <div
        className="absolute flex h-[561.384px] items-center justify-center left-[-263px] top-[-168px] w-[769.16px]"
        style={
          {
            "--transform-inner-width": "690.390625",
            "--transform-inner-height": "398.796875",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[345.255deg]">
          <div
            className="h-[398.797px] opacity-[0.34] relative w-[690.394px]"
            data-name="Sculpture & Clay Pattern 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.49] pointer-events-none size-full"
              src={imgSculptureClayPattern1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon11 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          6-week program
        </p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_57_1007)" id="Icon">
          <path
            d={svgPaths.pca5b500}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M13.3333 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14.6667 2.66667H12"
            id="Vector_3"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p22966600}
            id="Vector_4"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_1007">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $140-$200
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[10px] top-[24px] w-[341.328px]"
      data-name="Container"
    >
      <Container15 />
      <Container16 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%-0.16px)] top-[60px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[365px]">
        Hands-on 3D art experience with clay modeling, pottery,
        and sculpture fundamentals.
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute h-[268px] left-[81px] top-[284px] w-[389.328px]"
      data-name="Container"
    >
      <Container17 />
      <Paragraph3 />
      <div
        className="absolute flex items-center justify-center left-[198.56px] size-0 top-[-121px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[19.179deg]">
          <div
            className="relative size-0"
            data-name="clay art4 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgClayArt41}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[210.07px] size-0 top-[-125px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[53.819deg]">
          <div
            className="relative size-0"
            data-name="clay art1 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgClayArt11}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[195px] size-0 top-[-115.9px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[330.512deg]">
          <div
            className="relative size-0"
            data-name="clay art3 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgClayArt31}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[191.19px] size-0 top-[-94.81px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[237.349deg]">
          <div
            className="relative size-0"
            data-name="clay art2 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgClayArt21}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[226px] left-0 top-[-224px] w-[389px]"
        data-name="Sculpture & Clay 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgSculptureClay1}
        />
      </div>
    </div>
  );
}

function SculptureClay() {
  return (
    <motion.div
      className="relative h-[472px] overflow-clip w-[551px]"
      data-name="Sculpture & Clay"
      initial="normal"
      whileHover="hover"
    >
      <Container14 />

      <div
        className="absolute h-[268px] left-[81px] top-[284px] w-[389.328px]"
        data-name="Container"
      >
        <Container17 />
        <Paragraph3 />



        {/* Main image - rotates on hover */}
        <motion.div
          className="absolute flex items-center justify-center"
          data-name="Sculpture & Clay 1"
          variants={{
            normal: {
              width: 389,
              height: 226,
              left: 0,
              top: -224,
            },
            hover: {
              width: 416.667,
              height: 242.083,
              left: -13.84,
              top: -232.04,
            },
          }}
          style={
            {
              "--transform-inner-width": "389",
              "--transform-inner-height": "226",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.div
            className="flex-none"
            variants={{
              normal: { rotate: 0 },
              hover: { rotate: 7 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className="h-[226px] relative w-[389px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgSculptureClay1}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Container19() {
  return (
    <div
      className="absolute h-[226px] left-[73px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[71px] w-[389px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389 226\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-0.0000015159 26.75 -46.043 -0.0000026086 195 104.5)\\\'><stop stop-color=\\\'rgba(143,142,226,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(103,158,180,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div
        className="absolute flex h-[628.007px] items-center justify-center left-[-154px] top-[-186px] w-[742.166px]"
        style={
          {
            "--transform-inner-width": "643.171875",
            "--transform-inner-height": "371.515625",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[27.713deg]">
          <div
            className="h-[371.52px] opacity-[0.34] relative w-[643.173px]"
            data-name="creative drawing Pattern 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.29] pointer-events-none size-full"
              src={imgCreativeDrawingPattern1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon13 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          8-week program
        </p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_57_1007)" id="Icon">
          <path
            d={svgPaths.pca5b500}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M13.3333 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14.6667 2.66667H12"
            id="Vector_3"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p22966600}
            id="Vector_4"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_1007">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $130-$190
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[10px] top-[24px] w-[341.328px]"
      data-name="Container"
    >
      <Container20 />
      <Container21 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%-0.16px)] top-[60px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[365px]">
        Combine different materials and techniques to create
        artworks using collage, paint, and objects.
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute h-[268px] left-[73px] top-[295px] w-[389.328px]"
      data-name="Container"
    >
      <Container22 />
      <Paragraph4 />
      <div
        className="absolute flex items-center justify-center left-[189.43px] size-0 top-[-123px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[164.449deg] scale-y-[-100%]">
          <div
            className="relative size-0"
            data-name="mixed media 4 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgMixedMedia41}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[179px] size-0 top-[-132.41px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[346.689deg]">
          <div
            className="relative size-0"
            data-name="mixed media 2 1"
          >
            {/* <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgMixedMedia21}
              /> */}
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center left-[194.32px] size-0 top-[-132px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[24.972deg]">
          <div
            className="relative size-0"
            data-name="mixed media 1 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgMixedMedia11}
            />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[206px] size-0 top-[-91px]">
        <div className="flex-none rotate-[180deg]">
          <div
            className="relative size-0"
            data-name="mixed media 3 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgMixedMedia31}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[226px] left-0 top-[-224px] w-[389px]"
        data-name="Mixed Media Arts 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgMixedMediaArts1}
        />
      </div>
    </div>
  );
}

function WatercolorMagic1() {
  return (
    <motion.div
      className="relative h-[482px] overflow-clip w-[591px]"
      data-name="Watercolor Magic"
      initial="normal"
      whileHover="hover"
    >
      <Container19 />

      <div
        className="absolute h-[268px] left-[73px] top-[295px] w-[389.328px]"
        data-name="Container"
      >
        <Container22 />
        <Paragraph4 />



        {/* Main image - rotates on hover */}
        <motion.div
          className="absolute flex items-center justify-center"
          data-name="Mixed Media Arts 1"
          variants={{
            normal: {
              width: 389,
              height: 226,
              left: 0,
              top: -224,
            },
            hover: {
              width: 406.25,
              height: 236.125,
              left: -8.625,
              top: -229.06,
            },
          }}
          style={
            {
              "--transform-inner-width": "389",
              "--transform-inner-height": "226",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <motion.div
            className="flex-none"
            variants={{
              normal: { rotate: 0 },
              hover: { rotate: 6 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <div className="h-[226px] relative w-[389px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgMixedMediaArts1}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Container24() {
  return (
    <div
      className="absolute h-[226px] left-[84px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[58px] w-[389px]"
      data-name="Container"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389 226\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-0.0000015159 26.75 -46.043 -0.0000026086 195 104.5)\\\'><stop stop-color=\\\'rgba(245,207,169,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(250,231,212,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div
        className="absolute flex h-[628.007px] items-center justify-center left-[-154px] top-[-186px] w-[742.166px]"
        style={
          {
            "--transform-inner-width": "643.171875",
            "--transform-inner-height": "371.515625",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[27.713deg]">
          <div
            className="h-[371.52px] opacity-[0.34] relative w-[643.173px]"
            data-name="creative drawing Pattern 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.29] pointer-events-none size-full"
              src={imgCreativeDrawingPattern1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p160f0600}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p27180a80}
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">
        <Icon15 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          4-week program
        </p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div
      className="size-[16px] shrink-0 flex items-center justify-center"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_57_1007)" id="Icon">
          <path
            d={svgPaths.pca5b500}
            id="Vector"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M13.3333 1.33333V4"
            id="Vector_2"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d="M14.6667 2.66667H12"
            id="Vector_3"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
          <path
            d={svgPaths.p22966600}
            id="Vector_4"
            stroke="var(--stroke-0, #6A7282)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33333"
          />
        </g>
        <defs>
          <clipPath id="clip0_57_1007">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="h-[20px] relative shrink-0 w-auto"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-auto flex items-center">

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-[12px] not-italic text-[#6a7282] text-[16px] text-nowrap tracking-[-0.1504px] whitespace-pre">
          $90-$140
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[10px] top-[24px] w-[341.328px]"
      data-name="Container"
    >
      <Container25 />
      <Container26 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="absolute h-[53px] left-[calc(50%-0.16px)] top-[60px] translate-x-[-50%] w-[365px]"
      data-name="Paragraph"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[18px] top-0 tracking-[-0.3125px] w-[365px]">
        Fun seasonal crafts and DIY projects that develop fine
        motor skills and creative problem-solving.
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute h-[268px] left-[84px] top-[282px] w-[389.328px]"
      data-name="Container"
    >
      <Container27 />
      <Paragraph5 />
    </div>
  );
}

function WatercolorMagic2() {
  return (
    <motion.div
      className="relative h-[483px] overflow-clip w-[591px]"
      data-name="Watercolor Magic"
      initial="normal"
      whileHover="hover"
    >
      <Container24 />
      <Container28 />



      {/* Main image - rotates on hover */}
      <motion.div
        className="absolute flex items-center justify-center"
        data-name="creative crafts 1"
        variants={{
          normal: {
            width: 389,
            height: 226,
            left: 84,
            top: 58,
          },
          hover: {
            width: 416.667,
            height: 242.083,
            left: 70.31,
            top: 49.96,
          },
        }}
        style={
          {
            "--transform-inner-width": "389",
            "--transform-inner-height": "226",
          } as React.CSSProperties
        }
        transition={{
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <motion.div
          className="flex-none"
          variants={{
            normal: { rotate: 0 },
            hover: { rotate: -6 },
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="h-[226px] relative w-[389px]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgCreativeCrafts1}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Button6() {
  return (
    <div
      className="absolute bg-[#f30d11] h-[48px] left-[674px] rounded-[1.67772e+07px] top-[1095px] w-[131px]"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="absolute bg-[#f30d11] h-[48px] left-[203px] rounded-[1.67772e+07px] top-[1095px] w-[131px]"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="absolute bg-[#f30d11] h-[48px] left-[201px] rounded-[1.67772e+07px] top-[640px] w-[131px]"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="absolute bg-[#f30d11] h-[48px] left-[674px] rounded-[1.67772e+07px] top-[640px] w-[131px]"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="absolute bg-[#f30d11] h-[48px] left-[1143px] rounded-[1.67772e+07px] top-[640px] w-[131px]"
      data-name="Button"
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%+0.34px)] not-italic text-[16px] text-center text-nowrap text-white top-[calc(50%-12.07px)] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Explore `}</p>
    </div>
  );
}

function FeaturedArtPrograms() {
  return (
    <div
      className="relative bg-[#edf6ff] min-h-screen h-auto flex flex-col items-center pb-20 w-full"
      data-name="Featured Art Programs 3"
    >
      <Frame />

      <div className="mt-12 flex justify-center" style={{ width: "100%", marginTop: "5rem" }}>
        <span
          className="px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold uppercase tracking-wide shadow-sm"
          style={{
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "9999px",
            backgroundColor: "#ffedd5",
            color: "#dd6b20",
            fontSize: "0.875rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          Featured Art Programs
        </span>
      </div>


      {/* Active Course Section */}
      <div className="flex flex-col items-center gap-8 mt-12 w-full mb-12" style={{
        display: "flex",              /* flex */
        flexDirection: "column",     /* flex-col */
        alignItems: "center",        /* items-center */
        gap: "2rem",                  /* gap-8 (8 = 2rem) */
        marginTop: "1rem",           /* mt-12 */
        marginBottom: "3rem",        /* mb-12 */
        width: "100%"
      }}>
        <div className="flex flex-col items-center gap-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%" }}>
          <h2 className="font-['Montserrat:SemiBold',sans-serif] font-bold text-4xl text-black text-center" style={{ fontSize: "48px", fontWeight: "bold", color: "#000", textAlign: "center" }}>Currently Active Course</h2>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full" style={{ width: "54px", height: "2px", backgroundColor: "#f30d11", borderRadius: "10px" }}></div>
        </div>
        <PaintingEssentials />
      </div>

      {/* Upcoming Courses Section */}
      <div className="flex flex-col items-center gap-12 w-full my-12" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem", width: "100%" }}>
        <div className="flex flex-col items-center gap-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%" }}>
          <h2 className="font-['Montserrat:SemiBold',sans-serif] font-bold text-4xl text-black text-center" style={{ fontSize: "48px", fontWeight: "bold", color: "#000", textAlign: "center" }}>Upcoming Courses</h2>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full" style={{ width: "54px", height: "2px", backgroundColor: "#f30d11", borderRadius: "10px" }}></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-full px-4 max-w-[1400px] justify-items-center" style={
          {
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            /* gap-y-12 */
            columnGap: "0.5rem",/* gap-x-4 */
            width: "100%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            maxWidth: "1400px",
            justifyItems: "center"
          }
        }>
          <div className="w-[390px] h-[350px] flex justify-center items-start overflow-visible">
            <div className="origin-top"><SculptureClay /></div>
          </div>
          <div className="w-[390px] h-[350px] flex justify-center items-start overflow-visible">
            <div className="origin-top"><WatercolorMagic /></div>
          </div>
          <div className="w-[390px] h-[350px] flex justify-center items-start overflow-visible">
            <div className="origin-top"><CreativeDrawing /></div>
          </div>
          <div className="w-[390px] h-[350px] flex justify-center items-start overflow-visible">
            <div className="origin-top"><WatercolorMagic1 /></div>
          </div>
          <div className="w-[390px] h-[350px] flex justify-center items-start overflow-visible">
            <div className="origin-top"><WatercolorMagic2 /></div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default function Screen() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Screen 7"
    >
      <FeaturedArtPrograms />
    </div>
  );
}
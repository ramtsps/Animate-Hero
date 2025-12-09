import { motion } from "motion/react";
import React from "react";

interface WatercolorMagicCardProps {
  imgWatercolorMagic1: string;
  imgWatercolor11: string;
  imgWatercolor21: string;
  imgWatercolor31: string;
  imgWatercolor41: string;
  imgWatercolorMagic2: string;
  Container8: React.ComponentType;
  Paragraph1: React.ComponentType;
}

export function WatercolorMagicCard({
  imgWatercolorMagic1,
  imgWatercolor11,
  imgWatercolor21,
  imgWatercolor31,
  imgWatercolor41,
  imgWatercolorMagic2,
  Container8,
  Paragraph1,
}: WatercolorMagicCardProps) {
  return (
    <motion.div
      className="absolute h-[492px] left-[91px] overflow-clip top-[672px] w-[591px]"
      data-name="Watercolor Magic"
      initial="normal"
      whileHover="hover"
    >
      {/* Background container */}
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

        {/* Watercolor blob 1 - top left corner */}
        <motion.div
          className="absolute flex items-center justify-center"
          variants={{
            normal: { width: 1, height: 1, left: 177, top: 121 },
            hover: { width: 112, height: 100, left: 10, top: -224 },
          }}
          style={
            {
              "--transform-inner-width": "112",
              "--transform-inner-height": "100",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="flex-none rotate-[336.771deg]">
            <motion.div
              className="relative"
              data-name="watercolor1 1"
              variants={{
                normal: { width: 1, height: 0.893 },
                hover: { width: 112, height: 100 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgWatercolor11}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Watercolor blob 2 - top right corner */}
        <motion.div
          className="absolute flex items-center justify-center"
          variants={{
            normal: { width: 1, height: 1, left: 185, top: 101 },
            hover: { width: 109, height: 93, left: 283, top: -224 },
          }}
          style={
            {
              "--transform-inner-width": "109",
              "--transform-inner-height": "93",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="flex-none rotate-[16.494deg]">
            <motion.div
              className="relative"
              data-name="watercolor2 1"
              variants={{
                normal: { width: 1, height: 0.853 },
                hover: { width: 109, height: 93 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgWatercolor21}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Watercolor blob 3 - bottom right corner */}
        <motion.div
          className="absolute flex items-center justify-center"
          variants={{
            normal: { width: 1, height: 1, left: 186, top: 144 },
            hover: { width: 136, height: 106, left: 256, top: 165 },
          }}
          style={
            {
              "--transform-inner-width": "136",
              "--transform-inner-height": "106",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="flex-none rotate-[311.724deg]">
            <motion.div
              className="relative"
              data-name="watercolor3 1"
              variants={{
                normal: { width: 1, height: 0.779 },
                hover: { width: 136, height: 106 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgWatercolor31}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Watercolor blob 4 - bottom left corner */}
        <motion.div
          className="absolute flex items-center justify-center"
          variants={{
            normal: { width: 1, height: 1, left: 190, top: 107 },
            hover: { width: 136, height: 117, left: 10, top: 154 },
          }}
          style={
            {
              "--transform-inner-width": "136",
              "--transform-inner-height": "117",
            } as React.CSSProperties
          }
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="flex-none rotate-[29.753deg]">
            <motion.div
              className="relative"
              data-name="watercolor4 1"
              variants={{
                normal: { width: 1, height: 0.86 },
                hover: { width: 136, height: 117 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgWatercolor41}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main image - rotates on hover */}
        <motion.div
          className="absolute flex items-center justify-center"
          data-name="Watercolor Magic 2"
          variants={{
            normal: { width: 389, height: 226, left: 0, top: -224 },
            hover: { width: 406.25, height: 236.125, left: -8.625, top: -229.06 },
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

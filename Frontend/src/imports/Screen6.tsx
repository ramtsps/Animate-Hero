import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import imgWatercolor21 from "figma:asset/3755efef3e2fb72aa8b92786f46143ce8e816be3.png";
import imgWatercolor31 from "figma:asset/62d6b1d87091ecdfab434ee7c59ba212840f469d.png";
import imgWatercolor5 from "figma:asset/90f9f4939178e92695dbe039857b88a9edd7882d.png";
import imgLeaf21 from "figma:asset/b731f752497282fff7af13646b56d8c1ba7fdc75.png";
import imgFrame11 from "figma:asset/f2257ed91542cc6856777e6c18542e5d0d16b1f4.png";
import imgFrame21 from "figma:asset/3201cf1c67035aacc40034339c8c4ef7d8ee5271.png";
import imgFrame31 from "figma:asset/ec210f6571beb993b7e26a020e30b51360e56e34.png";
import imgFlower1 from "figma:asset/0949d55030ad0e13fa171aec07a13aafac911fa2.png";
import imgFeather1 from "figma:asset/aa1ed1f47b7fe22086b8936f98866fc109b07fde.png";
import imgLeaf11 from "figma:asset/bd46d78c5f2fda7c221d018f7108eb28b3022376.png";
import imgFlower21 from "figma:asset/0fe8612dc5d9581d79d6963846885302d2a75a9b.png";
import imgWatercolor41 from "figma:asset/80da61bdca30ce7a9c26d7b24cc88818a4dd989e.png";

export default function Screen() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Watercolor parallax - slower, subtle movements for deeper depth
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const x1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const y3 = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const x3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Frame parallax - stronger, faster movements for foreground depth
  const y4 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const r4 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const y5 = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const r5 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const y6 = useTransform(scrollYProgress, [0, 1], [160, -160]);
  const r6 = useTransform(scrollYProgress, [0, 1], [6, -6]);

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center items-center pt-0 pb-20" data-name="Screen 6">
      <div className=" w-[1728px] h-[1200px]" ref={ref}>
        {/* Watercolor 2 1 - gentle floating */}
        <motion.div
          className="absolute h-[390px] left-[-204px] top-[9px] w-[358px]"
          data-name="watercolor 2 1"
          style={{ y: y1, x: x1 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.66] pointer-events-none size-full" src={imgWatercolor21} />
        </motion.div>

        {/* Watercolor 3 1 - gentle floating */}
        <motion.div
          className="absolute h-[447px] left-[631px] top-[957px] w-[587px]"
          data-name="watercolor 3 1"
          style={{ y: y2, x: x2 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgWatercolor31} />
        </motion.div>

        {/* Watercolor 5 - gentle floating */}
        <motion.div
          className="absolute h-[467px] left-[-164px] top-[686px] w-[447px]"
          data-name="watercolor 5"
          style={{ y: y3, x: x3 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgWatercolor5} />
        </motion.div>

        {/* Leaf 2 1 - floating animation */}
        <motion.div
          className="absolute h-[315px] left-[1126px] top-[222px] w-[363px]"
          data-name="leaf 2 1"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-40 pointer-events-none size-full" src={imgLeaf21} />
        </motion.div>

        {/* Frame 1 1 - subtle parallax */}
        <motion.div
          className="absolute h-[241px] left-[242px] top-[110px] w-[214px]"
          data-name="frame 1 1"
          style={{ y: y4, rotate: r4 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame11} />
        </motion.div>

        {/* Frame 2 1 - subtle parallax */}
        <motion.div
          className="absolute h-[230px] left-[1271px] top-[116px] w-[218px]"
          data-name="frame 2 1"
          style={{ y: y5, rotate: r5 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame21} />
        </motion.div>

        {/* Frame 3 1 - subtle parallax */}
        <motion.div
          className="absolute h-[239px] left-[1006px] top-[805px] w-[212px]"
          data-name="frame 3 1"
          style={{ y: y6, rotate: r6 }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame31} />
        </motion.div>
        <div className="absolute h-[221px] left-[1573px] top-px w-[185px]" data-name="Flower 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.79] pointer-events-none size-full" src={imgFlower1} />
        </div>

        {/* Feather 1 - soft floating */}
        <motion.div
          className="absolute h-[186px] left-[743px] top-[55px] w-[217px]"
          data-name="feather 1"
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-60 pointer-events-none size-full" src={imgFeather1} />
        </motion.div>

        {/* Leaf1 1 - soft floating */}
        <motion.div
          className="absolute h-[203px] left-[1406px] top-[994px] w-[444px]"
          data-name="leaf1 1"
          animate={{
            y: [0, -45, 0],
            x: [0, -20, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLeaf11} />
        </motion.div>

        {/* Flower 2 1 - soft floating */}
        <motion.div
          className="absolute h-[210px] left-[408px] top-[834px] w-[188px]"
          data-name="flower 2 1"
          animate={{
            y: [0, -48, 0],
            x: [0, -22, 0],
            rotate: [0, -7, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.65] pointer-events-none size-full" src={imgFlower21} />
        </motion.div>
        <div className="absolute h-[545px] left-[1526px] top-[420px] w-[523px]" data-name="watercolor 4 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWatercolor41} />
        </div>
        <div className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[127px] left-1/2 text-[64px] text-black text-center text-nowrap top-[346px] translate-x-[-50%] whitespace-pre">
          <p className="mb-0">{`Discover our curated `}</p>
          <p className="mb-0 text-white"> </p>
          <p>designed to inspire young artists</p>
        </div>
        <div className="absolute bg-[#d0e3f5] h-[119px] left-1/2 rounded-[101px] top-[477px] translate-x-[-50%] w-[548px]" />
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[127px] left-1/2 text-[64px] text-black text-center text-nowrap top-[473px] translate-x-[-50%] whitespace-pre">{`Art Programs `}</p>
      </div>
    </div>
  );
}
import imgPencil2 from "figma:asset/787f86f5413186bb1036ef5e0a13ddb6048f88bc.png";
import imgColors2 from "figma:asset/826e25e8c616f9e3182c74fc8d9dd0bacf386e02.png";
import imgPaint2 from "figma:asset/94bbe4efff0e0e8d5b2e5dab1c9f94b8eb4beb49.png";
import imgCanvas2 from "figma:asset/bdb2f700e89bb85027a826b8f018c24c46d698bc.png";
import imgBrush2 from "figma:asset/c297e8dc31d099744b989d9b7b9d0b1a6556510e.png";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
  useInView,
  useMotionValue,
  animate,
} from "motion/react";
import { useRef, useEffect, useState } from "react";

function Group6({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Text reveal animation after State 3 complete (scroll 0.98 - 1.0)
  // Stagger the animation for each line with left-to-right fade-in and spring easing
  const line1OpacityRaw = useTransform(
    scrollProgress,
    [0.98, 0.987],
    [0, 1],
  );
  const line1XRaw = useTransform(
    scrollProgress,
    [0.98, 0.987],
    [-40, 0],
  );

  const line2OpacityRaw = useTransform(
    scrollProgress,
    [0.987, 0.993],
    [0, 1],
  );
  const line2XRaw = useTransform(
    scrollProgress,
    [0.987, 0.993],
    [-40, 0],
  );

  const line3OpacityRaw = useTransform(
    scrollProgress,
    [0.993, 1.0],
    [0, 1],
  );
  const line3XRaw = useTransform(
    scrollProgress,
    [0.993, 1.0],
    [-40, 0],
  );

  // Apply spring easing for smooth, natural text transitions
  const line1Opacity = useSpring(line1OpacityRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });
  const line1X = useSpring(line1XRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  const line2Opacity = useSpring(line2OpacityRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });
  const line2X = useSpring(line2XRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  const line3Opacity = useSpring(line3OpacityRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });
  const line3X = useSpring(line3XRaw, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  return (
    <div className="absolute contents font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[105px] left-[317px] text-[#212224] text-[64px] text-center text-nowrap top-[415px] tracking-[-3px] whitespace-pre">
      {/* Line 1: "Then let your child's creativity" */}
      <motion.p
        className="absolute left-[577.5px] top-[414px] translate-x-[-50%]"
        style={{ opacity: line1Opacity, x: line1X }}
      >
        Then let your
      </motion.p>
      <motion.p
        className="absolute left-[1145.5px] top-[414px] translate-x-[-50%]"
        style={{ opacity: line1Opacity, x: line1X }}
      >
        {`child's creativity `}
      </motion.p>

      {/* Line 2: "grow as they explore colors," */}
      <motion.p
        className="absolute left-[427.5px] top-[519px] translate-x-[-50%]"
        style={{ opacity: line2Opacity, x: line2X }}
      >
        grow
      </motion.p>
      <motion.p
        className="absolute left-[864.5px] top-[519px] translate-x-[-50%]"
        style={{ opacity: line2Opacity, x: line2X }}
      >
        {`as they explore `}
      </motion.p>
      <motion.p
        className="absolute left-[1320.5px] top-[519px] translate-x-[-50%]"
        style={{ opacity: line2Opacity, x: line2X }}
      >
        {`colors, `}
      </motion.p>

      {/* Line 3: "lines, and the joy of drawing" */}
      <motion.p
        className="absolute left-[494.5px] top-[624px] translate-x-[-50%]"
        style={{ opacity: line3Opacity, x: line3X }}
      >
        lines, and
      </motion.p>
      <motion.p
        className="absolute left-[906.5px] top-[624px] translate-x-[-50%]"
        style={{ opacity: line3Opacity, x: line3X }}
      >
        the joy of
      </motion.p>
      <motion.p
        className="absolute left-[1304px] top-[624px] translate-x-[-50%]"
        style={{ opacity: line3Opacity, x: line3X }}
      >
        drawing
      </motion.p>
    </div>
  );
}

function Group3({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Pencil icon - positioned between "lines, and" and "the joy of" (Line 3)
  // State 1 (0-0.20): centered | MASSIVE 50% BUFFER (0.20-0.70): hold | State 2 (0.70-0.80): horizontal spread | Hold (0.80-0.90) | Buffer (0.90-0.92) | State 3 (0.92-0.97): smooth scatter to gap | Buffer (0.97-0.98)
  const xOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, -136, -136, -136, 251, 251, 251],
  );
  const yOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, 204, 204, 204],
  );
  const scale = useTransform(
    scrollProgress,
    [0.7, 0.8],
    [0.8, 1],
  );

  // Apply spring easing for smooth, natural transitions
  const xOffset = useSpring(xOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const yOffset = useSpring(yOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="absolute size-[100px] left-[815px] top-[433px]"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="var(--fill-0, #D1F6D8)"
            id="Ellipse 3"
            r="50"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute flex h-[117.802px] items-center justify-center left-[805px] top-[424px] w-[119.399px]"
        style={
          {
            x: xOffset,
            y: yOffset,
            "--transform-inner-width": "79.484375",
            "--transform-inner-height": "89.34375",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[231.576deg]">
          <div
            className="h-[89.348px] relative w-[79.489px]"
            data-name="pencil 2"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgPencil2}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Group2({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Colors icon - positioned between "grow" and "as they explore" (Line 2)
  // State 1 (0-0.20): centered | MASSIVE 50% BUFFER (0.20-0.70): hold | State 2 (0.70-0.80): stay centered | Hold (0.80-0.90) | Buffer (0.90-0.92) | State 3 (0.92-0.97): smooth scatter to gap | Buffer (0.97-0.98)
  const xOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, -291, -291, -291],
  );
  const yOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, 92, 92, 92],
  );
  const scale = useTransform(
    scrollProgress,
    [0.7, 0.8],
    [0.8, 1],
  );

  // Apply spring easing for smooth, natural transitions
  const xOffset = useSpring(xOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const yOffset = useSpring(yOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="absolute left-[815px] size-[100px] top-[433px]"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="var(--fill-0, #FFCFB4)"
            id="Ellipse 4"
            r="50"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute h-[107px] left-[818px] top-[429px] w-[95px]"
        data-name="colors 2"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgColors2}
        />
      </motion.div>
    </>
  );
}

function Group({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Paint icon - positioned between "as they explore" and "colors," (Line 2)
  // State 1 (0-0.20): centered | MASSIVE 50% BUFFER (0.20-0.70): hold | State 2 (0.70-0.80): horizontal spread | Hold (0.80-0.90) | Buffer (0.90-0.92) | State 3 (0.92-0.97): smooth scatter to gap | Buffer (0.97-0.98)
  const xOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 118, 118, 118, -165, -165, -165],
  );
  const yOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, 200, 200, 200],
  );
  const scale = useTransform(
    scrollProgress,
    [0.7, 0.8],
    [0.8, 1],
  );

  // Apply spring easing for smooth, natural transitions
  const xOffset = useSpring(xOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const yOffset = useSpring(yOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="absolute left-[815px] size-[100px] top-[433px]"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="var(--fill-0, #FFFDC4)"
            id="Ellipse 5"
            r="50"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute h-[145px] left-[801px] top-[411px] w-[129px]"
        data-name="paint 2"
        style={{ x: xOffset, y: yOffset }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgPaint2}
        />
      </motion.div>
    </>
  );
}

function Group1({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Canvas icon - positioned between "the joy of" and "drawing" (Line 3)
  // State 1 (0-0.20): centered | MASSIVE 50% BUFFER (0.20-0.70): hold | State 2 (0.70-0.80): horizontal spread | Hold (0.80-0.90) | Buffer (0.90-0.92) | State 3 (0.92-0.97): smooth scatter to gap | Buffer (0.97-0.98)
  const xOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 252, 252, 252, 295, 295, 295],
  );
  const yOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, 94, 94, 94],
  );
  const scale = useTransform(
    scrollProgress,
    [0.7, 0.8],
    [0.8, 1],
  );

  // Apply spring easing for smooth, natural transitions
  const xOffset = useSpring(xOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const yOffset = useSpring(yOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="absolute left-[815px] size-[100px] top-[433px]"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="var(--fill-0, #D1E4F6)"
            id="Ellipse 2"
            r="50"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute h-[79px] left-[830px] top-[444px] w-[70px]"
        data-name="canvas 2"
        style={{ x: xOffset, y: yOffset }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgCanvas2}
        />
      </motion.div>
    </>
  );
}

function Group4({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  // Brush icon - positioned between "Then let your" and "child's creativity" (Line 1)
  // State 1 (0-0.20): centered | MASSIVE 50% BUFFER (0.20-0.70): hold | State 2 (0.70-0.80): horizontal spread | Hold (0.80-0.90) | Buffer (0.90-0.92) | State 3 (0.92-0.97): smooth scatter to gap | Buffer (0.97-0.98)
  const xOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, -252, -252, -252, -23, -23, -23],
  );
  const yOffsetRaw = useTransform(
    scrollProgress,
    [0.2, 0.7, 0.8, 0.9, 0.92, 0.97, 0.98, 1.0],
    [0, 0, 0, 0, 0, -18, -18, -18],
  );
  const scale = useTransform(
    scrollProgress,
    [0.7, 0.8],
    [0.8, 1],
  );

  // Apply spring easing for smooth, natural transitions
  const xOffset = useSpring(xOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const yOffset = useSpring(yOffsetRaw, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      <motion.div
        className="absolute left-[815px] size-[100px] top-[433px]"
        style={{ x: xOffset, y: yOffset, scale }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="var(--fill-0, #ABE7E9)"
            id="Ellipse 1"
            r="50"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute h-[75px] left-[832px] top-[446px] w-[67px]"
        data-name="brush 2"
        style={{ x: xOffset, y: yOffset }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgBrush2}
        />
      </motion.div>
    </>
  );
}

function Group5({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  return (
    <>
      <Group3 scrollProgress={scrollProgress} />
      <Group2 scrollProgress={scrollProgress} />
      <Group scrollProgress={scrollProgress} />
      <Group1 scrollProgress={scrollProgress} />
      <Group4 scrollProgress={scrollProgress} />
    </>
  );
}

function Group7() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Initial check
    checkWidth();

    // Add listener
    window.addEventListener('resize', checkWidth);

    // Cleanup
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 50%"],
  });

  // For mobile/tablet (<1000px), use one-time animation
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const viewProgress = useMotionValue(0);

  useEffect(() => {
    if (isMobile && isInView) {
      animate(viewProgress, 1, { duration: 1.5, ease: "easeOut" });
    }
  }, [isMobile, isInView, viewProgress]);

  // Use viewProgress if mobile, otherwise scrollYProgress
  const activeProgress = isMobile ? viewProgress : scrollYProgress;

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 w-full " style={{ marginTop: "-200px" }}
    >
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[50%] not-italic text-[#6a7282] text-[16px] text-center text-nowrap top-[365px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre " >
        Start your child's journey on a blank canvas
      </p>
      <Group6 scrollProgress={activeProgress} />
      <Group5 scrollProgress={activeProgress} />
    </div>
  );
}

export default function Screen() {
  return (
    <div
      className="bg-white flex items-center z-[-20000] relative justify-center  w-full p-[0px] "
      data-name="Screen 5" style={{ height: "100vh" }}
    >
      <Group7 />
    </div>
  );
}
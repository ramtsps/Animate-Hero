import HeroSectionSid from "./imports/HeroSectionSid171";
import Screen5 from "./imports/Screen5";
import Screen6 from "./imports/Screen6";
import Screen7 from "./imports/Screen7";
import Screen10 from "./imports/Screen10-152-2103";
import AboutUs from "./components/AboutUs";
import ComingSoon from "./components/ComingSoon";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [scale, setScale] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const designWidth = 1728;
      const newScale = width / designWidth;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-full bg-white overflow-x-hidden relative"
      style={{ height: contentHeight * scale }}
    >
      <div
        ref={contentRef}
        style={{
          width: "1728px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <HeroSectionSid />
        <Screen5 />
        <Screen6 />
        <Screen7 />
        <Screen10 />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/programs"
          element={
            <ComingSoon
              title="Programs"
              description="Explore our creative art programs designed to inspire and nurture young artists."
            />
          }
        />
        <Route
          path="/products"
          element={
            <ComingSoon
              title="Products"
              description="Discover high-quality art supplies and kits curated for budding creators."
            />
          }
        />
        <Route
          path="/testimonials"
          element={
            <ComingSoon
              title="Testimonials"
              description="Hear from parents and students about their journey with Primiya's Art."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
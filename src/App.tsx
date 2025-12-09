import HeroSectionSid from "./imports/HeroSectionSid171";
import Screen5 from "./imports/Screen5";
import Screen6 from "./imports/Screen6";
import Screen7 from "./imports/Screen7";
import Screen10 from "./imports/Screen10-152-2103";
import AboutUs from "./components/AboutUs";
import ComingSoon from "./components/ComingSoon";
import ScaleWrapper from "./components/ScaleWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <ScaleWrapper>
      <HeroSectionSid />
      <Screen5 />
      <Screen6 />
      <Screen7 />
      <Screen10 />
    </ScaleWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ScaleWrapper>
              <AboutUs />
            </ScaleWrapper>
          }
        />
        <Route
          path="/programs"
          element={
            <ScaleWrapper>
              <ComingSoon
                title="Programs"
                description="Explore our creative art programs designed to inspire and nurture young artists."
              />
            </ScaleWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <ScaleWrapper>
              <ComingSoon
                title="Products"
                description="Discover high-quality art supplies and kits curated for budding creators."
              />
            </ScaleWrapper>
          }
        />
        <Route
          path="/testimonials"
          element={
            <ScaleWrapper>
              <ComingSoon
                title="Testimonials"
                description="Hear from parents and students about their journey with Primiya's Art."
              />
            </ScaleWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
import HeroSectionSid from "./imports/HeroSectionSid171";
import Screen5 from "./imports/Screen5";
import Screen6 from "./imports/Screen6";
import Screen7 from "./imports/Screen7";
import Footer from "./imports/Footer";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import ScaleWrapper from "./components/ScaleWrapper";
import CourseDetails from "./components/CourseDetails";
import EnrollmentForm from "./components/EnrollmentForm";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./styles/App.css";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <ScaleWrapper>
      <HeroSectionSid />
      <Screen5 />
      <Screen6 />
      <Screen7 />

      <Footer />
    </ScaleWrapper>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
              <Programs />
            </ScaleWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <ScaleWrapper>
              <Products />
            </ScaleWrapper>
          }
        />
        <Route
          path="/testimonials"
          element={
            <ScaleWrapper>
              <Testimonials />
            </ScaleWrapper>
          }
        />
        <Route
          path="/course-details"
          element={
            <ScaleWrapper>
              <CourseDetails />
            </ScaleWrapper>
          }
        />
        <Route
          path="/enrollment"
          element={
            <ScaleWrapper>
              <EnrollmentForm />
            </ScaleWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
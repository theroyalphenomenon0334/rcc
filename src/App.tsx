import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import RCCtv from "./pages/RCCtv";
import Giving from "./pages/Giving";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/what-we-do":
        title = "";
        metaDescription = "";
        break;
      case "/rcctv":
        title = "";
        metaDescription = "";
        break;
      case "/giving":
        title = "";
        metaDescription = "";
        break;
      case "/vision":
        title = "";
        metaDescription = "";
        break;
      case "/mission":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WhoWeAre />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/rcctv" element={<RCCtv />} />
      <Route path="/giving" element={<Giving />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;

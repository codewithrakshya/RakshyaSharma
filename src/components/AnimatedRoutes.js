import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../nav/nav";

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <>
      <Navigation />
    </>
  );
}

export default RoutesWithAnimation;

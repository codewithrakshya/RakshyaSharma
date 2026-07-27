import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import Navigation from "./nav/nav";
import Footer from "./pages/Footer";
import Blog from "./pages/Blogs/Blog";
import BlogPost from "./pages/Blogs/BlogPost";
const Main = lazy(() => import("./pages/main"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App font-poppins">
      <Helmet>
        <title>Rakshya U. Sharma | Bioinformatician</title>
        <meta
          name="description"
          content="Portfolio of Rakshya U. Sharma, a San Francisco-based data analyst and bioinformatician."
        />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog/:id" element={<BlogPost />} />{" "}
            {/* Dynamic route first */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

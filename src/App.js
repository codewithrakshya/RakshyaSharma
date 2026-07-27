import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import Navigation from "./nav/nav";
import Footer from "./pages/Footer";
import Blog from "./pages/Blogs/Blog";
import BlogPost from "./pages/Blogs/BlogPost";
const Main = lazy(() => import("./pages/main"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Publications = lazy(() => import("./pages/Publications"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App font-poppins">
      <Helmet>
        <title>Rakshya Sharma | Bioinformatician</title>
        <meta
          name="description"
          content="Portfolio of Rakshya Sharma, a San Francisco-based bioinformatician and quantitative research analyst."
        />
        <link rel="canonical" href="https://rakshyausharma.com" />
        <meta
          property="og:title"
          content="Rakshya Sharma | Bioinformatician"
        />
        <meta
          property="og:description"
          content="Research portfolio spanning computational biology, statistical genetics, population health, and reproducible workflows."
        />
        <meta property="og:url" content="https://rakshyausharma.com" />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rakshya Sharma",
            url: "https://rakshyausharma.com",
            jobTitle: "Bioinformatician",
            affiliation: {
              "@type": "Organization",
              name: "University of California, San Francisco",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "University of California, Santa Cruz",
            },
            sameAs: [
              "https://www.linkedin.com/in/rakshyausharma",
              "https://github.com/codewithrakshya",
              "https://orcid.org/0000-0002-7026-6598",
            ],
          })}
        </script>
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
            <Route path="/publications" element={<Publications />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

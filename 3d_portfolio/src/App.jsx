import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SocialLinks,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-hero-pattern bg-cover
        b-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <div className="relative z-10 text-center">
          <SocialLinks
            linkedinUrl="https://www.linkedin.com/in/mohamedelaagip/"
            githubUrl="https://github.com/bigboimo"
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

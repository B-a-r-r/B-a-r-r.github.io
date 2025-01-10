import styles from "../style";
import { Navbar, Hero, About, Footer, ProjectsSlider, Skills, Contact } from "../components";

const Home = () => {

  return (
    <div id='app-container' 
      className=
      {`
        ${styles.page}
        ${styles.flexCol}
      `}
    >
      <div id="navbar-container"
        className={``}
      > 
        <Navbar />

      </div>

      <div id="hero-container"
        className=
        {`
          ${styles.sectionContainer}
          xxl:px-[17%]
        `}
      >
        <Hero />
      </div>

      <div id="about-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      >
        <About />
      </div>

      <div id="skills-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      >
        {/* <Skills /> */}
      </div>

      <div id="projects-carrousel-container"
        className=
        {`
          ${styles.sectionContainer}
          overflow-visible
        `}
      >
        <ProjectsSlider />
      </div>

      <div id="contact-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      >
        <Contact />
      </div>

      <div id="footer-container"
        className={`
          w-full
          h-fit
          ${styles.contentEndAll}
        `}
      > 
        <Footer />
      </div>

    </div>
  );
};

export default Home;

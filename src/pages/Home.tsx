import styles from "../style";
import { Hero, About, ProjectsSlider, Skills, Contact } from "../components/sections";

const Home = () => {

  return (
    <div id='home-container' 
      className=
      {`
        ${styles.page}
        ${styles.flexCol}
      `}
    >
      <div id="hero-container"
        className=
        {`
          ${styles.sectionContainer}
          h-[40vh]
        `}
      > <Hero /> </div>

      <div id="about-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      > <About /> </div>

      <div id="skills-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      > <Skills /> </div>

      <div id="projects-slider-container"
        className=
        {`
          ${styles.sectionContainer}
          overflow-visible
        `}
      > <ProjectsSlider /> </div>

      <div id="contact-container"
        className=
        {`
          ${styles.sectionContainer}
        `}
      > <Contact /> </div>
    </div>
  );
};

export default Home;

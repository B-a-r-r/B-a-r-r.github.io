import styles from "./style";
import { Navbar, Hero, About, Footer, ProjectsSlider, Skills, Contact } from "./components";

function App() {
  return (

    <div id='app-container' 
      className=
      {`
        ${styles.boxWidth}
        ${styles.sizeFull}
        overflow-hidden
        color-primary
      `}
    >

      <div id="navbar-container"
        className={``}
      > 
      
        <Navbar />

      </div>

      <div id="content-container" 
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexCol}
          px-[12%]
          overflow-visible
        `}
      >

        <div id="hero-container"
          className=
          {`
            ${styles.sizeScreen}
            xxl:px-[5%]
          `}
        >

          <Hero />

        </div>

        <div id="about-container"
          className=
          {`
            ${styles.sizeScreen}
          `}
        >

          <About />
        
        </div>
        
        <div id="projects-carrousel-container"
          className=
          {`
            ${styles.sizeScreen}
            overflow-visible
          `}
        >

          <ProjectsSlider />
        
        </div>

        <div id="skills-container"
          className=
          {`
            ${styles.sizeScreen}
          `}
        >

          <Skills />

        </div>

        <div id="contact-container"
          className=
          {`
            ${styles.sizeScreen}
          `}
        >

          <Contact />

        </div>

      </div>

      <div id="footer-container"
        className={``}
      > 
      
        <Footer />

      </div>

    </div>
  );
};

export default App;

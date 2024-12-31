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
        className=
        {`
          flex 
          ${styles.contentCenter}
        `}
      > 
      
        <Navbar />

      </div>

      <div id="content-container" 
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexCol}
          ${styles.contentCenter}
          px-[12%]
          overflow-visible
        `}
      >

        <div id="hero-container"
          className=
          {`
            ${styles.sizeFull}
            xxl:px-[5%]
          `}
        >

          <Hero />

        </div>

        <div id="about-container"
          className=
          {`
            ${styles.sizeFull}
          `}
        >

          <About />
        
        </div>
        
        <div id="projects-carrousel-container"
          className=
          {`
            ${styles.sizeFull}
            overflow-visible
          `}
        >

          <ProjectsSlider />
        
        </div>

        <div id="skills-container"
          className=
          {`
            ${styles.sizeFull}
          `}
        >

          <Skills />

        </div>

        <div id="contact-container"
          className=
          {`
            ${styles.sizeFull}
          `}
        >

          <Contact />

        </div>

      </div>

      <div id="footer-container"
        className=
        {`
          flex ${styles.contentCenter}
        `}
      > 
      
        <Footer />

      </div>

    </div>
  );
};

export default App;

import styles from "./style";
import { Navbar, Hero, About, Footer, Form, ProjectsCarrousel, Skills } from "./components";

function App() {
  return (

    <div id='app-container' 
      className=
      {`
        w-full 
        overflow-hidden
        color-primary
      `}
    >

      <div id="navbar-container"
        className=
        {`
          ${styles.flexCenter}
        `}
      > 
      
        <Navbar />

      </div>

      <div id="content-container" 
        className=
        {`
          w-full
          h-full
          ${styles.flexCenter}
          flex-col
          px-[15%]
          overflow-visible
        `}
      >

        <div id="hero-container"
          className=
          {`
            w-full
            h-full
          `}
        >

          <Hero />

        </div>

        <div id="about-container"
          className=
          {`
            w-full
            h-full
          `}
        >

          <About />
        
        </div>
        
        <div id="projects-carrousel-container"
          className=
          {`
            w-full
            h-full
            overflow-visible
          `}
        >

          <ProjectsCarrousel />
        
        </div>

        
        <Skills />
        <Form />

      </div>

      <div id="footer-container"
        className=
        {`
          ${styles.flexCenter}
        `}
      > 
      
        {/* <Footer /> */}

      </div>

    </div>
  );
};

export default App;

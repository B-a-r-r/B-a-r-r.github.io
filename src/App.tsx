import styles from "./style";
import { Navbar, Hero, About, Footer, Form, Projects, Skills } from "./components";

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
          ${styles.flexCenter}
          flex-col
        `}
      >

        <div id="hero-container"
          className=
          {`
            z-[1]
          `}
        >

          <Hero />

        </div>

        <About />
        <Projects /> 
        <Skills />
        <Form />

      </div>

      <div id="footer-container"
        className=
        {`
          ${styles.flexCenter}
        `}
      > 
      
        <Footer />

      </div>

    </div>
  );
};

export default App;

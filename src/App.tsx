import styles from "./style";
import { Navbar, Hero, About, Footer, Form, Projects, Skills,Retex } from "./components";

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
          clear-start
        `}
      > 
      
        <Navbar />

      </div>

      <div id="hero-container"
        className=
        {`
          ${styles.paddingX}
          ${styles.flexStart}
          ${styles.boxWidth}
          z-[1]
        `}
      >

        <Hero />

      </div>

      <div id="content-container" 
        className=
        {`
          ${styles.paddingX} 
          ${styles.flexStart}
          ${styles.boxWidth}
        `}
      >
        <div id="content-container"
          className=
          {`
            ${styles.boxWidth}
          `}
        >

          <About />
          <Retex />
          <Projects /> 
          <Skills />
          <Form />
          <Footer />

        </div>
      </div>

    </div>
  );
};

export default App;

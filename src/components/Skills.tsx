import React from 'react'
import styles from '../style'

const Skills = () => {
  return (
    <section id='skills'
      className=
      {`
        w-full
        h-screen
        ${styles.flexCenter}
        flex-col
      `}
    >
      <div id="controles-container"
        className=
        {`
          w-full
          h-[10%]
          ${styles.flexStart}
          justify-center
          flex-row
          space-x-10
        `}
      >

        <button id="lang-button"
          className=
          {`
          `}
        > Languages </button>

        <button id="tools-button"
          className=
          {`
          `}
        > Tools </button>

        <button id="lib-button"
          className=
          {`
          `}
        > Libraries </button>

      </div>


    </section>
  )
}

export default Skills
